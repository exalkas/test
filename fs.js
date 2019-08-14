const fs = require('fs');



// const textin = fs.readFileSync('./testtext.txt', 'utf-8');

// console.log(textin);

// fs.writeFileSync('./newfiles.txt',textin);

// fs.readFile('testtext.txt', 'utf-8',(err, data) => {
//     console.log('File read asynchronously: data=', data);
//     fs.writeFile('newfile2.txt', `${data} and something more`, 'utf-8', err => {
//         console.log('File written!');
//     })
// });
// console.log('now i read the file');

const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    const path = req.url;
    console.log('REQ.URL=', req.url);
    if (path === '/') {
        res.end('Hello from http server!');
    } else if (path==='/product') {
        res.end('Hi! This is product route!')
    } else {
        res.writeHead(400, {
            'Content-type': 'text/html',
            'some-otherheader': 'some descr for content'
        });
        res.end('Not found!')
    }
    

});

server.listen(8000, '127.0.0.1', () => console.log("Server is up at 8000" ));