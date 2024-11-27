const colors = require('colors');
const giveMeAJoke =require('give-me-a-joke');
const figlet = require('figlet');

figlet('Khan', (err, data)=>{
    if(err){
        console.log('something went wrong');
        return;

        
    }
    console.log(data.green);
    
})

// giveMeAJoke.getRandomDadJoke(function(joke){
//     console.log(joke.rainbow);
    
// })

// console.log('hello'.green);




