import * as contactService from "./contacts.js";

const invokeAction = async ({ action, contactId, ...data }) => {
  switch (action) {
    case "list":
      const allContacts = await contactService.listContacts();
      return console.log(allContacts);

    case "get":
      const oneContact = await contactService.getContactById(contactId);
      return console.log(oneContact);

    case "remove":
      const removedContact = await contactService.removeContact(contactId);
      return console.log(removedContact);

    case "add":
      const newContact = await contactService.addContact(data);
      return console.log(newContact);

    // case "updateById":
    //   const updateContact = await contactService.updateContactById(
    //     contactId,
    //     data,
    //   );
    //   return console.log(updateContact);
  }
};

// invokeAction({ action: "list" });
// invokeAction({ action: "getById", contactId: "drsAJ4SHPYqZeG-83QTVW" });
// invokeAction({
//   action: "add",
//   name: "Test",
//   email: "test@qa.team",
//   phone: "(714) 111-1111",
// });
// invokeAction({
//   action: "updateById",
//   contactId: "fWIIQFmzVkDj3wGfQpAa8",
//   name: "TestQWQWE",
//   email: "testQWQWE@qa.team",
//   phone: "(714) 661-1111",
// });
invokeAction({
  action: "removeById",
  contactId: "fWIIQFmzVkDj3wGfQpAa8",
});
