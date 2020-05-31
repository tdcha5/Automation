beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {


  it('Should be able to submit a successful submission via contact us form', function(done) {
  		browser.setValue("[name='first_name']",'Tori');
  		browser.setValue("[name='last_name']",'Chambers');
  		browser.setValue("[name='email']",'test@test.com');
  		browser.setValue("[name='message']",'I am adding this text here');
  		browser.click("[type='submit']");
   });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
		browser.setValue("[name='first_name']",'Abby');
  		browser.setValue("[name='last_name']",'McCarthy');
  		browser.setValue("[name='email']",'test@test.com');
  		browser.click("[type='submit']");
   });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
		browser.setValue("[name='first_name']",'Janet');
  		browser.setValue("[name='email']",'test@test.com');
  		browser.click("[type='submit']");
   });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
  		browser.setValue("[name='first_name']",'Tori');
  		browser.setValue("[name='last_name']",'Chambers');
  		browser.click("[type='submit']");
  });
});