/*function printNumbersInterval (from, to) {
    setInterval (function() {
        if (from != to + 1) {
            alert(from);
            from ++;
        }
    }, 1000);
}

function printNumbersTimeOut (from, to) {
    if (from != to + 1) {
        alert(from);
        from++;
        setTimeout (printNumbersTimeOut, 1000, from, to);
    }
}

printNumbersInterval (1, 5);
printNumbersTimeOut (1, 5);
*/
/*
function work (a, b) {
    alert (a + b);
}

function spy (funct) {
    function f (...args) {
        f.calls.push(args);
        return funct.apply(this, arguments);
    }

    f.calls = [];
    return f;
}

work = spy (work);

work (1, 2);
work (4, 5);

for (let args of work.calls) {
    alert ( "call: " + args.join() );
}
*/
/*
function f (x) {
    alert (x);
}

function delay (func, ms) {
    return function () {
        setTimeout (() => func.apply(this, arguments), ms);
    }
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000 ("test");
f1500 ("test");
*/
/*
function f (a) {
    console.log(a);
}

let f1000 = throttle (f, 1000);

f1000 (1);
f1000 (2);
f1000 (3);

function throttle (func, ms) {
    let isThrottled = false,
    savedArgs,
    savedThis;

    function wrapper () {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        func.apply (this, arguments);
        isThrottled = true;


        setTimeout (function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}
*/

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind (user), user.loginFail.bind (user));