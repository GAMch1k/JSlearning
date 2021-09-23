/*
let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classic";
alert(styles.shift(0));
styles.unshift("Rap", "Raggy");

alert(styles);
*/

/*
let nmb = [];

function sumAdd() {
    while (true) {
      let value = prompt("Write number: ", 0);

      if (value === "" || value === null || !isFinite(value)) {
          break;
        }
      nmb.push(+value);
    }
  
    let sum = 0;
    for (let number of nmb) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumAdd() );
*/

function getMaxSubSum (arr) {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {

        let sum = 0;

        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            max = Math.max(sum, max);
        }
    }
    return max;
}

alert( getMaxSubSum( [-1, 2, 3, -9] ) ); // 5
alert( getMaxSubSum( [-1, 2, 3, -9, 11] ) ); // 11
alert( getMaxSubSum( [-2, -1, 1, 2] ) ); // 3
alert( getMaxSubSum( [1, 2, 3] ) ); // 6
alert( getMaxSubSum( [100, -9, 2, -3, 5] ) ); // 100