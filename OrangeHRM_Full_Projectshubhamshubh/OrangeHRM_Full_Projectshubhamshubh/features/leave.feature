Feature: Leave module
  Scenario: Apply for leave
    Given I am logged in
    When I navigate to leave page
    And I apply for leave from "2025-10-01" to "2025-10-05"
    Then I should see leave request submitted