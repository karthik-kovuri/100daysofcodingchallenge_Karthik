class Todo {
    constructor(task) {
      this.task = task;
      this.completed = false;
    }
  
    completeTask() {
      this.completed = true;
    }
  }
  
  class TodoList {
    constructor() {
      this.todos = [];
    }
  
    addTask(task) {
      const newTask = new Todo(task);
      this.todos.push(newTask);
    }
  
    completeTask(index) {
      if (index >= 0 && index < this.todos.length) {
        this.todos[index].completeTask();
      } else {
        console.log("Invalid index!");
      }
    }
  
    displayTasks() {
      console.log("ToDo List:");
      this.todos.forEach((todo, index) => {
        const status = todo.completed ? "[x]" : "[ ]";
        console.log(`${index + 1}. ${status} ${todo.task}`);
      });
    }
  }
  const myTodoList = new TodoList();
  myTodoList.addTask("Finish homework");
  myTodoList.addTask("Buy groceries");
  myTodoList.addTask("Walk the dog");
  myTodoList.displayTasks();
  myTodoList.completeTask(1);
  myTodoList.displayTasks();
  