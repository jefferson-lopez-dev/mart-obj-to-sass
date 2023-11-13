import { writeFile, mkdir } from "fs";
import { convObjToSassVars } from "./convObjToSassVars";
import { promisify } from "util";
import { green } from "colors";

const mkdirAsyncDev = promisify(mkdir);
const writeFileAsyncDev = promisify(writeFile);

export async function genSingleFileDev(
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
    await mkdirAsyncDev(folderPath, { recursive: true });
    await writeFileAsyncDev(file, content);
    console.log(resultMsg);
  } catch (err) {
    console.error("Error:", err);
  }
}
