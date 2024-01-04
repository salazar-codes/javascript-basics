import { Todo } from '../todos/models/todo.model';

export const Filters = {
    All: 'all',
    Completed: 'Completed',
    Pending: 'Pending',
}

const state = {
    todos: [
        new Todo('Gema del alma'),
        new Todo('Gema del infinito'),
        new Todo('Gema del tiempo'),
        new Todo('Gema del poder'),
        new Todo('Gema de la realidad'),
    ],
    filter: Filters.All
}

const initStore = () => {
    loadStore();
}

const loadStore = () => {
    if(!localStorage.getItem('state')) return;

    const { todos = [], filter = Filters.All } = JSON.parse( localStorage.getItem('state') );
    state.todos = todos;
    state.filter = filter;
}

const saveStateToStorage = () => {
    localStorage.setItem('state', JSON.stringify(state));
}

const getTodos = ( filter = filters.All) => {
    switch( filter ) {
        case Filters.All:
            return [...state.todos]; //Spread para crear un nuevo objeto
        case Filters.Completed:
            return state.todos.filter( todo => todo.done ); //Spread para crear un nuevo objeto
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done );
        default:
            throw new Error(`Option ${filter} is not valid.`);
    }
}

/**
 * 
 * @param {String} descripcion 
 */
const addTodo = ( descripcion ) => {
    if( !descripcion ) throw new Error('Description is required');
    state.todos.push(new Todo(descripcion));
    saveStateToStorage();
}
const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if(todo.id === todoId) todo.done = !todo.done;
        return todo;
    })
    saveStateToStorage();
}
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
    saveStateToStorage();
}
const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => !todo.done);
    saveStateToStorage();
}
/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All) => {
    state.filter = newFilter;
    saveStateToStorage();
}
const getCurrentFilter = () => {
    return state.filter;
}

export default {
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,
}