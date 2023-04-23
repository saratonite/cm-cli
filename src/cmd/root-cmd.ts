import { Command } from "commander";
import { initCmd } from "./setup/index.js";
import { newCmd, listCmd, deleteCmd } from "./contact/index.js";
export const RootCmd = new Command("contact")
  .description("Contact manager")
  .addCommand(initCmd)
  .addCommand(newCmd)
  .addCommand(listCmd)
  .addCommand(deleteCmd);
