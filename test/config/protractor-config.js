var specs = require( "./protractor-specs" );

exports.config = {
    capabilities: {
        "browserName": "chrome"
    },
    params: {}, // access through browser.params.KEY
    directConnect: true,
    baseUrl: "http://localhost:3000",
    rootElement: "html",
    specs: specs,
    jasmineNodeOpts: {
        isVerbose: true,
        showColors: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 60000
    },
    onPrepare: function ()
    {
        browser.driver.manage().window().maximize(); // use the full screen
    }
};