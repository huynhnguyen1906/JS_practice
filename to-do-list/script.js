const taskForm = document.getElementById("task-form");
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks() {
	taskList.innerHTML = "";
	tasks.forEach((task, index) => {
		const listItem = document.createElement("li");
		listItem.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""}>
            <span class="${task.completed ? "completed" : ""}">${
			task.text
		}   </span>
            <button class="delete delete-btn" data-index="${index}">delete</button>
        `;
		listItem.classList.add("task");
		taskList.appendChild(listItem);
	});
}

function addTask(text) {
	tasks.push({ text, completed: false });
	localStorage.setItem("tasks", JSON.stringify(tasks));
	displayTasks();
}

function deleteTask(index) {
	tasks.splice(index, 1);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	displayTasks();
}

function toggleComplete(index) {
	tasks[index].completed = !tasks[index].completed;
	localStorage.setItem("tasks", JSON.stringify(tasks));
	displayTasks();
}

taskForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const text = newTaskInput.value.trim();
	if (text !== "") {
		addTask(text);
		newTaskInput.value = "";
		newTaskInput.focus();
	}
});

taskList.addEventListener("click", (e) => {
	if (e.target.classList.contains("delete")) {
		const index = e.target.getAttribute("data-index");
		deleteTask(index);
	}
});

taskList.addEventListener("change", (e) => {
	if (e.target.type === "checkbox") {
		const index = e.target.parentElement
			.querySelector(".delete")
			.getAttribute("data-index");
		toggleComplete(index);
	}
});
displayTasks();
