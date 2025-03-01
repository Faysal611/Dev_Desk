function taskIncrement() {
    let finishedTaskNumber = parseInt(finishedTask.textContent);
    finishedTaskNumber += 1;
    finishedTask.textContent = finishedTaskNumber
}

function taskDecrement() {
    let assignedTaskNumber = parseInt(assignedTask.textContent);
    assignedTaskNumber -= 1;
    assignedTask.textContent = String(assignedTaskNumber).padStart(2, "0");
}

function addLog(btn) {
    let target = btn.parentElement.previousElementSibling.previousElementSibling;
    console.log(target)
    let div = document.createElement("div");
    div.textContent = `You have Complete The Task ${target.textContent} at ${addTime()}`;
    console.log(div);
    log.appendChild(div);
}

function allComplete() {
    let count = 0;
    for(let btn of completedBtns) {
        if(btn.disabled) {
            count++;
        }
    }
    if(count === 6) {
        alert("Congrats!! You have completed all current tasks!");
    }
}