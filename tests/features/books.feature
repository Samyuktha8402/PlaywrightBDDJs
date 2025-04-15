Feature: test feature file 
Scenario: Verify Login
    When I enter "firstname" and "lastname" and "username" and "password"
    Then I click on Register
    #Then I should see user registered