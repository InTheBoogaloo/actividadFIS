import Model from '../model.js'; // Asegúrate de que la ruta es correcta

describe('Model', () => {
  let model;

  beforeEach(() => {
    // Se ejecuta antes de cada prueba, inicializando el modelo
    model = new Model();
    // Limpiamos cualquier tarea previa en el localStorage para un entorno limpio
    localStorage.clear();
  });

  test('debería agregar una tarea correctamente', () => {
    const initialTodos = model.getTodos();
    expect(initialTodos.length).toBe(0); // No debe haber tareas al principio

    model.addTodo('Aprender JavaScript', 'Ver tutoriales de JS', '2025-05-10');
    const todos = model.getTodos();
    expect(todos.length).toBe(1); // Ahora debe haber una tarea
    expect(todos[0].title).toBe('Aprender JavaScript');
    expect(todos[0].description).toBe('Ver tutoriales de JS');
  });

  test('debería cambiar el estatus de completado de una tarea', () => {
    model.addTodo('Tarea pendiente', 'Descripción de la tarea', '2025-05-10');
    const todo = model.getTodos()[0];

    expect(todo.completed).toBe(false); // Inicialmente no completada

    model.toggleCompleted(todo.id);
    const updatedTodo = model.getTodos()[0];
    expect(updatedTodo.completed).toBe(true); // Ahora debería estar completada

    model.toggleCompleted(todo.id);
    const reUpdatedTodo = model.getTodos()[0];
    expect(reUpdatedTodo.completed).toBe(false); // Y de nuevo no completada
  });

  test('debería eliminar una tarea correctamente', () => {
    model.addTodo('Tarea que será eliminada', 'Descripción', '2025-05-10');
    const initialTodos = model.getTodos();
    expect(initialTodos.length).toBe(1); // Debe haber una tarea

    const todoId = initialTodos[0].id;
    model.removeTodo(todoId);

    const todosAfterDeletion = model.getTodos();
    expect(todosAfterDeletion.length).toBe(0); // Ahora debe estar vacía la lista
  });

  test('debería filtrar tareas completadas', () => {
    model.addTodo('Tarea completada', 'Descripción', '2025-05-10');
    model.addTodo('Tarea pendiente', 'Descripción', '2025-05-10');
    const todo1 = model.getTodos()[0];
    const todo2 = model.getTodos()[1];

    model.toggleCompleted(todo1.id); // Marca la primera tarea como completada

    const completedTodos = model.getCompletedTodos();
    expect(completedTodos.length).toBe(1); // Solo una tarea debe estar completada
    expect(completedTodos[0].id).toBe(todo1.id); // La tarea completada debe ser la primera
  });

  test('debería filtrar tareas no completadas', () => {
    model.addTodo('Tarea completada', 'Descripción', '2025-05-10');
    model.addTodo('Tarea pendiente', 'Descripción', '2025-05-10');
    const todo1 = model.getTodos()[0];
    const todo2 = model.getTodos()[1];

    model.toggleCompleted(todo1.id); // Marca la primera tarea como completada

    const incompleteTodos = model.getIncompleteTodos();
    expect(incompleteTodos.length).toBe(1); // Solo una tarea debe estar pendiente
    expect(incompleteTodos[0].id).toBe(todo2.id); // La tarea pendiente debe ser la segunda
  });
});
