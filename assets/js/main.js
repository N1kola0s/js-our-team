const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

 /*  MILESTONE 1:
stampare su console le informazioni di nome, ruolo e la stringa della foto
 */

  /* MILESTONE 2:
stampare le stesse informazioni su DOM sottoforma di stringhe */

  //stampo in console l'arrey con gli oggetti, in questo caso i membri del team e le loro caratteristiche
  console.log(team);


  const personasElement = document.querySelector(".personas")

  //imposto un ciclo for in cui stampo gli attributi dei singoli oggetti (membri) del team

  for (let i=0; i < team.length; i++){
    const member = team[i];
      
    /* console.log(typeof member); */
    
    //stampo in console il nome dei membri del team
    console.log(member.name);

    //stampo in console il ruolo dei membri del team
    console.log(member.role);

    //stampo in console l'immagine dei membri del team
    console.log(member.image);

    //stampo in console una stringa per separare i diversi oggetti 
    console.log("_____________________")

    //Creo elementi nella dom dove stamperò le info dei membri del mio team
    let card = document.createElement("div");

    personasElement.append(card);

    card.innerHTML = ` 
        <div class="card" style="width: 18rem;">
            <img src="./" class="card-img-top" alt="...">
            <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>  `;
    

  }

/* 
${member.name}
${member.role}
${member.image} */

/* Name : ${member.name}; Role: ${member.role}; Image: ${member.image} */