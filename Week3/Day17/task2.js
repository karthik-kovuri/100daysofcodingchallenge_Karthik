
let tasks = [];


function addTask(taskName) {
  tasks.push({ name: taskName, completed: false });
}

/
function completeTask(taskIndex) {
  if (taskIndex >= 0 && taskIndex < tasks.length) {
    tasks[taskIndex].completed = true;
  } else {
    console.log("Invalid task index.");
  }
}


function displayTasks() {
  console.log("Tasks:");
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.name} - ${task.completed ? 'Completed' : 'Incomplete'}`);
  });
}


addTask("Finish coding assignment");
addTask("Prepare for meeting");


displayTasks();


completeTask(0);


displayTasks();
