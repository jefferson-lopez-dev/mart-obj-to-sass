import { genFilesWithStruct, genSingleFile } from "../src/index";

const choices = {
  colors: {
    white: {
      100: "#fff",
      200: "#fff",
      300: "#fff",
    },
    black: {
      100: "#000",
      200: "#000",
      300: "#000",
    },
  },
};

async function Scripts() {
  await genFilesWithStruct(choices, "./writeSassFiles", true);
  await genSingleFile(choices, "./generateSassFile", "colors");
}
Scripts();
