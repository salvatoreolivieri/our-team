/*

Aggiungere un file js in cui definire un array di oggetti che rappresentano i membri del team.

Ogni membro ha le informazioni necessarie per stampare la relativa card: 
- Nome
- Ruolo
- Foto.

Una volta definita la struttura dati, prendendo come riferimento la card di esempio presente nell’html, stampare dinamicamente una card per ogni membro del team.

--> BONUS:

Utilizzare gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team: cliccando sul pulsante “add” viene creato un **nuovo oggetto**, il quale viene **inserito nell’array iniziale** e viene stampata una nuova card con tutte le informazioni inserite dall’utente.

*/

const container = document.querySelector(".team-container");

const teamMember = [

  {
    Nome: "Wayne Barnett",
    Ruolo: "Founder & CEO",
    Foto: "img/wayne-barnett-founder-ceo.jpg"
  },

  {
    Nome: "Angela Caroll",
    Ruolo: "Chief Editor",
    Foto: "img/angela-caroll-chief-editor.jpg"
  },

  {
    Nome: "Walter Gordon",
    Ruolo: "Office Manager",
    Foto: "img/walter-gordon-office-manager.jpg"
  },

  {
    Nome: "Angela Lopez",
    Ruolo: "Social Media Manager",
    Foto: "img/angela-lopez-social-media-manager.jpg"
  },

  {
    Nome: "Scott Estrada",
    Ruolo: "Developer",
    Foto: "img/scott-estrada-developer.jpg"
  },

  {
    Nome: "Barbara Ramos",
    Ruolo: "Graphic Designer",
    Foto: "img/barbara-ramos-graphic-designer.jpg"
  }

]

console.log(teamMember);

for (const key in teamMember) {

  console.log(teamMember[key].Nome);

  const ouputTeamMember =

    `
      <div class="team-card">
        <div class="card-image">
          <img
            src="${teamMember[key].Foto}"
            alt="${teamMember[key].Nome}"
          />
        </div>
        <div class="card-text">
           <h3>${teamMember[key].Nome}</h3>
            p>${teamMember[key].Ruolo}</p>
        </div>
      </div>
  `

  container.innerHTML += ouputTeamMember;
}