document.addEventListener('DOMContentLoaded', function() {
  const todoForm = document.getElementById('todo-form');
  const todoInput = document.getElementById('todo-input');
  const todoList = document.getElementById('todo-list');

  let tasks = [];

  
  if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    renderTasks();
  }

  todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = todoInput.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      todoInput.value = '';
    }
  });

  function renderTasks() {
    todoList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      if (task.completed) {
        li.classList.add('completed');
      }
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      const taskSpan = document.createElement('span');
      taskSpan.textContent = task.text;
      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fas fa-trash delete-icon';
      
      li.appendChild(checkbox);
      li.appendChild(taskSpan);
      li.appendChild(deleteIcon);

      checkbox.addEventListener('change', function() {
        task.completed = checkbox.checked;
        saveTasks();
        li.classList.toggle('completed');
      });

      deleteIcon.addEventListener('click', function() {
        tasks.splice(index, 1);
        saveTasks();
        li.remove();
      });

      todoList.appendChild(li);
    });
  }

  function addTask(taskText) {
    const newTask = {
      text: taskText,
      completed: false
    };
    tasks.push(newTask);
    saveTasks();
    renderTasks();
  }

  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
});