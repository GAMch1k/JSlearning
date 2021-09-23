//      Вариант 1
/*
for (let i = 2; i <= 10; i++){
    if(i % 2 == 0){
        alert(i);
    }
}
*/
//      Вариант 2
/*
for (let i = 2; i <= 10; i+=2){
    alert(i);
}
*/

/*
let i = 0;

while(i < 3){
    alert(`number ${i}!`);
    i++;
}
*/
/*
let nmb;
while(true){
    nmb = prompt("Write number > 100");
    if(nmb > 100 || nmb == null){
        break;
    }
}
*/

/*
let n = prompt("Write number here:");

nxtNMB:
for(let i = 2; i <= n; i++){
    for(let b = 2; b < i; b++){
        if (i % b == 0){
            continue nxtNMB;
        }
    }
    alert (i);
}
*/