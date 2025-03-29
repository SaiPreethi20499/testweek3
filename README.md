
### SIT737- Cloud Native Application Development ####
#### 4.1P: Building a simple calculator microservice

#### Overview

This project involves creating a microservice that performs basic arithmetic operations (addition, subtraction, multiplication, division) using Node.js and Express. Additionally, it includes logging functionality using Winston to capture request details and errors.

#### Prerequisites

Ensure you have the following installed:

Node.js: Download

Git: Download

Visual Studio Code (or any preferred code editor): Download

#### Step 1: Clone the Repository

git clone https://github.com/username/sit737-2025-prac4p.git
cd sit737-2025-prac4p

#### Step 2: Install Dependencies

npm install express winston

#### Step 3: Create the Microservice

Create a file named calculator.js.

Add the code seen in 'calculator.js' file.

#### Step 4: Run the Microservice

To start the application, use the command:

node calculator.js

You should see:

Server running on port 3040

#### Step 5: Test the Microservice

Open your browser and test endpoints:

Addition Example: http://localhost:3040/calculate?operation=add&num1=5&num2=5

Subtraction Example: http://localhost:3040/calculate?operation=sub&num1=10&num2=5

#### Step 6: Verify Logs

We can verify the logs in 'combined.log' and 'error.log' files.

#### Step 7: Push Code to GitHub

git add .
git commit -m "Initial commit for calculator microservice"
git push origin main
