import { program } from "commander";
import { runMigration } from "../../utils/db-migration.js";
export const initCmd = program
  .command("init")
  .description("Initialize and setup app")
  .action(async () => {
    await appInit();

    process.exit(0);
  });

async function appInit() {
  try {
    await runMigration();
  } catch (e) {}
}
