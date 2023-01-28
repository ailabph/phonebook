import { Person, Address } from "./types/index";
export class Phonebook{

  public id:number;
  public personInfo:Person;
  public addressInfo:Address;

  constructor(id:number, person:Person, address:Address) {
    this.id = id;
    this.personInfo = person;
    this.addressInfo = address;
  }

  private static contacts:Phonebook[] = [];

  public static addContact(person:Person, address:Address):Phonebook{
    const newContact = new Phonebook(Date.now(),person,address);
    this.contacts.push(newContact);
    return newContact;
  }

  public static getRecords():Phonebook[]{
    return this.contacts;
  }
}