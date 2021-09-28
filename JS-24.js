function printNumbersInterval (from, to) {
    setInterval (function() {
        if (from != to + 1) {
            alert(from);
            from ++;
        }
    }, 1000);
}

function printNumbersTimeOut (from, to) {
    if (from != to + 1) {
        alert(from);
        from++;
        setTimeout (printNumbersTimeOut, 1000, from, to);
    }
}

printNumbersTimeOut (1, 5);