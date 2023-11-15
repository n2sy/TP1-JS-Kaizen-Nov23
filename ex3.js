const nomInput = document.getElementById('i');
const myBtn = document.getElementById('btn');
const affich = document.getElementById('affichage');

let listeParticipants = [];

myBtn.addEventListener('click', () => {
    //console.log(e);
    listeParticipants.push(nomInput.value);
    listeParticipants.sort();
    console.log(listeParticipants);
   affich.textContent = listeParticipants.join(" *** ");
    //affich.textContent = "<h2> Formation </h2>";
   //affich.innerHTML = "<h2> Formation </h2>";


})