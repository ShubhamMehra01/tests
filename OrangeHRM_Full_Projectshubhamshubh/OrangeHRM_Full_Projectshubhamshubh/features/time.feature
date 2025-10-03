Feature: Time module
  Scenario: View employee timesheet
    Given I am logged in
    When I navigate to time page
    Then I should see the timesheet