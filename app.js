const taskInput = document.getElementById("task-input");
const prioritySelect = document.getElementById("priority");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

addBtn.onclick = () => {
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;
    if (taskText === "") return;
    const taskItem = document.createElement("li");
    taskItem.className = "task";
    taskItem.innerHTML = `
        <span>${taskText} <small>(${priority} Priority)</small></span>
        <div>
            <button class="done-btn">✔</button>
            <button class="delete-btn">✖</button>
        </div>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
    const doneBtn = taskItem.querySelector(".done-btn");
    const deleteBtn = taskItem.querySelector(".delete-btn");
    doneBtn.onclick = () => taskItem.classList.toggle("done");
    deleteBtn.onclick = () => taskList.removeChild(taskItem);
};
