import { program } from "commander";
import { Contact } from "../../models/index.js";
import { createTable } from "../../utils/ui.js";
export const listCmd = program
  .command("list")
  .description("List contacts")
  .action(async () => {
    const result = await Contact.getAll();

    const table = createTable({
      head: ["ID", "Name", "Email", "Phone"],
    });

    result.map((r) => {
      let rowValue: string[] = Object.values(r);
      table.push(rowValue);
    });

    console.log(table.toString());
    process.exit(0);
  });
