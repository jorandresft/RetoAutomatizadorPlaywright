Feature: Schedule a meeting

  Background:
    Given the user is on the serenity demo page

  Scenario Outline: test scheduling a successful meeting
    And attempts to log in
      | user   | pass   |
      | <user> | <pass> |
    When click on Organization and Business Units
    And New Business Unit and Save
      | name   | mainUnit   |
      | <name> | <mainUnit> |
    Then click on Meeting and Meetings
    And New Meeting and Save
      | meetingName   | meetingType   | meetingNumber   | startDate   | endDate   | location   | unit   | organizedBy   | reporter   | attendeeList   |
      | <meetingName> | <meetingType> | <meetingNumber> | <startDate> | <endDate> | <location> | <unit> | <organizedBy> | <reporter> | <attendeeList> |
    And validate meeting creation "<meetingName>"

    Examples:
      | user  | pass     | name   | mainUnit   | meetingName | meetingType | meetingNumber | startDate        | endDate          | location | unit   | organizedBy  | reporter     | attendeeList |
      | admin | serenity | Unit31 | Acme Corp. | Meeting31   | General     |             1 | 10/11/2024 16:55 | 10/11/2024 17:55 | HQ-01    | Unit31 | Aaron Taylor | Aaron Taylor | Aaron Taylor |
