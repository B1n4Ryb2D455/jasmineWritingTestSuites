describe('AddressBook', function() {
    it('should be able to add a contact', function() {
        var AddressBook = new AddressBook(),
            thisContact = new Contact();

            AddressBook.addContact(thisContact);

            expect(AddressBook.getContact(0)).toBe(thisContact);
    });
});