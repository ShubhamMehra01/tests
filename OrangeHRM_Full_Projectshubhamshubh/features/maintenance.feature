Feature: Maintenance module
  Scenario: Access maintenance
    Given I am logged in
    When I navigate to maintenance page
    Then I should see maintenance options