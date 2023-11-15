const prenomInput = document.getElementById('prenom');
const nomInput = document.getElementById('nom');
const ageInput = document.getElementById('age');
const myButton = document.getElementById("btn-valider");
const formulaire = document.getElementById('f');

function afficher(e) {
    e.preventDefault();
    console.log(e);
    // alert(`Je m'appelle ${prenomInput.value} ${nomInput.value} et j'ai ${ageInput.value} ans `);
    console.log(`Je m'appelle ${prenomInput.value} ${nomInput.value} et j'ai ${ageInput.value} ans `);
}

//myButton.addEventListener('click', afficher())

//myButton.addEventListener('click', afficher)

formulaire.addEventListener('submit', afficher);

