export default class Model {
  constructor() {
    this.view = null;
    this.todos = JSON.parse(localStorage.getItem('todos'));

    if (!this.todos || this.todos.length < 1) {
      this.todos = [
        {
          id: 0,
          title: 'Learn JS',
          description: 'Watch JS Tutorials',
          dueDate: '2025-05-10',
          completed: false,
        },
      ];
      this.currentId = 1;
    } else {
      this.currentId = this.todos[this.todos.length - 1].id + 1;
    }
  }

  setView(view) {
    this.view = view;
  }

  save() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  getTodos() {
    return this.todos.map((todo) => ({ ...todo }));
  }

  findTodo(id) {
    return this.todos.findIndex((todo) => todo.id === id);
  }

  toggleCompleted(id) {
    const index = this.findTodo(id);
    const todo = this.todos[index];
    todo.completed = !todo.completed;
    this.save();
  }

  editTodo(id, values) {
  const index = this.findTodo(id);
  if (index === -1) {
    console.error('Tarea no encontrada');
    return;
  }
  Object.assign(this.todos[index], values);
  this.save();
}

addTodo(title, description, dueDate) {
  const todo = {
    id: this.currentId++,
    title,
    description,
    dueDate,
    completed: false,
  };

  this.todos.push(todo);
  this.save();
  console.log(this.todos);  // Verifica el estado de todos después de agregar la tarea.

  return { ...todo };
}

removeTodo(id) {
  const index = this.findTodo(id);
  this.todos.splice(index, 1);
  this.save();
  console.log(this.todos);  // Verifica el estado de todos después de la eliminación.
}


