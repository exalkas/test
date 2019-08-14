const fs = require('fs');
const crypto = require('crypto');
const start = Date.now();

process.env.UV_THREADPOOL_SIZE = 2; // sets the thread pool size

setTimeout(()=> console.log('Timer 1 finished'), 0);
setImmediate(() => console.log('Immediate 1 timer finished'));

fs.readFile('newfile2.txt', () => {
    console.log('IO operation finished!');

    setTimeout(()=> console.log('Timer 2 finished'), 0);
    setTimeout(()=> console.log('Timer 3000 finished'), 3000);
    setImmediate(() => console.log('Immediate 2 timer finished'));

    process.nextTick(() => {
        console.log('NEXT TICK HERE!');
    })

    // using 4 cryptos because thread pool size is 4
    crypto.pbkdf2('somesecretstring', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now()-start, 'password encrypted');
    });
    crypto.pbkdf2('somesecretstring', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now()-start, 'password encrypted');
    });
    crypto.pbkdf2('somesecretstring', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now()-start, 'password encrypted');
    });
    crypto.pbkdf2('somesecretstring', 'salt', 100000, 1024, 'sha512', () => {
        console.log(Date.now()-start, 'password encrypted');
    });
});

console.log('hello form top...');