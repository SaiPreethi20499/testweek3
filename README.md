
### SIT737- Cloud Native Application Development ####
#### 4.1P: Building a simple calculator microservice

#### Overview

This project involves creating a microservice that performs basic arithmetic operations (addition, subtraction, multiplication, division) using Node.js and Express. Additionally, it includes logging functionality using Winston to capture request details and errors.

#### Prerequisites

Ensure you have the following installed:

**Node.js:** https://nodejs.org/en/download/

**Git:** https://git-scm.com/downloads

**Visual Studio Code (or any preferred code editor):** https://code.visualstudio.com

#### Step 1: Clone the Repository

Start by cloning the repository from GitHub to your local machine:

```sh
git clone https://github.com/username/sit737-2025-prac4p.git
cd sit737-2025-prac4p
```
This will download the project and navigate to the project directory.

#### Step 2: Install Dependencies

The project uses Express for creating the microservice and Winston for logging. To install these dependencies, run:

```sh
npm install express winston
```
This command will install both Express and Winston in your project directory.

#### Step 3: Create the Microservice

Create a javascript file named 'calculator.js'. Add the code seen in 'calculator.js' file. This code sets up an Express application with logging and basic arithmetic functionality.

#### Step 4: Run the Microservice

To start the application, use the command:

```sh
node calculator.js
```

Once the server starts, you should see the following output in your terminal:
```sh
Server running on port 3040
```

Your microservice is now running and listening for requests.

#### Step 5: Test the Microservice

You can test the calculator microservice by making HTTP GET requests to the /calculate endpoint with the necessary query parameters.

Here are a few examples:

1. **Addition Example:** Open your browser to make a request:

```sh 
http://localhost:3040/calculate?operation=add&num1=5&num2=5 
```

2. **Subtraction Example:** 

```sh 
http://localhost:3040/calculate?operation=sub&num1=10&num2=5 
```

#### Step 6: Verify Logs

The application will log important information about the requests and any errors. You can verify the logs by checking the combined.log and error.log files in the project directory.

- **combined.log:** Contains general logs including operation details.

- **error.log:** Contains error logs, including invalid operations or other errors encountered during execution.

#### Step 7: Push Code to GitHub

Once you've made changes to the code, you can push your changes to GitHub.

```sh
git add .
git commit -m "Initial commit for calculator microservice"
git push -u origin main
```