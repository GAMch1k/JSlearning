/*
function sum(a) {
    return function(b) {
        return a + b;
    };
}

alert (sum(1)(2));
*/
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBettween (a, b) {
    return function (value) {
        return value >= a && value <= b;
    };
}

function inArray (arr) {
    return function (value) {
        return arr.includes(value);
    };
}

alert ( arr.filter( inBettween(3, 6) ) );
alert ( arr.filter( inArray([1, 2, 10]) ) );
*/
/*
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(arg) {
    return function (a, b) {
        return a[arg] > b[arg] ? 1 : -1;
    }
}

users.sort( byField('name') );
users.forEach(user => alert(user.name));

users.sort( byField('age') );
users.forEach(user => alert(user.age));
*/

function makeArmy() {
    let shooters = [];

    //let i = 0;
    for (let i = 0; i < 10; i++) {
        let shooter = function() { // функция shooter
            alert( i ); // должна выводить порядковый номер
        };
        shooters.push(shooter);
        //i++;
    }

    return shooters;
}

let army = makeArmy();

army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...