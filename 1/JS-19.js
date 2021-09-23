/*
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readed = WeakSet();

function markAsRead (item) {
    readed.add(item);
}

markAsRead(messages[0]);
*/
/*
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readed = WeakMap();

function markAsRead (item) {
    readed.set(item, new Date(2021, 12, 9));
}

markAsRead(messages[0]);
*/

/*
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function sumSalaries (salaries) {
    let arr = Object.values(salaries);
    let sum = 0;
    for (item of arr){
        sum += item;
    }
    return sum;
}
  
alert( sumSalaries(salaries) );
*/

/*
let user = {
    name: 'John',
    age: 30
};

function count (obj) {
    return Object.keys(obj).length;
}

alert( count(user) );
*/

/*
let user = { name: "John", years: 30 };

let { name, years : age, isAdmin : isAdmin = false } = user;

alert( name );
alert( age );
alert( isAdmin );
*/


let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary (obj) {
    let maxName, max = 0;

    for (let [name, salary] of Object.entries(obj)) {
        if (max < salary) {
            max = salary;
            maxName = name;
        }
    }
    return max;
}

alert( topSalary(salaries) );
