Feature: Test Login 
Scenario: Verify Login page
    When I open URL check login page opened 
    Then click on Register
    Then Enter "testfname" and "testlname" and "testemail.087@yopmail.com" and "9908765789"
    Then click on occupation
    Then enter "Password@123" and "Password@123"
    Then click on checkbox and Register 
    # Then Verify the success page 
    # Then click on Enter
    Then Enter "testemail.087@yopmail.com" and "Password@123"
    Then Click on Login 
    Then click on Add to cart and click on cart
    Then click on checkout
    # Then enter the payment details
    Then enter "I" and "n" and "d"
    Then select from dropdown and Click on place order

    

