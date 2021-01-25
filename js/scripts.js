// Business Logic for AddressBook ---------
function AddressBook() {
    this.contacts = {};
    this.currentId = 0;
  }
  
  AddressBook.prototype.addContact = function(contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
  }
  
  AddressBook.prototype.assignId = function() {
    this.currentId += 1;
    return this.currentId;
  }

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] != undefined) {
    return this.contacts[id];
  }
  return false;
}

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

Contact.prototype.capitalizedFull = function() {
  return this.firstName[0].toUpperCase() + this.firstName.slice(1).toLowerCase() + " " + this.lastName[0].toUpperCase() + this.lastName.slice(1).toLowerCase();
}

/* ****************************************************************** */


let epicodusContacts =  new AddressBook(); 
let andy = new Contact('andy', 'lawson', '411');
console.log(andy.fullName())
epicodusContacts.addContact(andy);
console.log(epicodusContacts)