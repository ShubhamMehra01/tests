Feature: Performance module
  Scenario: View performance dashboard
    Given I am logged in
    When I navigate to performance page
    Then I should see performance dashboard