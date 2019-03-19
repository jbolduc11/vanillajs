const input = document.getElementById("input");
const paragraph = document.getElementById("paragraph");
const list = document.getElementById("my-todo-list");
const footer = document.getElementById("footer");
const addButton = document.getElementById("add-btn");

console.log(footer);
const colors = ['tomato', 'goldenrod', 'firebrick', 'antiquewhite']

const add = () => { 
    const listItem = document.createElement('li');
    listItem.innerText = input.value;

    // get a random color
    const index = Math.floor(Math.random()*colors.length)
    listItem.style.background = colors[index]
    footer.innerHTML =`<b>${colors[index]}</b>`;
    footer.style.color = colors[index];


    list.appendChild(listItem);
    input.value = "";

    // add confirmation text
    paragraph.innerText = "Item added";

    setTimeout(()=>{
        paragraph.innerText = "";
    }, 2000)

}

addButton.onclick = add;
