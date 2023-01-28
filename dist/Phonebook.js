"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Phonebook = void 0;
class Phonebook {
    constructor(id, person, address) {
        this.id = id;
        this.personInfo = person;
        this.addressInfo = address;
    }
    static addContact(person, address) {
        const newContact = new Phonebook(Date.now(), person, address);
        this.contacts.push(newContact);
        return newContact;
    }
    static getRecords() {
        return this.contacts;
    }
}
exports.Phonebook = Phonebook;
Phonebook.contacts = [];
//# sourceMappingURL=Phonebook.js.map