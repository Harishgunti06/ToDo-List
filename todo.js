let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let input=document.querySelector("input");
let ul=document.querySelector("ul");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=input.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add("del");
    item.appendChild(delBtn);
    ul.appendChild(item);
    input.value="";
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
    }

});
