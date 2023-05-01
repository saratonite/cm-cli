import Listr from "listr";
import { Contact } from "../models/index.js";
import { isDBFileExists } from "../lib/db.js";
import { t } from "../utils/ui.js";

export async function runMigration() {
  let taskItems: Listr.ListrTask[] = [
    {
      title: `Creating contact table`,
      task: Contact._createTable,
    },
  ];
  let tasks = new Listr(taskItems);

  await tasks.run();
}

export function dbCheck() {
  let exixts = isDBFileExists();
  if (!exixts) {
    console.log(t.bgRed(t.white("Database file not exists, use init command")));

    process.exit(0);
  }
}
