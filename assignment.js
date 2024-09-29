//  number 1 ===Create a JavaScript function that takes an array of numbers as input and returns a new array with all elements doubled. Explain how the map() method is used to achieve this.


function arrNumber (newArr) {
    
    console.log(newArr.map (num => num *2))

    //  or
    return newArr.map (num => num *2)
}

const numbers = [2,4,6,8]
const multiplied = arrNumber(numbers)
console.log(multiplied);  // another answer

//  number 2 ====Write a JavaScript function that stores a user's name in localStorage, retrieves it, and displays it in the console. How does the Web Storage API handle storing and retrieving data?


localStorage.setItem(`user`, JSON.stringify({firstName : "Teddy", lastName : "Emmanuel"}))

//  web storage stores data locally or sessionally with value and key pairs

const getUser = JSON.parse(localStorage.getItem('user'))
console.log(getUser);

//  number 3 ===Create a Car class in JavaScript with properties for maker, model, color and year. Implement a method that returns a string describing the car. Create 4 new cars from the Car class.


class Car {
    constructor(maker, model, color, year){
        this.maker = maker
        this.model = model
        this.color = color
        this.year = year
    }
}

const cars = new Car('toyota', 'venza', 'white', 2012)
console.log(cars);

const Newcar1 = new Car ('lexus', 'rx350', 'blue', 2008)
const Newcar2 = new Car ('ford', 'explorer', 'red', 2010)
const Newcar3 = new Car ('bmw', 'X5', 'black', 2008)
const Newcar4 = new Car ('acura', 'MDX', 'grey', 2020)

console.log(Newcar1);
console.log(Newcar2);
console.log(Newcar3);
console.log(Newcar4);

//  number 4 === Write a JavaScript function using the map method to create a new array of five objects, where each employee's salary is increased by 10%. The new array should retain the original employee names and update their salary.

const employees =[
    {name : 'mubarak', salary : 20000},
    {name : 'Emma', salary : 20000},
    {name : 'Doyin', salary : 10000},
    {name : 'Chapo', salary : 19000},
    {name : 'Opera', salary : 30000}
]

function addSalary (employees) {
   return employees.map(employees => ({
    name : employees.name,
    salary : employees.salary *1.1
   }))
}

const increasedSalary = addSalary(employees)
console.log(increasedSalary);

//  number 5 == Write a JavaScript function using the forEach method to print each customer's name followed by the list of items they ordered in the following format

const customer =[
    {
        name : 'John',
        item : ['laptop', 'mouse', 'keyboard']
    },

    {
        name : 'Sarah',
        item : ['monitor', 'headphones']
    },

    {
        name : 'Michael',
        item : ['phone', 'charger', 'case']
    }, 

    {
        name : 'Anna',
        item : 'tablet'
    }
]

function customerOrder (customer) {
  return  customer.forEach(customer => {
        console.log(`cusromer ${customer.name}`);
        console.log(`item : ${customer.item}`);
        
    });
}
customerOrder(customer)

function addInputField() {
    const selectField = document.getElementById('select-field');
    const inputContainer = document.getElementById('input-container');
    const inputType = selectField.value;

    const newInput = document.createElement('input');
    newInput.type = inputType;
    newInput.placeholder = `Enter ${inputType} value`;
    newInput.classList.add('input-field');

    inputContainer.appendChild(newInput);
}