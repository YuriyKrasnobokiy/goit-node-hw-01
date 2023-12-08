// import yargs, { command } from "yargs";
import { program } from "commander";

import * as contactService from "./db/contacts.js";

const invokeAction = async ({ action, id, ...data }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      return console.table(allContacts);

    case "get":
      const oneContact = await contactService.getContactById(id);
      return console.log(oneContact);

    case "remove":
      const removedContact = await contactService.removeContact(id);
      return console.log(removedContact);

    case "add":
      const newContact = await contactService.addContact(data);
      return console.log(newContact);

    /////////додатково, оновлення контакту////////////
    // case "updateById":
    //   const updateContact = await contactService.updateContactById(id, data);
    //   return console.log(updateContact);
  }
};

// через yargs
// const { argv } = yargs(process.argv.slice(2));
// invokeAction(argv);

// через commander
program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();

const options = program.opts();
invokeAction(options);
