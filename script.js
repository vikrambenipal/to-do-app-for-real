const input = document.getElementById("input");
const form = document.getElementById("form");

// on form submit take input value and create a new list item 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const task = input.value;
    input.value = "";
})