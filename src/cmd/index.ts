import { Command } from "commander";
import { newCmd, listCmd, deleteCmd } from "./contact/index.js";
import { initCmd } from "./setup/index.js";

export const rootCommand = new Command("qz")
  .description(`Quiz CLI`)
  .addCommand(newCmd)
  .addCommand(listCmd)
  .addCommand(deleteCmd)
  .addCommand(initCmd);
