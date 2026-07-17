let steps = document.querySelectorAll(".step");

let current = 0;

let next = document.getElementById("next");
let prev = document.getElementById("prev");

let bar = document.getElementById("bar");
let stepText = document.getElementById("stepText");
let percent = document.getElementById("percent");


function afficherEtape() {

    steps.forEach(function(step) {
        step.classList.remove("active");
    });

    steps[current].classList.add("active");


    let progression = Math.round(((current + 1) / steps.length) * 100);

    bar.style.width = progression + "%";

    stepText.innerHTML = "Étape " + (current + 1) + " sur 9";

    percent.innerHTML = progression + " %";


    if (current === 0) {
        prev.style.display = "none";
    } else {
        prev.style.display = "block";
    }


    if (current === steps.length - 1) {
        next.innerHTML = "📩 Envoyer mon cahier des charges";
    } else {
        next.innerHTML = "Suivant →";
    }

}



next.onclick = function() {

    if (current < steps.length - 1) {

        current++;
        afficherEtape();

    } else {

        alert("Navigation terminée");

    }

};



prev.onclick = function() {

    if (current > 0) {

        current--;
        afficherEtape();

    }

};



afficherEtape();
