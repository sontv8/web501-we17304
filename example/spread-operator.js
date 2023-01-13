// spread-operator -> clone ( copy)

const person = {
    name: "Dat",
    age: 20,
    address: {
        street: "Thai Binh"
    }
};
// const user = {
//     ...person,
//     isMarried: true
// }
// const user = Object.assign({}, person, { isMarried: true})
const user = structuredClone(person)
user.address.street = "Ha Noi";
console.log('A', person);
console.log('B', user)

// Array
const products = [
    {id: 1, name: "Product A"},
    {id: 2, name: "Product B"},
    {id: 3, name: "Product C"}
];

// products.push({ id: 4, name: "Product D"})
const product = { id: 4, name: "Product D"}
const newProducts = [...products, product];


// shallow copy va deep copy
