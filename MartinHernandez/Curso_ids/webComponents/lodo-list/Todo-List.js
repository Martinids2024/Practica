

import TodoItem from './Todo-Item/main.js';

customElements.define('todo-list', TodoList);

export default class TodoList extends HTMLElement{
    constructor() {
        super();
        this.todos = [];
        this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();   
    }

    add(todo) {
        this.todos.push(todo);
        this.render();
    }

    remove(index) {
        this.todos.splice(index, 1);
        this.render();
    }

    render() {
        const inputSection = `<input type="text"> <button>Agregar</button>`;
        const elementsToRender = this.todos.map((todo, index) => {
            return `<todo-item index="${index}" text="${todo}"></todo-item>`
        }).join('');
        this.shadowRoot.innerHTML = `${inputSection}<br>${elementsToRender}`;
        this.addListenerOnButton();
        this.addListenerOnItems();
    }

    addListenerOnButton() {
        const button = this.shadowRoot.querySelector('button');
        button.addEventListener('click', () => {
            const {value} = this.shadowRoot.querySelector('input[type="text"]');
            this.add(value);
        });
    }

    addListenerOnItems() {
        const arregloTodoItems = this.shadowRoot.querySelectorAll('todo-item');     
        arregloTodoItems.forEach(todoItem => {
            todoItem.addEventListener('todo-item-clicked', () => {
                this.remove(todoItem.index);
            });
        });
    }


}
