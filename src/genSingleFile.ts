import { writeFile, mkdir } from "fs";
import { promisify } from "util";
import { bold, green, grey, yellow } from "colors";
import { clgSpc } from "./utils/clg";
import { convObjToSassVarsDev } from "./dev";

const mkdirAsync = promisify(mkdir);
const writeFileAsync = promisify(writeFile);

export async function genSingleFile(
  obj: object,
  folderPath: string,
  fileName: string
) {
  const content = convObjToSassVarsDev(obj);
  const file = `${folderPath}/_${fileName}.scss`;
  const fileMgs = green(`[_${fileName}.scss]`);
  const successMsg = "  File created";
  const resultMsg = `${successMsg} - ${fileMgs}`;

  try {
    await mkdirAsync(folderPath, { recursive: true });
    await writeFileAsync(file, content);
    clgSpc();
    console.log(`${bold(yellow("● Rute File Generated"))} ${grey(folderPath)}`);
    console.log(resultMsg);
    clgSpc();
  } catch (err) {
    console.error("Error:", err);
  }
}
