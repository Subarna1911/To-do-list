const inputText = document.getElementById("inputText");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputText.value === ''){
        alert("you must write something !");
    }

    else{
        const li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.classList.add("uncheck");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputText.value = "";
    saveData();
}

listContainer.addEventListener('click', (e)=>{
  if(e.target.tagName==='LI'){
    e.target.classList.toggle("checked");
    saveData();
  }

  else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML= localStorage.getItem("data");
}
showTask();