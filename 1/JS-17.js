/*
function camelize (str) {
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "-") {
            arr[i] = " ";
            arr[i + 1] = arr[i + 1].toUpperCase();
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == " ") {
            arr.splice(i, 1);
        }
    }
    return str = arr.join('');
}

alert( camelize("hello-world") );
*/
/*
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
  
let arr = [5, 3, 8, 1];
  
let filtered = filterRange(arr, 1, 4);
  
alert( filtered );
alert( arr );
*/
/*
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
  
let arr = [5, 3, 8, 1];
  
filterRangeInPlace(arr, 1, 4);
alert( arr );
*/
/*
let arr = [5, 2, 1, -10, 8];

function sorting (a, b) {
    return b - a;
}

arr.sort(sorting);

alert( arr );
*/
/*
let arr = ["HTML", "JavaScript", "CSS"];

function copySorted (arr) {
    let copy = Array.from(arr);
    return copy.sort();
}

let sorted = copySorted(arr);

alert( sorted );
alert( arr );
*/

/*
function Calculator () {
    this.calculate = function (str) {
        let a, b; 
        
        str = str.replace(" ", "");
        str = str.replace(" ", "");
        alert(str);

        if (str.indexOf("*") != -1) {
            if (str[str.indexOf("*") + 1] == "*") {
                a = Number(str.slice(0, str.indexOf("*")));
                b = Number(str.slice(str.indexOf("*") + 2));
                alert("**");

                return a**b;
            } else {
                a = Number(str.slice(0, str.indexOf("*")));
                b = Number(str.slice(str.indexOf("*") + 1));
                alert("*");

                return a * b;
            }
        } else if (str.indexOf("+") != -1) {
            a = Number(str.slice(0, str.indexOf("+")));
            b = Number(str.slice(str.indexOf("+") + 1));
            alert("+");

            return a + b;
        } else if (str.indexOf("-") != -1) {
            a = Number(str.slice(0, str.indexOf("-")));
            b = Number(str.slice(str.indexOf("-") + 1));
            alert("-");

            return a - b;
        } else if (str.indexOf("/") != -1) {
            a = Number(str.slice(0, str.indexOf("/")));
            b = Number(str.slice(str.indexOf("/") + 1));
            alert("/");

            return a / b;
        }
        return 5;
    }
}

let calc = new Calculator;

alert( calc.calculate("3 / 7") );
*/
/*
let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 28 };

let users = [ vasya, petya, masha ];

let names = [];

users.forEach(item => {
    names.push(item.name);
});
    

alert( names ); 
*/

/*
let vasya = { name: "Vasya", surname: "Pypkin", id: 1 };
let petya = { name: "Petya", surname: "Ivanov", id: 2 };
let masha = { name: "Masha", surname: "Petrova", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = [];

users.forEach(item => {
    usersMapped.push({fullName: item.name + " " + item.surname,
    id: item.id});
});

alert( usersMapped[0].id );
alert( usersMapped[0].fullName );
*/

/*
let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 28 };

let arr = [ vasya, petya, masha ];

function sortByAge (arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

sortByAge(arr);

alert(arr[0].name); 
alert(arr[1].name); 
alert(arr[2].name); 
*/

/*
function shuffle(array) {
    array.sort(() => Math.random() - .5);
}
  
let arr = [1, 2, 3];
shuffle(arr);
alert(arr);
*/
/*
let vasya = { name: "Vasya", age: 25 };
let petya = { name: "Petya", age: 30 };
let masha = { name: "Masha", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge (arr) {
    let x = 0;
    arr.forEach(item => {
        x += item.age;
    });
    return Math.round( x / arr.length );
}

alert( getAverageAge(arr) );
*/

function unique(arr) {
    let uniq = [];
    arr.forEach(item => {
        if (uniq.indexOf(item) == -1) {
            uniq.push(item);
        }
    });
    return uniq;
}

let strings = ["damn", "damn", "hren", "hren",
               "hren", "hren", "damn", "damn", ":-O"
];

alert( unique(strings) );