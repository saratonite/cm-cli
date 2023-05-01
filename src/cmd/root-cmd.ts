import { Command } from "commander";
import { initCmd } from "./setup/index.js";
import { dbCheck } from "../utils/db-migration.js";

import { newCmd, listCmd, deleteCmd } from "./contact/index.js";
export const RootCmd = new Command("contact")
  .description("Contact manager")
  .hook("preSubcommand", (thisCommand, actionCommand) => {
    if (actionCommand.name() !== "init") {
      dbCheck();
    }
  })
  .addCommand(initCmd)
  .addCommand(newCmd)
  .addCommand(listCmd)
  .addCommand(deleteCmd);
