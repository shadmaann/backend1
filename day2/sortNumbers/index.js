const fs = require('fs');
const path = require('path');

function getData(fileName) {
    return new Promise((resolve, reject) => {
        const loc = path.join(__dirname, 'data', fileName);
        fs.readFile(loc, { encoding: 'utf-8' }, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

Promise.all([getData('file1.txt'), getData('file2.txt')])
    .then((filesData) => {
        // Split each file's data into arrays and combine them
        let arr1 = filesData[0].split('\r\n');
        let arr2 = filesData[1].split('\r\n');
        let arr = [...arr1, ...arr2];

        // Convert strings to numbers and sort
        arr = arr.map(Number).sort((a, b) => a - b);

        // Convert sorted array to JSON
        let sortedArr = JSON.stringify(arr);

        // Write to output.txt
        const finalPath = path.join(__dirname, 'data', 'output.txt');
        fs.writeFile(finalPath, sortedArr, (err) => {
            if (err) console.log(err);
            else console.log('File written successfully!');
        });
    })
    .catch((err) => {
        console.error('Error:', err);
    });
