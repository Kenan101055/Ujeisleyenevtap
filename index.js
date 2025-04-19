let a = document.getElementById("addnewtodo")
let c  = document.getElementsByClassName("todoitem")
a.addEventListener('click',()=>{
    let b = prompt("Add new to do plssss")
    if (b && b.trim() !== "") {
    let d = document.createElement("li");
    d.textContent = b;
    let e = document.querySelector('.todo-list')
    let g = document.getElementById("To do list")
    e.appendChild(d);
    }
})
//islemedi