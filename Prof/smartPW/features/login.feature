@login
Feature: Login functionality


  Scenario: Successful login
    Given I open the login page
    When I enter valid credentials
    Then I redirected to dashboard page