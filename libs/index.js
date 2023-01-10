// const Animal = { //object literal
//     name: 'yasuo',
//     run: function(){
//         console.log('Dang chem');
//     }
// }

// function Animal(){ //object constructor
//     this.name = 'yasuo';
//     this.run = function(){
//         console.log('Dang chem');
//     }
//     const a = 10;
// }

class Animal{
    name = 'abc';
    run = () =>{
        console.log('abcd');
    }
}

const cat = new Animal();

console.log(cat.run());