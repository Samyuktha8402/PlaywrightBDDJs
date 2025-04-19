Feature: Practice form Test
Scenario: Verify Practice Form 
    When I enter 'StudentFirstname' and 'StudentLastname' and 'Email'
    Then I select Gender
    Then I enter 'mobile number' and 'DOB' and 'Subjects'
    Then I click hobbies
    Then I upload picture
    Then I enter 'CurrrentAddress'
    Then I select state and dropdown and submut
    