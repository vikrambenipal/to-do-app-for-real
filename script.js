const input = document.getElementById("input");
const form = document.getElementById("form");
const list = document.getElementById("list");
let x_list = document.getElementsByClassName("X");

// Remove any initial items in list 
Array.from(x_list).forEach((x,i) => {
    console.log(i);
    x.addEventListener('click', (e) => {
        x.parentElement.remove();
    })
})

// on form submit take input value and create a new list item 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value != ""){
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

        // Add event listener to x
        x.addEventListener('click', (e) => {
            x.parentElement.remove();
        })

        input.value = "";
    }
})