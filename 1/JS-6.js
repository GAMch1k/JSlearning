/* Age task
age = prompt("Write your age:");

if (age >= 14 && age <= 90){
    alert("True");
} else {
    alert("False");
}

if (age <= 14 || age >= 90){
    alert("True");
} else {
    alert("False");
}

if (!(age >= 14 && age <= 90)){
    alert("True");
} else {
    alert("False");
}
*/

let login, password;

login = prompt("Write your login, please:");
if (login == "" || login == null){
    alert("Canceled...");
} else if (login == "admin"){

    password = prompt("Write your password:");

    if(password == "I am boss"){
    alert("Nice to meet you, boss");
    } else if (password == "" || password == null){
    alert("Canceled...");
    } else {
    alert("Wrong password");
    }

} else {
    alert("I don't know you");
}

