const taskForm = document.getElementById("task-form");
const newTaskInput = document.getElementById("new-task");
const searchTaskInput = document.getElementById("search-task");
const taskList = document.getElementById("task-list");

// localStorageからタスクをとる
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// タスクを表示の関数filteredTasksが指定されなければ全てのタスクを表示
function displayTasks(filteredTasks = tasks) {
	taskList.innerHTML = "";
	filteredTasks.forEach((task, index) => {
		const listItem = document.createElement("li");
		listItem.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""} data-index="${index}">
            <span class="${task.completed ? "completed" : ""}">${task.text}</span>
            <button class="edit edit-btn" data-index="${index}">編集</button>
            <button class="delete delete-btn" data-index="${index}">削除</button>
        `;
		listItem.classList.add("task");
		taskList.appendChild(listItem);
	});
}

// タスクを追加の関数
function addTask(text) {
	tasks.push({ text, completed: false });
	localStorage.setItem("tasks", JSON.stringify(tasks));
	displayTasks();
}

// タスクを削除の関数
function deleteTask(index) {
	tasks.splice(index, 1);
	localStorage.setItem("tasks", JSON.stringify(tasks));
	displayTasks();
}
// タスクのステータスを変更の関数
function toggleComplete(index) {
	tasks[index].completed = !tasks[index].completed;
	localStorage.setItem("tasks", JSON.stringify(tasks));
	displayTasks();
}

// タスクを編集の関数
function editTask(index, spanElement, editButton) {
	if (editButton.textContent === "編集") {
		spanElement.contentEditable = "true";
		spanElement.focus();
		editButton.textContent = "保存";
		console.log(true);
	} else {
		spanElement.contentEditable = "false";
		tasks[index].text = spanElement.textContent;
		localStorage.setItem("tasks", JSON.stringify(tasks));
		displayTasks();
		console.log(false);
	}
}

// タスクを入力した後の処理のエベント
taskForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const text = newTaskInput.value.trim();
	if (text !== "") {
		addTask(text);
		newTaskInput.value = "";
		newTaskInput.focus();
	}
});

// タスクをクリックした後の処理のエベント
taskList.addEventListener("click", (e) => {
	//タスクを押すときに、削除のボタンの場合ならタスクを削除
	if (e.target.classList.contains("delete")) {
		const index = e.target.getAttribute("data-index");
		deleteTask(index);
	}
	//タスクを押すときに、編集のボタンの場合ならタスクを編集
	else if (e.target.classList.contains("edit")) {
		const index = e.target.getAttribute("data-index");
		console.log(index);
		//編集のボタンの前のspanを取る
		const spanElement = e.target.previousElementSibling;
		editTask(index, spanElement, e.target);
	}
	//タスクを押すときに、 タスクのテキストの場合ならタスクをチェック
	else if (e.target.tagName === "SPAN") {
		//タスクのテキストの前のcheckboxを取る
		const checkbox = e.target.previousElementSibling;
		const index = checkbox.getAttribute("data-index");
		checkbox.checked = !checkbox.checked;
		toggleComplete(index);
	}
});

// タスクをチェックするときの処理のエベント
taskList.addEventListener("change", (e) => {
	if (e.target.type === "checkbox") {
		const index = e.target.getAttribute("data-index");
		toggleComplete(index);
	}
});

// タスクを検索の処理のエベント
searchTaskInput.addEventListener("input", (e) => {
	const searchText = e.target.value.toLowerCase();
	//入力したテキストからlocalStorageのタスクと比較して、一致するタスクはfilteredTasksになる
	const filteredTasks = tasks.filter((task) => task.text.toLowerCase().includes(searchText));
	displayTasks(filteredTasks);
});

displayTasks();
