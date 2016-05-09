var path = require('path');

describe('index page', function() {
	it('should add a new contact', function() {
		browser.get('http://localhost:8080');
    element(by.css('.button')).click();

    var contacts = element.all(by.repeater('contact in vm.contacts'));
    expect(contacts.count()).toEqual(4);
    expect(contacts.get(1).name.getText()).toEqual('Tim');
    expect(contacts.get(1).phone.getText()).toEqual('3934203242');
	});
});
