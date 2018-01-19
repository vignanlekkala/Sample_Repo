$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("smoke.feature");
formatter.feature({
  "line": 1,
  "name": "DataDriven Testing",
  "description": "",
  "id": "datadriven-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Checking login button functionality",
  "description": "",
  "id": "datadriven-testing;checking-login-button-functionality",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be loggedin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "datadriven-testing;checking-login-button-functionality;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "datadriven-testing;checking-login-button-functionality;;1"
    },
    {
      "cells": [
        "lekkalavignan@gmail.com",
        "password1"
      ],
      "line": 11,
      "id": "datadriven-testing;checking-login-button-functionality;;2"
    },
    {
      "cells": [
        "vignanlekkala@gmail.com",
        "password2"
      ],
      "line": 12,
      "id": "datadriven-testing;checking-login-button-functionality;;3"
    },
    {
      "cells": [
        "lekkalavignan0412@gmail.com",
        "password3"
      ],
      "line": 13,
      "id": "datadriven-testing;checking-login-button-functionality;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Checking login button functionality",
  "description": "",
  "id": "datadriven-testing;checking-login-button-functionality;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"lekkalavignan@gmail.com\" and \"password1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be loggedin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.open_chrome_and_start_application()"
});
formatter.result({
  "duration": 8878368372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lekkalavignan@gmail.com",
      "offset": 15
    },
    {
      "val": "password1",
      "offset": 45
    }
  ],
  "location": "stepDefination.I_enter_valid_and(String,String)"
});
formatter.result({
  "duration": 6970784996,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.User_should_be_loggedin()"
});
formatter.result({
  "duration": 192250541,
  "status": "passed"
});
formatter.match({
  "location": "stepDefination.Application_should_be_closed()"
});
formatter.result({
  "duration": 2356949724,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Checking login button functionality",
  "description": "",
  "id": "datadriven-testing;checking-login-button-functionality;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "open chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"vignanlekkala@gmail.com\" and \"password2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be loggedin",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefination.open_chrome_and_start_application()"
});
