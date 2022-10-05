
// Selector-Disselector-Mechanism

allButtons = document.querySelectorAll("button");
allButtons.forEach(button => {
    button.style.animationPlayState = "paused";
});

allButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        let audioElement = this.querySelector("audio");
        //State management
        if (e.target.dataset.chosen == "true") {
            e.target.classList.remove("chosen");
            e.target.dataset.chosen = false;
            //toggle animation
            e.target.style.animationPlayState = 'paused';
            //toggle audio
            audioElement.pause();
        } else if (e.target.dataset.chosen == "false") {
            e.target.classList.add("chosen");
            e.target.dataset.chosen = true;
            //toggle animation!
            e.target.style.animationPlayState = 'running';
            //toggle audio
            audioElement.play();
        };
    });
});