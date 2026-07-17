let steps = document.querySelectorAll(".step");

let current = 0;

let next = document.getElementById("next");
let prev = document.getElementById("prev");

let bar = document.getElementById("bar");
let stepText = document.getElementById("stepText");
let percent = document.getElementById("percent");


function afficherEtape(){

    steps.forEach(step => {
        step.classList.remove("active");
    });

    steps[current].classList.add("active");


    let progression = Math.round(((current + 1) / steps.length) * 100);

    bar.style.width = progression + "%";

    stepText.innerHTML = "Étape " + (current + 1) + " sur 9";

    percent.innerHTML = progression + " %";


    prev.style.display = current === 0 ? "none" : "block";


    if(current === steps.length - 1){

        next.innerHTML="📩 Envoyer mon cahier des charges";

    }else{

        next.innerHTML="Suivant →";

    }

}



next.onclick=function(){

    if(current < steps.length-1){

        current++;
        afficherEtape();

    }else{

        envoyerWhatsApp();

    }

};



prev.onclick=function(){

    if(current>0){

        current--;
        afficherEtape();

    }

};



function envoyerWhatsApp(){


let formulaire = document.getElementById("formulaire");

let donnees = new FormData(formulaire);


let message =
"🚀 NOUVEAU CAHIER DES CHARGES E-LEARNING\n\n";


donnees.forEach((valeur, nom)=>{

message += "📌 " + nom + " : " + valeur + "\n";

});


// Ajouter les informations de la dernière étape

message += "\n👤 Nom : " + document.getElementById("nom").value;

message += "\n📱 Téléphone : " + document.getElementById("telephone").value;


message += "\n\n🌐 Questionnaire rempli depuis : ";
message += window.location.href;



let numero = "50931106807";


let lien =
"https://wa.me/"
+ numero
+ "?text="
+ encodeURIComponent(message);



window.location.href = lien;


}



afficherEtape();
