var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);

client
	//initialize test
    .init()
    //viewport size is important to set. Especially if the test is unable to find the element to click
    .setViewportSize({
    	width: 1200,
    	height: 800
    })
    .url('http://www.webdriveruniversity.com/')
    .getTitle().then(function(title) {
        console.log('Title is: ' + title);
    })
    // click event and locator
    .click("#contact-us")
    //add a 3 second pause, measured in milleseconds
    .pause(3000)
    .end();