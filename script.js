let inputValue = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");

function addText(){
    if(inputValue.value === ""){
        alert("Write something in the box...");
    }else{
        let listItem = document.createElement("li");
        listItem.innerHTML = inputValue.value;
        listContainer.appendChild(listItem);
        let span = document.createElement("span");
        span.innerHTML = "🚮";
        listItem.appendChild(span);
    }
    saveData();
    inputValue.value="";
}
listContainer.addEventListener("click",function(input){
    if(input.target.tagName === "LI"){
        input.target.classList.toggle("checked");
        saveData();
    }else if(input.target.tagName ==="SPAN"){
        input.target.parentElement.remove();    
        saveData();    
    }
},false);

function saveData(){
    localStorage.setItem("taskData",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("taskData");
}
showData();