/*
function ucFirst (str) {
    return str = str[0].toUpperCase() + str.slice(1);
};

alert( ucFirst("hello") );
*/

/*
function checkSpam (str) {
    str = str.toLowerCase();
    if (str.includes("viagra") || str.includes("xxx")) {
        return true;
    }
};

alert ( checkSpam("BuY ViagRa noW") );
alert ( checkSpam("waTcH xXX hERe") );
*/
/*
function truncate(str, maxlength) {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 3) + '...' : str;
  }

alert ( truncate("Here it is what I want to say about it", 20) );
*/

function extractCurrencyValue (str) {
    return (+str.slice(1));
};

alert( extractCurrencyValue("$120") );