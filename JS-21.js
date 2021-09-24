/*
let user = {
    name: "Василий Иванович",
    age: 35
};

let _json = JSON.stringify(user);

let newObj = JSON.parse(_json);
alert(newObj.age);
*/

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

/* в результате должно быть:
{
    "title":"Metting",
    "occupiedBy":[{"name":"Ivanov"},{"name":"Petrov"}],
    "place":{"number":23}
}
*/