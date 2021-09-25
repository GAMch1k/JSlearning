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

function sumTo (nmb) {
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
   
    return ((1 + nmb) / 2) * nmb
}

alert ( sumTo(100) );