// importo todos los archivos de javascript que uso para luego solo tener que importar este unico
// archivo en el index.html

import './styles.css';
import { Todo, TodoList } from './class';
import { crearTodoHtml } from './js/componentes';



export const todoList = new TodoList();

console.log( todoList.todos );

todoList.todos.forEach( todo => crearTodoHtml( todo ));