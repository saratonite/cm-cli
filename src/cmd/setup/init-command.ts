import { program } from "commander";
import { initDb } from "../../lib/db.js";
import { t, createSpinner } from "../../utils/ui.js";
export const initCmd = program
  .command("init")
  .description("Initialize and setup app")
  .action(async () => {
    await appInit();

    process.exit(0);
  });

async function appInit() {
  const spinner = createSpinner(`Initializing database...`);
  try {
    await initDb();
    spinner.succeed(`App initialized`);
  } catch (e) {
    spinner.fail(`Error initializing app `);
  }
}
