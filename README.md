# API Automation Framework

This project automates the verification of user tasks using Rest Assured and TestNG. The scenario involves checking that all users from the city `FanCode` have completed more than half of their todo tasks.

## Scenario

- **Given**: User has todo tasks
- **And**: User belongs to the city `FanCode`
- **Then**: User's completed task percentage should be greater than 50%

`FanCode` city can be identified by latitude between `-40` to `5` and longitude between `5` to `100` in the users API.

## Prerequisites

- Java 8 or higher
- Maven
- Git

## Setup

1. Clone the repository:
   ```sh
   git clone git@github.com:apurvaspatil/fanCodeAssignment.git

2. Install the dependencies:

```npm install```

## Running the Tests

To execute the tests, use the following command:

```npm test```
