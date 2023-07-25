// const yargs = require('yargs');
// const { hideBin } = require('yargs/helpers');
const { program } = require('commander');

const contacts = require('./conacts');

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'read':
      const allContacts = await contacts.listContacts();
      console.log(allContacts);
      break;
    case 'getById':
      const searchedContact = await contacts.getContactById(id);
      console.log(searchedContact);
      break;
    case 'remove':
      const removedContact = await contacts.removeContact(id);
      console.log(removedContact);
      break;
    case 'add':
      const addedConact = await contacts.addContact({ name, email, phone });
      console.log(addedConact);
      break;
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

// ? yargs
// const arr = hideBin(process.argv);

// const { argv } = yargs(arr);
// // console.log(argv);
// invokeAction(argv);

// ?commander
program
  .option('-a, --action, <type>')
  .option('-i, --id, <type>')
  .option('-n, --name, <type>')
  .option('-e, --email, <type>')
  .option('-p, --phone, <type>');

program.parse();

const options = program.opts();

invokeAction(options);
