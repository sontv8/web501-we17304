// object = { key: value } // literal

const person = {
    name: "Dat",
    age: 30,
    address: {
        street: "Thai Binh"
    }
}
// console.log(person.name)
// const myName = person.name;
// const myAage = person.age;
// const myAddress = person.address;
// const street = person.address.street

const { name, age, address : { street }} = person;
// console.log(`${name}, ${age}, ${street}, ${address}`)

// function showInfo({ name, age, address }){
//     console.log(`${name}, ${age}, ${address}`)
// }
// showInfo(person);


// Destructoring array;

function useState(initialState){
    let state = initialState;
    function getState(){
        return state;
    }
    function setState(newState){
        state = newState;
    }
    return [getState, setState]
}
const [count, setCount] = useState(10);

console.log(count())
setCount(20)
console.log(count())