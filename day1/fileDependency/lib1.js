 
  const lib2 =require('./lib2');
 
 
 console.log('Inside Lib 1');

 function one (){
    console.log('running Function one');
    
 }

 module.exports = {
    one,
    lib2
 }