import Listr from "listr";
import { Contact } from "../models/index.js";

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
