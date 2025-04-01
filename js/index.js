import Model from './model.js';
import View from './view.js';

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const tableBody = document.querySelector('#table tbody');
    const btn = document.getElementById('add');

    function addTodo() {
        const titleValue = title.value.trim();
        const descriptionValue = description.value.trim();

        if (!titleValue || !descriptionValue) {
            console.error('Title and description are required');
            alert('Title and description are required');
            return;
        }

        // Crear nueva fila
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${titleValue}</td>
            <td>${descriptionValue}</td>
            <td class="text-center">
                <input type="checkbox">
            </td>
            <td>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            </td>
        `;

        // Agregar la fila a la tabla
        tableBody.appendChild(newRow);

        // Limpiar los campos de entrada
        title.value = '';
        description.value = '';

        // Agregar evento para eliminar la tarea
        newRow.querySelector('.delete-btn').addEventListener('click', () => {
            newRow.remove();
        });

        console.log('Task added successfully');
    }

    if (btn) {
        btn.addEventListener('click', addTodo);
    }
});
