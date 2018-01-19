 Feature: DataDriven Testing

  Scenario Outline: Checking login button functionality
    Given open chrome and start application
    When I enter valid "<username>" and "<password>"
    Then User should be loggedin
    Then Application should be closed

    Examples:  
      | username                    | password  |
      | lekkalavignan@gmail.com     | password1 |
      | vignanlekkala@gmail.com     | password2 |
      | lekkalavignan0412@gmail.com | password3 |
