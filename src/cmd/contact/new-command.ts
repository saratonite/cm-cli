import { program } from "commander";
import inquirer, { QuestionCollection } from "inquirer";
import { t, createSpinner } from "../../utils/ui.js";
import { Contact } from "../../models/index.js";
export const newCmd = program
  .command("new")
  .description("Add new contact")
  .action(async () => {
    let questions: QuestionCollection = [
      {
        type: "input",
        message: "Name ",
        name: "name",
      },
      {
        type: "input",
        message: "Email ",
        name: "email",
      },
      {
        type: "input",
        message: "Phone ",
        name: "phone",
      },
      {
        type: "confirm",
        message: "Save contact ",
        name: "save",
      },
    ];

    let addMore: boolean = true;

    while (addMore) {
      let { name, email, phone, save } = await inquirer.prompt(questions);

      if (save) {
        const saveSpinner = createSpinner("Saving contact...");
        await Contact.create({ name, email, phone });
        saveSpinner.succeed("Contact saved");
      }

      const { addNew } = await inquirer.prompt([
        {
          name: "addNew",
          message: "Add new contact",
          type: "confirm",
        },
      ]);

      addMore = addNew;
    }

    process.exit(0);
  });
