let task = document.getElementById("input");
let showTask = document.querySelector(".show");

function addTask() {
    if (task.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task.value;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        li.remove();
        setData();
    };

    li.appendChild(deleteBtn);
    showTask.appendChild(li);

    setData();
    task.value = "";
}

function setData() {
    let tasks = [];
    document.querySelectorAll(".show li").forEach((li) => {
        // Remove the delete button text from stored task
        tasks.push(li.firstChild.textContent.trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getData() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((taskText) => {
        let li = document.createElement("li");
        li.textContent = taskText;

        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function () {
            li.remove();
            setData();
        };

        li.appendChild(deleteBtn);
        showTask.appendChild(li);
    });
}

window.onload = getData;
