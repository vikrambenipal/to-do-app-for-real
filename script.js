// list
const input = document.getElementById("input");
const form = document.getElementById("form");
const list = document.getElementById("list");
const x_list = document.getElementsByClassName("X");
const circle_list = document.getElementsByClassName("circle");
// filtering options
const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("completed");


active.addEventListener('click', () => {
    $("div.div-active").hide();
})


// Toggle items to be complete 
Array.from(circle_list).forEach(circle => {
    circle.addEventListener('click', (e) => {
        circle.classList.toggle("circle-active");
        circle.nextElementSibling.classList.toggle("p-active");
        circle.parentElement.classList.toggle("div-active");
    })
})

// Remove any initial items in list 
Array.from(x_list).forEach(x => {
    x.addEventListener('click', (e) => {
        x.parentElement.remove();
    })
})

// On form submit take input value and create a new list item 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value != ""){
        // Define nodes in list 
        let newItem = document.createElement('div');
        newItem.setAttribute('draggable', true);
        let task = document.createElement('p');
        task.innerText = input.value;
        let circle = document.createElement('span');
        let x = document.createElement('img');
        x.setAttribute('src', "images/icon-cross.svg");

        // Assign class names to nodes 
        newItem.classList.add('item');
        circle.classList.add('circle');
        circle.addEventListener('click', (e) => {
            circle.classList.toggle("circle-active");
            circle.nextElementSibling.classList.toggle("p-active");
            circle.parentElement.classList.toggle("div-active");
        })
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

        // Add draggable property to new item 
        newItem.addEventListener('dragstart', () => {
            newItem.classList.add('dragging');
        })
        newItem.addEventListener('dragend', () => {
            newItem.classList.remove('dragging');
        })

        input.value = "";
    }
})

// Making the list draggable 
// Toggle opacity on/off drag 
const items = document.getElementsByClassName('item');
Array.from(items).forEach(item => {
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    })
    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
    })
})
// Moving items within list container
list.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(list, e.clientY);
    const draggable = document.querySelector('.dragging');
    if(afterElement == null) {
        list.appendChild(draggable);
    }else{
        list.insertBefore(draggable, afterElement);
    }
})

function getDragAfterElement(container, y){
    const draggableElements = [...container.querySelectorAll('.item:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if(offset < 0 && offset > closest.offset) {
             return { offset: offset, element: child }
        }else {
            return closest;
        }
    }, {offset: Number.NEGATIVE_INFINITY }).element;
}