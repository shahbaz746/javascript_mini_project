let task = document.getElementById("input");
let list = document.getElementsByClassName("show");
let showTask = document.querySelector(".show");
function addTask(){
    // let taskText = task.value.trim();
    if (task === "") {
        alert("Please enter a task.");
        return;
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = task.value;
    document.getElementsByClassName("show")[0].appendChild(li);
    setData();
    getData();
    }
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.classList.add("delete-btn");
    document.getElementsByClassName("show")[0].appendChild(deleteBtn);
    deleteBtn.addEventListener("click", function() {
        deleteBtn.parentElement.remove();
        setData();
        getData();
    });
    task.value = "";
}

function setData() {
    let taskValue = document.getElementById("input").value;
    localStorage.setItem("task", taskValue);
}
console.log(setData)

function getData() {
    let taskValue = localStorage.getItem("task");
}
console.log(getData)