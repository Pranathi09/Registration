const http = require('http');
const fs = require('fs');
const args = require('minimist')(process.argv.slice(2));

let HomePage;
let ProjectPage;
let RegistrationPage;
let RegistrationScript;

fs.readFile("home.html", (err, data) => {
    if (err) throw err;
    HomePage = data.toString();
})

fs.readFile("project.html", (err, data) => {
    if (err) throw err;
    ProjectPage = data.toString();
})

fs.readFile("registration.html", (err, data) => {
    if (err) throw err;
    RegistrationPage = data.toString();
})

fs.readFile("script.js", (err, data) => {
    if (err) throw err;
    RegistrationScript = data.toString();
})

http.createServer((request, response) => {
    let url = request.url;
    response.writeHead(200, { 'Content-Type': 'text/html' });
    switch (url) {
        case "/project":
            response.write(projectPage);
            response.end();
            break;
        case "/registration":
            response.write(registrationPage);
            response.end();
            break;
        case "/script.js":
            response.write(registrationScript);
            response.end();
            break;
        default:
            response.write(homePage);
            response.end();
            break;
    }
}).listen(args.port);