import { writeFile, mkdirSync } from "fs";
import { green } from "colors";
import { convObjToSassVars } from "../convObjToSassVars";

export function genSingleFileDev(
  obj: object,
  folderPath: string,
  fileName: string
) {
  const isObject = typeof obj === "object" && obj !== null;
  const content = isObject
    ? convObjToSassVars(obj, fileName)
    : `$--${fileName}: ${obj};`;
  const file = `${folderPath}/_${fileName}.scss`;
  const fileMgs = green(`[_${fileName}.scss]`);
  const successMsg = "  File created";
  const resultMsg = `${successMsg} - ${fileMgs}`;

  try {
    mkdirSync(folderPath, { recursive: true });
    writeFile(file, content, () => {});
    console.log(resultMsg);
  } catch (err) {
    console.error("Error:", err);
  }
}
