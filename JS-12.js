/*
let calculator = {
    read: function() {
        calculator.a = +prompt("Type a here: ");
        calculator.b = +prompt("Type b here: ");
    },

    sum: function() {
        return (this.a + this.b);
    },

    mul: function() {
        return (this.a * this.b);
    }
};

calculator.read();
alert ( calculator.sum() );
alert ( calculator.mul() );
*/

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() {
        alert( this.step );
        return this;
    }
};

ladder.up().up().down().showStep();