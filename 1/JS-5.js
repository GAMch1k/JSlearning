/* Task 1
if (prompt("What JS name is official?").toLowerCase() == "ecmascript"){
    alert("You are true");
} else {
    alert("You don't know? It's ECMAScript");
}
*/

/* Task 2
let nmb = prompt("Write number:");
if(nmb > 0){
    alert(1);
} else if (nmb == 0){
    alert(0);
} else {
    alert(-1);
*/

/* Task 3
let result;
let a = 1,
    b = 2;
(a + b < 4) ? 
    result = "few" : result = "many";

alert(result);
*/

let message, login;

login = prompt("Write login here:", '').toLowerCase();
(login == "worker") ? message = "Hello" :
    (login == "director") ? message = "Nice to meet you!" :
    (login == "") ? message = "You didn't write your login":
    message = "";

alert(message);