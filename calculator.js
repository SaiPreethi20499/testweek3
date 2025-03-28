const express = require("express");
const app = express();
const fs = require('fs');
const winston = require("winston");

const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "calculator-microservice" },
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "combined.log" }),
    ],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple(),
        })
    );
}

const operations = {
    add: (n1, n2) => n1 + n2,
    sub: (n1, n2) => n1 - n2,
    mul: (n1, n2) => n1 * n2,
    div: (n1, n2) => (n2 !== 0 ? n1 / n2 : "Cannot divide by zero"),
};

app.get("/calculate", (req, res) => {
    try {
        const { operation, num1, num2 } = req.query;
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if (!operations[operation]) {
            logger.error(`Invalid operation: ${operation}`);
            throw new Error("Invalid operation. Use add, sub, mul, or div.");
        }
        if (isNaN(n1) || isNaN(n2)) {
            logger.error("Invalid number input");
            throw new Error("Both num1 and num2 must be valid numbers.");
        }

        const result = operations[operation](n1, n2);
        
        logger.log({
            level: "info",
            message: `Operation: ${operation}, Numbers: ${n1}, ${n2}, Result: ${result}`,
        });
        
        res.status(200).json({ statusCode: 200, operation, num1: n1, num2: n2, result });
    } catch (error) {
        res.status(500).json({ statusCode: 500, msg: error.toString() });
    }
});

const port = 3040;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
