let input=document.getElementById("input-box")
let output=document.getElementById("list-container")
let add=document.getElementById("button")
let listContainer = document.getElementById("list-container");


button.addEventListener('click',function(){
    if(input.value==''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement('li');
        li.textContent=input.value;
        document.getElementById("list-container").appendChild(li);
        input.value="";
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span) 
    }

})
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        button.click();
    }
});

 listContainer.addEventListener("click", function(event){
    
        if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
    }
})