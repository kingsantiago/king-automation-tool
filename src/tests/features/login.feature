Feature: To test Log in Page functionality

  @passed
  Scenario: to test log in page successfully
    Given the user is on the login page as "<status>"
    When the user enters username as "<username>"
    When the user enters password as "<password>"
    And the user clicks on the submit button
    Then the user should be redirected to the logged-in page

    Examples:
      | status | username | password    |
      | Sucess | student  | Password123 |

  @failed
  Scenario: to test log in page for unsuccessful attemp via incorrect username
    Given the user is on the login page as "<status>"
    When the user enters username as "<username>"
    When the user enters password as "<password>"
    And the user clicks on the submit button
    Then the user should see the error message

    Examples:
      | Status   | Username | Password    |
      | failUser | stud     | Password123 |
      | failPass | student  | Pass123     |
  #Scenario: to test log in page for unsuccessful attemp via incorrect password
   # Given the user is on the login page as "<Status>"
  #  When the user enters username as "<Username>"
   # When the user enters password as "<Password>"
  #  And the user clicks on the submit button
   # Then the user should see the error message
   # @failedscenario
