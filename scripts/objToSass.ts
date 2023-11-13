import {
  convObjToSassVars,
  genFilesWithStruct,
  genSingleFile,
} from "../src/index";
import { choices, decisions } from "mart-desing-token";

genFilesWithStruct(choices, "./obj/choices", true);
genSingleFile(decisions, "./obj/decisions", "colors");
