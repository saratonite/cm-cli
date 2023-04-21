import { program } from "commander";
import { z } from "zod";
import { t } from "../../utils/ui.js";
import { Contact } from "../../models/index.js";
import inquirer from "inquirer";
export const deleteCmd = program
  .command("delete <contact-id>")
  .action(async (contactId) => {
    const v = parseNumber.safeParse(contactId);

    if (!v.success) {
      console.log(t.red("Invalid contactId"));
      process.exit(1);
    }

    const contact = await Contact.getById(Number(v.data));

    if (!contact) {
      console.log(t.red("Record not found"));
      process.exit(0);
    }

    const ans = await inquirer.prompt([
      {
        type: "confirm",
        name: "ok",
        message: `Delete ${contact?.name}`,
      },
    ]);

    if (ans.ok) {
      const result = await Contact.deleteById(Number(v.data));
      console.log(t.green(`${contact?.name} deleted`));
    }

    process.exit(0);
  });

const parseNumber = z.string().transform((v) => {
  let num = Number(v);
  return num;
});
