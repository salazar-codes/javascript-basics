import { Todo } from '../todos/models/todo.model';

const Filters = {
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
    console.log(state);
}

const loadStore = () => {
    console.log(state);
}

const getTodos = ( filter = filters.All) => {
    switch( filter ) {
        case Filters.All:
            return [...state.todos]; //Spread para crear un nuevo objeto
        case Filters.Completed:
            return state.todos.filter( todo => todo.done ); //Spread para crear un nuevo objeto
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
}
const toggleTodo = ( todoId ) => {
    state.todos = state.todos.map( todo => {
        if(todo.id === todoId) todo.done = !todo.done;
        return todo;
    })
}
const deleteTodo = ( todoId ) => {
    state.todos = state.todos.filter( todo => todo.id !== todoId );
}
const deleteCompleted = () => {
    state.todos = state.todos.filter( todo => todo.done);
}
/**
 * 
 * @param {Filters} newFilter 
 */
const setFilter = ( newFilter = Filters.All) => {
    state.filter = newFilter;
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