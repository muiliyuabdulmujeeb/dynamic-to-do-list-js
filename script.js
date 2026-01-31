function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
}


document.addEventListener("DOMContentLoaded", () => {
    loadTasks();
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Empty task, kindly input a task")
        } else {
            const taskTextLi = document.createElement("li");
            taskTextLi.textContent = taskText;

            const removeBtn = document.createElement("button");
            removeBtn.classList.add("remove-btn");
            removeBtn.textContent = "Remove";
            removeBtn.addEventListener("click", () => {
                removeBtn.parentElement.remove();
                
            });

            taskTextLi.appendChild(removeBtn);
            taskList.appendChild(taskTextLi);
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
            taskInput.value = "";

        };

    };

    addButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask()
        };
    });

    document.addEventListener("DOMContentLoaded", addTask);
});