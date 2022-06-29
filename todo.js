
// // --- FOLLOW ALONG --- //

// // selectors:

// const todoInput = document.querySelector('.todo-input');
// const todoButton = document.querySelector('.todo-button');
// const todoList = document.querySelector('.todo-list');


// // event listener:

// todoButton.addEventListener('click', addToDo)
// todoList.addEventListener('click', deleteAndCheck)


// // functions:

// function addToDo(event) {
//     //prevent form from submitting:

//     event.preventDefault();

//     // create todo DIV

//     const todoDiv = document.createElement('div');
//     todoDiv.classList.add('todo');
    
//     // create Li

//     const newTodo = document.createElement('li');
//     newTodo.innerText = todoInput.value;
//     newTodo.classList.add('todo-item');
//     todoDiv.appendChild(newTodo);

//     // done button

//     const doneButton = document.createElement('button');
//     doneButton.innerText = 'done';
//     doneButton.classList.add('done-btn');
//     todoDiv.appendChild(doneButton);
    

//     // delete button

    
//     const deleteButton = document.createElement('button');
//     deleteButton.innerText = 'delete';
//     deleteButton.classList.add('delete-btn');
//     todoDiv.appendChild(deleteButton);

//     // append to list

//     todoList.appendChild(todoDiv);

//     // clear todo input

//     todoInput.value = '';

// }


// function deleteAndCheck(e) {

//     const item = e.target;

//     //delete:

//     if (item.classList[0] === 'delete-btn') {
//         const todo = item.parentElement;
//         todo.remove();
//     }

//     if(item.classList[0] === 'done-btn') {
//         const todo = item.parentElement;
//         todo.classList.toggle('completed');
//    

//NOT WORKING------ edit button----

//     // if(editButton.innerText.toLowerCase() == 'edit') {
        
//     // todoDiv.appendChild(editButton);
//     //     todoInput.removeAttribute('readonly');
//     //     editButton.innerText = 'Save';
//     // } else {
//     //     todoInput.setAttribute('readonly', 'readonly');
//     //     editButton.innerText = 'Edit';
//     // }
// }


// //  things to search:

// // > appendchild
// // > create element
// // > readonly
// // > setAttribute 
// // > preventDefault
// // > empty value

// /************************/



// create element & appendChild practice

// > turning html collection to array and using setattribute to change their classes didnt work. bcuz of if statement?? or classname thing??? 
// > it console.logs tho. 

// const container = Array.from (document.querySelector('.new-div-container').children);

// container.forEach(function(el) {

//     el.addEventListener('click', function (el) {
//         console.log('pink');
//     })

// })

//------------------------//


// modify single div element using setAttribute and use if/else statement.


// const newShit = document.querySelector('.new-div');


// newShit.addEventListener('click', clickMe)

// function clickMe (el) {

//     if(newShit.className === 'new-div'){

//         newShit.setAttribute('class', 'blue');

//     } else {

//         newShit.setAttribute('class', 'new-div')
//     }

// }





