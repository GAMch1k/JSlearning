/*
function Calculator () {
    this.read = function() {
        this.a = +prompt("Type a here: ");
        this.b = +prompt("Type b here: ");
    };

    this.sum = function() {
        return (this.a + this.b);
    };

    this.mul = function() {
        return (this.a * this.b);
    };
}

let calculator = new Calculator();

calculator.read();
alert ( calculator.sum() );
alert ( calculator.mul() );
*/

function Accumulator(startValue) {
    this.value = startValue;

    this.read = function() {
        this.value += +prompt("Type your value here: ");
    };
}

let accumulator = new Accumulator(1);

accumulator.read();
accumulator.read();

alert(accumulator.value);