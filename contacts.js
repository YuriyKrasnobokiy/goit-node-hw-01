import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");

// CommonJS
// const contactsPath = path.join(__dirname, "contacts.json")

const updateContacts = (contacts) =>
  fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

// TODO: задокументувати кожну функцію

export const listContacts = async () => {
  // ...твій код. Повертає масив контактів.
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
};

export const getContactById = async (contactId) => {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
};

export const removeContact = async (contactId) => {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await updateContacts(contacts);
  return result;
};

export const addContact = async (data) => {
  // ...твій код. Повертає об'єкт доданого контакту.
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await updateContacts(contacts);
  return newContact;
};

// export const updateContactById = async (contactId, data) => {
//   const contacts = await listContacts();
//   const index = contacts.findIndex((item) => item.id === contactId);
//   if (index === -1) {
//     return null;
//   }
//   contacts[index] = { ...contacts[index], ...data };
//   await updateContacts(contacts);
//   return contacts[index];
// };

/////////////////////
