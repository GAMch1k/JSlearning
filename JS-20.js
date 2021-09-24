/*
let d = new Date(2012, 1, 20, 3, 12);
alert( d );
*/

/*
let date = new Date(2012, 0, 3);
alert( getWeekDay(date) );

function getWeekDay(date) {
    weekDate = date.getDay();
    if (weekDate == 0) {
        return "Sunday";
    } else if (weekDate == 1) {
        return "Monday";
    } else if (weekDate == 2) {
        return "Tuesday";
    } else if (weekDate == 3) {
        return "Wednesday";
    } else if (weekDate == 4) {
        return "Thursday";
    } else if (weekDate == 5) {
        return "Friday";
    } else if (weekDate == 6) {
        return "Saturday";
    }

    return null;
}
*/

/*
let date = new Date(2012, 0, 3);
alert( getLocalDay(date) );

function getLocalDay (date) {
    day = date.getDay();
    if (day == 0) { day = 7; }
    return day;
}
*/
/*
let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

function getDateAgo (date, days) {
    return new Date(date - days * 86_400_000);
}
*/

/*
function getLastDayOfMonth (year, month) {
    return new Date(year, month + 1, 0).getDate();
}

alert( getLastDayOfMonth(2012, 1) );
*/
/*
function getSecondsToday () {
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

alert( getSecondsToday() );
*/
/*
function getSecondsToTomorrow () {
    let date = new Date();
    let date2 = new Date( date.getFullYear(), date.getMonth(), date.getDate() + 1 );
    return (date2 - date) / 1000;
}

alert( getSecondsToTomorrow() );
*/
/*
alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate (date) {
    let dateNow = new Date();

    if (dateNow - date <= 1000) { return "Right now"; }
    else if (dateNow - date < 60000) { return `${Math.round((dateNow - date) / 1000)} seconds ago`; }
    else if (dateNow - date < 3_600_000) { return `${Math.round((dateNow - date) / 60000)} minutes ago`; }
    else {
        let _year = String(date.getFullYear()).split("").slice(2).join("");
        let str = `${date.getDate()}.${date.getMonth() + 1}.${_year}, ${date.getHours()}:${date.getMinutes()}`;
        return str;
    }
}
*/