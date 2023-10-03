// Lấy các phần tử DOM
// Lấy các phần tử từ DOM
const taskForm = document.getElementById('task-form');
const newTaskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// Sử dụng Local Storage để lấy danh sách công việc đã lưu
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Hiển thị danh sách công việc đã lưu
function displayTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button class="delete" data-index="${index}">Xoá</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Thêm công việc mới
function addTask(text) {
    tasks.push({ text, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// Xoá công việc
function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// Đánh dấu công việc hoàn thành
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
}

// Sự kiện khi người dùng thêm công việc
taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = newTaskInput.value.trim();
    if (text !== '') {
        addTask(text);
        newTaskInput.value = '';
    }
});

// Sự kiện khi người dùng xoá công việc
taskList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        const index = e.target.getAttribute('data-index');
        deleteTask(index);
    }
});

// Sự kiện khi người dùng đánh dấu công việc hoàn thành
taskList.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        const index = e.target.parentElement.querySelector('.delete').getAttribute('data-index');
        toggleComplete(index);
    }
});
ơ
// Hiển thị danh sách công việc ban đầu
displayTasks();