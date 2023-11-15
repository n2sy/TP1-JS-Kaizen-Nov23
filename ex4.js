const divInfos = document.getElementById("infos");
const allCourses = [
    {
        id : 1,
        title : "Angular",
        grade : "intermédiaire" ,
        votes : 0
    },
    {
        id : 2,
        title : "React",
        grade : "Débutant" ,
        votes : 0
    }
];
let codeAInserer = '';
for (const cours of allCourses) {
    console.log(cours);
    codeAInserer = codeAInserer.concat(`
    <ul id=${cours.id}>
    <li>${cours.title}</li>
    <li>${cours.grade}</li>
    <li>${cours.votes}</li>
    <button onclick="updateVotes(${cours.id})">❤️</button>
    </ul>
    `)
}
console.log(codeAInserer);
divInfos.innerHTML = codeAInserer;

function updateVotes(id) {
    console.log(typeof document.getElementById(id).children[2].textContent);

    document.getElementById(id).children[2].textContent = Number(document.getElementById(id).children[2].textContent) + 1;
    // document.getElementById(id).children[2].textContent = parseInt(document.getElementById(id).children[2].textContent) + 1;
}

