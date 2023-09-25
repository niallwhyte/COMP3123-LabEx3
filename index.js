var http = require("http");
var employees = require("./Employee")

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8089

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            res.write("<h1>Welcome to Lab Exercise 03</h1>")
        }

        if (req.url === '/employee') {
            res.write(JSON.stringify(employees))
        }

        if (req.url === '/employee/names') {
            const sortedEmployeeNames = employees
                .map(employee => `${employee.firstName} ${employee.lastName}`)
                .sort();
            res.write(JSON.stringify(sortedEmployeeNames))
        }

        if (req.url === '/employee/totalsalary') {
            const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);
            res.write(JSON.stringify(totalSalary))
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})