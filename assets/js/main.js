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

 //dichiaro una variabile e la inizializzo con l'elemento nella dom, con richiamo dalla classe
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

    //Creo elementi nella dom dove stamperò le info dei membri del team


    let card = document.createElement("div");

    //appendo quanto creato all'interno di personasElement nella dom
    personasElement.append(card);

    //stampo il contenuto al suo interno
    card.innerHTML =  

    `<div class="col d-flex justify-content-center"> 
        <div class="card my-4" style="width: 18rem;">
            <img src="./assets/img/${member.image}" class="card-img-top" alt="member image">
            <div class="card-body">
            <h2 class = "text-center">${member.name}</h2>
            <h5 class = "text-center">${member.role}</h5>
            </div>
        </div>  
    </div>`;


}
