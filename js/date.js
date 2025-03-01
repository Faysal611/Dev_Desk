function updateCalender() {
    let date = new Date();
    let dateArr = date.toDateString().split(" ");
    calenderDay.textContent = `${dateArr[0]} ,`;
    dateArr.shift();
    calenderDateYear.textContent = dateArr.join(" ");
}

function addTime() {
    let date = new Date();
    return date.toLocaleTimeString();
}

updateCalender();