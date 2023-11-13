import { writeFile, mkdir } from "fs";
import { convObjToSassVars } from "./convObjToSassVars";
import { promisify } from "util";
import { green } from "colors";

const mkdirAsync = promisify(mkdir);
const writeFileAsync = promisify(writeFile);

export async function generateSassFile(
  obj: object,
  folderPath: string,
  fileName: string
) {
  const content = convObjToSassVars(obj);
  const file = `${folderPath}/_${fileName}.scss`;
  const fileMgs = green(`[${fileName}.scss]`);
  const successMsg = "File created";
  const resultMsg = `${successMsg} - ${fileMgs}`;

  try {
    await mkdirAsync(folderPath, { recursive: true });
    await writeFileAsync(file, content);
    console.log(resultMsg);
  } catch (err) {
    console.error("Error:", err);
  }
}
