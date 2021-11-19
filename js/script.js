const team = [
    {
        "name": "Wayne Barnett",
        "role": "Founder & CEO",
        "img": "img/wayne-barnett-founder-ceo.jpg",
    },

    {
        "name": "Angela Caroll",
        "role": "Chief Editor",
        "img": "img/angela-caroll-chief-editor.jpg",
    },

    {
        "name": "Walter Gordon",
        "role": "Office Manager",
        "img": "img/walter-gordon-office-manager.jpg",
    },

    {
        "name": "Angela Lopez",
        "role": "Social Media Manager",
        "img": "img/angela-lopez-social-media-manager.jpg",
    },

    {
        "name": "Scott Estrada",
        "role": "Developer",
        "img": "img/scott-estrada-developer.jpg",
    },

    {
        "name": "Barbara Ramos",
        "role": "Graphic Designer",
        "img": "img/barbara-ramos-graphic-designer.jpg",
    },
];

//PROGRAMMA
for (let i = 0; i < team.length; i++) {
    createCard(i);
}
// FINE PROGRAMMA




//FUNZIONI
function createCard(i) {
    const person = team[i];
    console.log(team[i]);
    document.querySelector(".team-container").innerHTML += `
    <div class="team-card">
        <div class="card-image">
            <img src="${person.img}" alt="${person.name}"/>
        </div>
        <div class="card-text">
            <h3>${person.name}</h3>
            <p>${person.role}</p>
        </div>
    </div>
    `
}
//FINE FUNZIONI