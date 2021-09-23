/*
function unique(arr) {
    let helpSet = new Set(arr);
    return Array.from(helpSet);
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) );
*/

function aclean (arr) {
    let helpMap = new Map();

    for (let value of arr) {
        let annogram = value.toLowerCase().split("").sort().join("");
        helpMap.set(annogram, value);
    }
    return Array.from(helpMap.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) );