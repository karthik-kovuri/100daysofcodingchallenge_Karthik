document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    todoForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskText = todoInput.value.trim();
      if (taskText !== '') {
        addTask(taskText);
        todoInput.value = '';
      }
    });
  
    function addTask(taskText) {
      const li = document.createElement('li');
      li.className = 'todo-item';
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const taskSpan = document.createElement('span');
      taskSpan.textContent = taskText;
      const deleteIcon = document.createElement('i');
      deleteIcon.className = 'fas fa-trash delete-icon';
      
      li.appendChild(checkbox);
      li.appendChild(taskSpan);
      li.appendChild(deleteIcon);
  
      li.addEventListener('click', function(event) {
        if (event.target !== checkbox && event.target !== deleteIcon) {
          li.classList.toggle('completed');
        }
      });
  
      deleteIcon.addEventListener('click', function() {
        li.remove();
      });
  
      todoList.appendChild(li);
    }
  });