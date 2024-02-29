document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    let tasks = [];
  
    // Array of colors for tasks
    const taskColors = ['#ff6347', '#ffa500', '#ffd700', '#90ee90', '#add8e6', '#9370db'];
  
    // Simulate fetching tasks from a server asynchronously
    setTimeout(() => {
      if (localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        renderTasks();
      }
    }, 1000); // Simulating a delay of 1 second
  
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
        // Assigning a color to each task based on its index
        const colorIndex = index % taskColors.length;
        const bgColor = taskColors[colorIndex];
        li.style.backgroundColor = bgColor;
        // Dynamically setting text color based on background brightness
        const textColor = getTextColor(bgColor);
        li.style.color = textColor;
  
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
      // Simulate saving tasks asynchronously
      setTimeout(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }, 500); // Simulating a delay of 0.5 seconds
    }
  
    // Function to get contrasting text color based on background brightness
    function getTextColor(bgColor) {
      const brightness = Math.round(((parseInt(bgColor.slice(1), 16) & 0xFF) * 299 +
        (parseInt(bgColor.slice(3), 16) & 0xFF) * 587 +
        (parseInt(bgColor.slice(5), 16) & 0xFF) * 114) / 1000);
      return (brightness > 125) ? '#000000' : '#ffffff'; // return black for bright backgrounds, white for dark backgrounds
    }
  });