
const fs = require('fs');
const path = require('path');  

const str = 'this is a string'

const f1 = path.join(__dirname, 'file.txt');

// console.log(__dirname);


// fs.writeFile(f1, str, (err)=>{
//     if(err) Console.log(err);
//     else{
//         console.log('file written successfully!');
        
//     }
// });

fs.readFile(f1, {encoding: 'utf-8'}, (err, data)=>{
    if(err) console.log(err);
    else{
        console.log(data);
        
    }
    
});