//https://www.protractortest.org/#/tutorial
// conf.js
/*exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
      browserName: 'firefox'
    }
  }*/

// conf.js multiCapabilities + reports (npm install –g jasmine-reporters@^2.0.0  npm install --save-dev jasmine-reporters@^2.0.0)
exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    multiCapabilities: [{
      browserName: 'firefox'
    }, {
      browserName: 'chrome'
    }],
    onPrepare: function() {
        var jasmineReporters = require('C:/Users/vetta/node_modules/jasmine-reporters');
     
        // returning the promise makes protractor wait for the reporter config before executing tests
        return browser.getProcessedConfig().then(function(config) {
            // you could use other properties here if you want, such as platform and version
            var browserName = config.capabilities.browserName;
     
            var junitReporter = new jasmineReporters.JUnitXmlReporter({
                consolidateAll: true,
                savePath: 'testresults',
                // this will produce distinct xml files for each capability
                filePrefix: browserName + '-xmloutput',
                modifySuiteName: function(generatedSuiteName, suite) {
                    // this will produce distinct suite names for each capability,
                    // e.g. 'firefox.login tests' and 'chrome.login tests'
                    return browserName + '.' + generatedSuiteName;
                }
            });
            jasmine.getEnv().addReporter(junitReporter);
        });
    }

  }

