Feature: Buzz module
  Scenario: View buzz feed
    Given I am logged in
    When I navigate to buzz page
    Then I should see buzz feed