import { writeFile, mkdir } from "fs";
import { convObjToSassVars } from "./";
import { promisify } from "util";
import { bold, green, grey, yellow } from "colors";
import { clgBordrSpc, clgSpc } from "./utils/clg";

const mkdirAsync = promisify(mkdir);
const writeFileAsync = promisify(writeFile);

export async function genSingleFile(
  obj: object,
  folderPath: string,
  fileName: string
) {
  const content = convObjToSassVars(obj);
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
