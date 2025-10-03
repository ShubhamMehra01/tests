Feature: Directory module
  Scenario: View employee directory
    Given I am logged in
    When I navigate to directory page
    Then I should see employee directory
    Then I fetch all the employee details
    Then I click on first employee