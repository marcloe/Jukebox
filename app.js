//Declarations and Inis

let switchResult = false;
let ambientAudio = document.getElementsByClassName("result")[0].querySelector("audio");
let allButtons = document.querySelectorAll("button");
let audioElements = new Array();

console.log(allButtons);
console.log("audioElements")

// Selector-Disselector-Mechanism

allButtons.forEach(elem => {
    elem.style.animationPlayState = "paused";
});

for (let i=0; i < allButtons.length; i++) { 
    audioElements[i] = allButtons[i].querySelector("audio");

    allButtons[i].addEventListener("click", function(e) {
        //State management
        if (e.target.dataset.chosen == "true") {
            e.target.classList.remove("chosen");
            e.target.dataset.chosen = false;
            //toggle animation
            e.target.style.animationPlayState = 'paused';
            //toggle audio
            audioElements[i].pause();

        } else if (e.target.dataset.chosen == "false") {
            e.target.classList.add("chosen");
            e.target.dataset.chosen = true;
            //toggle animation!
            e.target.style.animationPlayState = 'running';
            //toggle audio
            audioElements[i].play();
        };
    });
};

// State management Result Page

document.getElementById("generateButton").addEventListener("click", function(e) {
    console.log("check");
    if(switchResult==false) {
        e.target.innerHTML = "Back";
        document.getElementsByClassName("result")[0].style.visibility = "visible";
        switchResult = true;
        for(let i=0; i<audioElements.length; i++) {
            audioElements[i].pause();
        }
        for(let r=0; r<allButtons.length; r++) {
            allButtons[r].classList.remove("chosen");
            allButtons[r].dataset.chosen = false;
            //toggle animation
            allButtons[r].style.animationPlayState = 'paused';
        }
        ambientAudio.play();
    } else {
        e.target.innerHTML = "Generate";
        document.getElementsByClassName("result")[0].style.visibility = "hidden";
        switchResult = false;
        ambientAudio.pause()
    }
});

