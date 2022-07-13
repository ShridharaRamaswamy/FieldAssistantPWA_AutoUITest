var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var jasmineReporters = require('jasmine-reporters');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
  directConnect: true,
  allScriptsTimeout: 990000,
  getPageTimeout: 120000,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome',
    //  chromeOptions: {
    //   'args': ['incognito']
    // }, 
    // 'shardTestFiles': true,
      // 'marionette': true,
    'acceptInsecureCerts': true,
    'maxInstances': 1
    
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  // specs: [
  //   //'../tests/registerClient/register.js',
  //   '../tests/login.js',
  //   //  '../tests/sync/sync.js',
  //   // '../tests/route/route.js',
  //   //'../tests/device/device.js',
  //   // '../tests/workProcedure/workProcedure.js',
  //   // '../tests/log/log.js',
  //   '../tests/logout.js'
  // ],

  suites:
  {
    testsuite: [
      // 'C:/Users/Administrator/Documents/FieldAssistantPWA_AutoUITest/tests/deleteregisterclient/deleteregisterclient.js',
      '../tests/registerClient/register.js',
      '../tests/login/login.js',
      '../tests/sync/sync.js',
      '../tests/route/route.js',
      '../tests/device/device.js',
      '../tests/workProcedure/workProcedure.js',
      '../tests/log/log.js',
      '../tests/logout/logout.js'
    ]
  },

  SELENIUM_PROMISE_MANAGER: false,


  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 999999
  },

  // Assign the test reporter to each running instance
    // Setup the report before any tests start
    beforeLaunch: function() {
      return new Promise(function(resolve){
        reporter.beforeLaunch(resolve);
      });
    },

  onPrepare: function () {

    browser.manage().window().setSize(1400, 800);
   
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults.xml'
    }));

    var fs = require('fs-extra');

    fs.emptyDir('screenshots/', function (err) {
      console.log(err);
    });

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == 'failed') {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get('browserName');

            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
              stream.write(new Buffer(png, 'base64'));
              stream.end();
            });
          });
        }
      }
    });

    jasmine.getEnv().addReporter(reporter);
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

  },
     // Close the report after all tests finish
  afterLaunch: function(exitCode) {
    return new Promise(function(resolve){
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
    
  },

  //HTMLReport called once tests are finished
onComplete: function() {
  var browserName, browserVersion;
  var capsPromise = browser.getCapabilities();

  capsPromise.then(function (caps) {
     browserName = caps.get('browserName');
     browserVersion = caps.get('version');
     platform = caps.get('platform');

     var HTMLReport = require('protractor-html-reporter-2');

     testConfig = {
         reportTitle: 'Protractor Test Execution Report',
         outputPath: './',
         outputFilename: 'ProtractorTestReport',
         screenshotPath: './screenshots',
         testBrowser: browserName,
         browserVersion: browserVersion,
         modifiedSuiteName: false,
         screenshotsOnlyOnFailure: true,
         testPlatform: platform
     };
     new HTMLReport().from('xmlresults.xml', testConfig);
 });
}
  
};
