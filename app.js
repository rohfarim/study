const listForm=document.querySelector("#listForm");
const listInput=document.querySelector("#listInput");
const p=document.querySelector("#list")
const reset=document.querySelector("#reset")
let newlist = ""

function paintlist (){
  p.innerText = newlist 
}

function handlelistsubmit(event) {
  event.preventDefault();
  newlist = listInput.value + "\n" + newlist
  listInput.value = "";
  paintlist(newlist)
  
}

function handlelistreset(){
  newlist = "";
  paintlist()
}

listForm.addEventListener("submit", handlelistsubmit);
reset.addEventListener("click",handlelistreset);