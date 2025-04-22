Feature: Practice form Test
Scenario: Verify Practice Form 
    When I enter "StudentFirstname1" and "StudentLastname1" and "tests.tests34@yopmail.com"
    Then I select Gender
    Then I entered '7076383848' and '12/9/2009' 
    # Then I click on language and enter "language"
    Then I click hobbies
    Then I upload file 'testdata/XPATH.pdf'
    Then I enter 'CurrrentAddress'
    Then I select state and dropdown and submit
    