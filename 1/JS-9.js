function checkAge(age) {
    return (age => 18) ? true : confirm("Parent's agreed?");
}

function min (a, b){
    if(a > b){
        return a;
    }
    return b;
}

function pow (x, n){
    let z = x;
    for (let i = 1; i < n; i++){
        z = z * x;
    }
    return z;
}

alert(pow(
    x = +prompt("Write x"),
    n = +prompt("Write n"),
));

/*
alert(min(a = +prompt("Write first number:"),
          b = +prompt("Write second number:")));
*/

//checkAge(prompt("Write your age here:"));