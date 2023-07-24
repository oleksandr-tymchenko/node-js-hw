const fs = require('fs/promises');
const path = require('path');
const contacts = require('./conacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'read':
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);
    case 'getById':
      const searchedContact = await contacts.getContactById(id);
      return console.log(searchedContact);
    case 'remove':
      const removedContact = await contacts.removeContact(id);
      return console.log(removedContact);
    case 'add':
      const addedConact = await contacts.addContact({ name, email, phone });
      return console.log(addedConact);
    default:
      return console.log('Unknown action');
  }
};

// invokeAction({ action: 'read' });
// invokeAction({ action: 'remove', id: 'qdggE76Jtbfd9eWJHrssH' });
invokeAction({ action: 'add', name: 'Ol Tymch', email: 'myemail@mail.com', phone: '050888888' });
