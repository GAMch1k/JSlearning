/*
let user = {
    name: "Василий Иванович",
    age: 35
};

let _json = JSON.stringify(user);

let newObj = JSON.parse(_json);
alert(newObj.age);
*/

/*
let room = {
    number: 23
};

let meetup = {
    title: "Meeting",
    occupiedBy: [{name: "Ivanov"}, {name: "Pertov"}],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    if (key != "" && value == meetup) {
        return undefined;
    }
    return value;
}));
*/
/*
function sumTo (nmb) {
*/
    // variant with for
    /*
    let sum = 0;
    for (let i = 0; i <= nmb; i++) {
        sum += i;
    }
    return sum;
    */

    /* recursive metod
    if (nmb == 1) {
        return nmb;
    } else {
        return ( nmb + sumTo(nmb - 1) );
    }
    */
/*
    return ((1 + nmb) / 2) * nmb
}

alert ( sumTo(100) );
*/
/*
function factorial (nmb) {
    if (nmb == 1) {
        return nmb;
    } else {
        return nmb = nmb * factorial(nmb - 1);
    }
}

alert ( factorial (5) );
*/
/*
function fib(nmb) {
    let a = 1,
        b = 1,
        c = a + b;
    
    for (let i = 3; i <= nmb; i++){
        c = a + b;
        a = b;
        b = c;   
    }
    return b;
}

alert( fib(3) );
alert( fib(7) );
alert( fib(77) );
*/

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList1 (list) {
    list2 = list;
    while (list2) {
        alert(list2.value);
        list2 = list2.next;
    }
}

function printList2 (list) {
    alert (list.value);

    if (list.next) {
        printList2(list.next);
    }
}

// printList1 (list);
// printList1 (list);

function reversePrint1 (list) {
    if (list.next) {
        reversePrint1 (list.next);
    }
    alert(list.value);
}

function reversePrint2 (list) {
    list2 = list;
    let arr = []
    while (list2) {
        arr.push(list2.value);
        list2 = list2.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        alert (arr[i]);
    }
}

reversePrint2 (list);
//reversePrint1 (list);