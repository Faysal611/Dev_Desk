for(let btn of completedBtns) {
    btn.addEventListener("click", () => {
        btn.setAttribute("disabled", "true");
        btn.setAttribute("style", "background-color: #808080; opacity: 0.5;");
        alert("Board Updated Successfully")
        taskDecrement();
        taskIncrement();
        addLog(btn);
        allComplete();
    })
}