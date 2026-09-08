Feature: Form Submit Demo
@Regression
Scenario: Form Submission
    When clicking formsubmit
    Then enter the "name"
    Then entering "message"
    Then click on submit
