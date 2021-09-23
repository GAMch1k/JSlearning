//  Task 1
/*
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
*/

//  Task 2
/*
let schedule = {};

alert( isEmpty(schedule) );

schedule["8:30"] = "get up";

alert( isEmpty(schedule) );

function isEmpty(obj) {
    for (let i in obj) {
        return false;
    }
    return true;
}
*/
//  Task 3
/*
let salaries = {
    John : 100,
    Ann : 160,
    Pete : 130
}

let sum = 0;
for (let i in salaries) {
    sum += salaries[i];
}

alert(sum);
*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multyplyNumeric(menu);

for (let i in menu) {
    alert(menu[i]);
};

function multyplyNumeric (obj) {
    for (let i in obj) {
        if (typeof obj[i] == "number" ) {
            obj[i] *= 2;
        }
    }
};