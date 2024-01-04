import html from './app.html?raw';
import todoStore, { Filters } from "../store/todo.store";
import { renderTodos } from './use-cases';

const ElementIds = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompletedButton: '.clear-completed',
    TodoFilters: '.filtro',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIds.TodoList, todos );
    }

    // Cuando la función App se llama
    (()=>{
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    // Referencias HTML
    const newDescriptionInput = document.querySelector( ElementIds.NewTodoInput );
    const todoListUL = document.querySelector( ElementIds.TodoList );
    const clearCompletedButton = document.querySelector( ElementIds.ClearCompletedButton );
    const filtersLIs = document.querySelectorAll( ElementIds.TodoFilters );

    // Listener
    newDescriptionInput.addEventListener('keyup',(event)=>{
        if( event.keyCode != 13 ) return;
        if( event.target.value.trim().length === 0 ) return;

        todoStore.addTodo(event.target.value.trim());
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click',(event) =>{
        const element = event.target.closest('[data-id]'); // Busca el elemento con el data atribute más cercano - Hacia el padre
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    })

    todoListUL.addEventListener('click',(event) =>{
        const idDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');

        if( !element || !idDestroyElement ) return;
        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    })

    clearCompletedButton.addEventListener('click',()=>{
        console.log('elimss');
        todoStore.deleteCompleted();
        displayTodos();
    })

    filtersLIs.forEach( element => {
        element.addEventListener('click',(element)=>{
            filtersLIs.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');

            switch (element.target.text) {
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                    break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                    break;
            }
            displayTodos();
        });
    });
}