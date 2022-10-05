
// Selector-Disselector-Mechanism

allButtons = document.querySelectorAll("button");
allButtons.forEach(button => {
    button.style.animationPlayState = "paused";
});

allButtons.forEach(button => {
    button.addEventListener("click", function(e) {
        let audioElement = this.querySelector("audio");
        if (e.target.dataset.chosen == "true") {
            e.target.classList.remove("chosen");
            e.target.dataset.chosen = false;
            e.target.style.animationPlayState = 'paused';
            audioElement.pause();
        } else if (e.target.dataset.chosen == "false") {
            e.target.classList.add("chosen");
            e.target.dataset.chosen = true;
            e.target.style.animationPlayState = 'running';
            audioElement.play();
        };
    });
});