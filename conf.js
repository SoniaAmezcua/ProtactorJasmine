exports.config = {
    framework: 'jasmine2',
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',
  
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      'browserName': 'chrome'
    },
    /*multiCapabilities: [{
      browserName: 'firefox'
    }, {
      browserName: 'chrome'
    }],*/

  
    // Spec patterns are relative to the location of the spec file. They may
    // include glob patterns.
    suites: {
      
      login: 'test/login/**/*Spec.js'
      //homepage: 'test/homepage/**/*Spec.js',
      //search: ['tests/e2e/contact_search/**/*Spec.js',
      //  'tests/e2e/venue_search/**/*Spec.js']
      // e.g para ejectuar suites:  protractor conf.js --suite homepage 
    },
            
    onPrepare: function() {
      browser.waitForAngularEnabled(false);
      browser.ignoreSynchronization == true;
      browser.manage().window().maximize();
      browser.manage().timeouts().implicitlyWait(10000);

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
                modifySuiteName: function(generatedSuiteName, suites) {
                    // this will produce distinct suite names for each capability,
                    // e.g. 'firefox.login tests' and 'chrome.login tests'
                    return browserName + '.' + generatedSuiteName;
                }
            });
            jasmine.getEnv().addReporter(junitReporter);
        });
    }
  };