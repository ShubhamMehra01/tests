Feature: Recruitment module
  Scenario: View candidates
    Given I am logged in
    When I navigate to recruitment page
    Then I should see the candidate list