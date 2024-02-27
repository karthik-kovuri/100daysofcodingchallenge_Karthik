class Contact {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class ContactManager {
    constructor() {
        this.contacts = []; 
    }

    addContact(contact) {
        this.contacts.push(contact);
    }

    viewAllContacts() {
        console.log("All Contacts:");
        this.contacts.forEach((contact, index) => {
            console.log(`${index + 1}. Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
        });
    }

    searchContactByName(name) {
        const foundContact = this.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
        if (foundContact) {
            console.log(`Contact found: Name: ${foundContact.name}, Email: ${foundContact.email}, Phone: ${foundContact.phone}`);
        } else {
            console.log(`Contact with name "${name}" not found.`);
        }
    }
}


const myContactManager = new ContactManager();

const contact1 = new Contact("Murali", "murali@example.com", "43646476747");
const contact2 = new Contact("Rohit", "rohit@example.com", "75846484949");

myContactManager.addContact(contact1);
myContactManager.addContact(contact2);

myContactManager.viewAllContacts();
myContactManager.searchContactByName("Rohit");
