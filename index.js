
//document.querySelectorAll("button").addEventListener("click", handleClick);

function handleClick(){
    alert("i got clicked")
}

for(let i =0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}