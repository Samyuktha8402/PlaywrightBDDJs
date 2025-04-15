Feature: web ui test with feature files
Scenario: Verify Login Functionality
  # Given I navigate to the login page
  When I enter "Admin" and "admin123"
  Then I click on the login button
  Then I should see the homepage

# Scenario Outline: Scenario Outline name: Verify Login Functionality
#   # Given I navigate to the login page
#   When I enter "Admin" and "admin123"
#   Then I click on the login button
#   Then I should see the homepage

#   Examples:
#       | Header 1 | Header 2 | Header 3 |
#       | Value 1  | Value 2  | Value 3  |
#        | Value 2  | Value 2  | Value 3  |