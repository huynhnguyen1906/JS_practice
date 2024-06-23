const taskForm = document.getElementById("task-form");
const newTaskInput = document.getElementById("new-task");
const prioritySelect = document.getElementById("priority");
const searchTaskInput = document.getElementById("search-task");
const taskList = document.getElementById("task-list");

// localStorageからタスクをとる
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 現在編集中のタスクのインデックス
let editingIndex = null;

// タスクを表示の関数filteredTasksが指定されなければ全てのタスクを表示
function displayTasks(filteredTasks = tasks) {
	taskList.innerHTML = "";
	filteredTasks.forEach((task, index) => {
		const listItem = document.createElement("li");
		listItem.innerHTML = `
            <input type="checkbox" ${task.completed ? "checked" : ""} data-index="${index}">
            <span class="task-text ${task.completed ? "completed" : ""}" contentEditable="false">${task.text}</span>
            <span class="task-priority">${task.priority}</span>
            <button class="edit edit-btn" data-index="${index}">編集</button>
            <button class="delete delete-btn" data-index="${index}">削除</button>
        `;
		listItem.classList.add("task");
		taskList.appendChild(listItem);
	});
}

// タスクを追加の関数
function addTask(text, priority) {
	tasks.push({ text, priority, completed: false });
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
function editTask(index, taskTextElement, taskPriorityElement, editButton) {
	if (editButton.textContent === "編集") {
		// 現在編集中のタスクのインデックスを設定
		editingIndex = index;

		// タスクテキストを編集可能にする
		taskTextElement.contentEditable = "true";
		taskTextElement.focus();

		// 優先度を編集するためのセレクトボックスを作成
		const prioritySelect = document.createElement("select");
		const currentPriority = taskPriorityElement.textContent.trim();
		prioritySelect.innerHTML = `
            <option value="高" ${currentPriority === "高" ? "selected" : ""}>高</option>
            <option value="中" ${currentPriority === "中" ? "selected" : ""}>中</option>
            <option value="低" ${currentPriority === "低" ? "selected" : ""}>低</option>
        `;
		taskPriorityElement.replaceWith(prioritySelect);

		editButton.textContent = "保存";
	} else {
		const prioritySelect = editButton.previousElementSibling;
		taskTextElement.contentEditable = "false";
		tasks[index].text = taskTextElement.textContent.trim();
		tasks[index].priority = prioritySelect.value;
		localStorage.setItem("tasks", JSON.stringify(tasks));
		displayTasks();

		// 編集中のインデックスをクリア
		editingIndex = null;
	}
}

// タスクを入力した後の処理のエベント
taskForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const text = newTaskInput.value.trim();
	const priority = prioritySelect.value;
	if (text !== "") {
		addTask(text, priority);
		newTaskInput.value = "";
		prioritySelect.value = "中";
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
		const taskTextElement = e.target.previousElementSibling.previousElementSibling;
		const taskPriorityElement = e.target.previousElementSibling;
		editTask(index, taskTextElement, taskPriorityElement, e.target);
	}
	//タスクを押すときに、 タスクのテキストの場合ならタスクをチェック
	else if (e.target.tagName === "SPAN" && e.target.classList.contains("task-text")) {
		// 編集中でない場合のみtoggleCompleteを実行
		if (editingIndex === null) {
			const checkbox = e.target.previousElementSibling;
			const index = checkbox.getAttribute("data-index");
			checkbox.checked = !checkbox.checked;
			toggleComplete(index);
		}
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
