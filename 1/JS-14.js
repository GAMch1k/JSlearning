/*
let a, b;

a = +prompt("Write a here: ");
b = +prompt("Write b here: ");

alert(a + b);
*/

//alert( Math.round(6.35 * 10) / 10 );

/*
alert( readNumber() );

function readNumber () {
    let a;
    
    do {
        a = prompt("Write number here:");
    } while ( !isFinite(a) );

    if (a === null || a === "") {
        return null;
    }

    return +a;
};
*/

/*
function random(a, b) {
    return (Math.random() * (b - a) + a);
};

alert( random(1, 5) );
alert( random(1, 5) );
alert( random(1, 5) );
*/

function randomInt(a, b) {
    return Math.floor((Math.random() * (b + 1 - a) + a));
};

for (let i = 0; i < 100; i++){
    console.log( randomInt(1, 5) );
};