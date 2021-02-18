const input = document.getElementById("input");
const form = document.getElementById("form");
const list = document.getElementById("list");
console.log(list);
console.log(list.children[0]);

// on form submit take input value and create a new list item 
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Define nodes in list 
    let newItem = document.createElement('div');
    let task = document.createElement('p');
    task.innerText = input.value;
    let circle = document.createElement('span');
    let x = document.createElement('img');
    x.setAttribute('src', "images/icon-cross.svg");

    // Assign class names to nodes 
    newItem.classList.add('item');
    circle.classList.add('circle');
    x.classList.add('X');
    
    // Append new item to list 
    newItem.appendChild(circle);
    newItem.appendChild(task);
    newItem.appendChild(x);
    list.appendChild(newItem);

    input.value = "";
})