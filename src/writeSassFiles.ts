import { promisify } from "util";
import { generateSassFile } from "./generateSassFile";
import { writeFile } from "fs";

export async function writeSassFiles(
  obj: object,
  folder: string,
  Zindex?: boolean
) {
  const objTyped: Record<string, any> = obj;
  const keys = Object.keys(objTyped);
  const writeFileAsync = promisify(writeFile);
  let contentIndex = "";

  for (const key of keys) {
    await generateSassFile(objTyped[key], `${folder}/${key}`, key);
    contentIndex += `@import "./${key}/${key}";\n`;
  }
  Zindex ? await writeFileAsync(`${folder}/_index.scss`, contentIndex) : "";
}
