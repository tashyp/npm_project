//os
var os = require('os');

var OSinfo = require('./modules/OSInfo');
process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
        var instruction = input.trim();
        switch(instruction) {
            case '/version':
                process.stdout.write(process.versions.node + '\n');
                break;
            case '/language':
                process.stdout.write(process.env.LANG + '\n');
                break;
            case '/exit':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/sayhello':
                process.stdout.write('hello!\n');
                break;
            case '/getOSinfo':
            	OSinfo.print();
			break;
			default:
                process.stderr.write('Wrong instruction!\n');
        };
    }
})