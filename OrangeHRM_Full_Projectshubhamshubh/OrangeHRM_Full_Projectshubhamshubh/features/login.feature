Feature: Login functionality
  Scenario: Successful login
    Given I am on the login page
    When I enter valid username and password
    Then I should see the dashboard