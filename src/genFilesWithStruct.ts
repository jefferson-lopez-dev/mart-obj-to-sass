import { genSingleFileDev } from "./dev/genSingleFileDev";
import { yellow, grey, green, bold } from "colors";
import { clgSpc } from "./utils/clg";
import { promisify } from "util";
import { writeFile } from "fs";

export async function genFilesWithStruct(
  obj: object,
  rootFolder: string,
  generateIndex?: boolean
) {
  const objTyped: Record<string, any> = obj;
  const keys = Object.keys(objTyped);
  const writeFileAsync = promisify(writeFile);
  let contentIndex = "";

  clgSpc();
  console.log(
    `${bold(yellow("● Rute Folder Generated Files"))} ${grey(rootFolder)}`
  );

  for (const key of keys) {
    await genSingleFileDev(objTyped[key], `${rootFolder}/${key}`, key);
  }
  if (generateIndex) {
    await writeFileAsync(`${rootFolder}/_index.scss`, contentIndex);
    console.log(`${bold(green("  File Created"))} - ${green("[_Index.scss]")}`);
  }
  clgSpc();
}
