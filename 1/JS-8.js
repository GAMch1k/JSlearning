/*
let browser = prompt("Write browser name here:").toLowerCase();

if (browser == "edge"){
    alert("You've got the Edge!");
} else if (browser == "chrome" || browser == "firefox" || browser == "safari" || browser == "opera"){
    alert("Okay, we support these browser too!");
} else {
    alert("We hope that this page looks ok!");
}
*/

const nmb = +prompt("Write number from 0 to 3", '');

switch(nmb){
    case 0:
        alert("You choosed number 0");
        break;
    
    case 1:
        alert("You choosed number 1");
        break;
    
    case 1:
        alert("You choosed number 1");
        break;
    
    case 2:
    case 3:
        alert("You choosed number 2 or maybe 3");
        break;

    default:
        alert("You choosed another number");
}