Feature: My Info module
  Scenario: View personal details
    Given I am logged in
    When I navigate to My Info page
    Then I should see personal details