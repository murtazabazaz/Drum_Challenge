// Detecting button press..
var totalButtons = document.querySelectorAll(".drum").length;


for(let i =0;i<totalButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

// detecting keyboard press

document.addEventListener("keydown", function(event) {

    makeSound(event.key);
    buttonAnimation(event.key);
    
});

// playing the sound

function makeSound(key){

    switch(key){
        case "w":
        var audio = new Audio('sounds/tom-1.mp3')
        audio.play();
        break;

        case "a":
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3')
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3')
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3')
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/crash.mp3')
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/kick-bass.mp3')
            audio.play();
            break;

            default: console.log(event.key);

}



}

function buttonAnimation(currentKey){
    var activeKey = document.querySelector("."+currentKey);
    activeKey.classList.add("pressed")

   
    setTimeout(() => {
       activeKey.classList.remove("pressed")
    }, 100);

}