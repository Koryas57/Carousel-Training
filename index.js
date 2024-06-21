const leftArrow = document.querySelector(".left_arrow");
const rightArrow = document.querySelector(".right_arrow");
const bannerImg = document.querySelector(".banner img");
const squaresContainer = document.querySelector(".squares_container");
let i = 0;

const carousel = [
  {
    image:
      "https://www.shutterstock.com/image-photo/skeptic-surprised-cat-thinking-dont-600nw-1905929728.jpg",
    tagLine: "Ceci est l'image numéro 1",
  },
  {
    image:
      "https://img.freepik.com/photos-gratuite/chat-futuriste-lunettes-protection_23-2150969347.jpg?w=996&t=st=1716985916~exp=1716986516~hmac=ab65c781338a1fc905872b32510c7af863c2aad384e8f8b6e17de104e7796e9e",
    tagLine: "Ceci est l'image numéro 2",
  },
  {
    image:
      "https://img.freepik.com/photos-gratuite/chaton-mignon-assis-exterieur-regardant-camera-entouree-neige-generee-par-intelligence-artificielle_188544-84910.jpg?w=996&t=st=1716985938~exp=1716986538~hmac=adc027a7848de9ad5c945d51b11234df7945141de27297eb264ff74f87ffc814",
    tagLine: "Ceci est l'image numéro 3",
  },
  {
    image:
      "https://ih1.redbubble.net/image.2929924980.5213/flat,750x1000,075,f.jpg",
    tagLine: "Ceci est l'image numéro 4",
  },
];

// Affichage des squares

const squaresDisplay = () => {
  squaresContainer.innerHTML = "";
  for (let i = 0; i < carousel.length; i++) {
    const div = document.createElement("div");
    div.classList.add("squares");
    squaresContainer.appendChild(div);
  }
};

squaresDisplay();

const squaresPosition = document.querySelectorAll(".squares");
squaresPosition[i].classList.add("selected_square");

// Comportement du clic sur la flèche de droite

const rightArrowHandle = () => {
  if (i >= carousel.length) i = 0;
  squaresPosition[i].classList.remove("selected_square");
  i++;
  if (i >= carousel.length) i = 0;
  console.log("La valeur de i est de " + `${i}`);
  bannerImg.src = carousel[i].image;
  squaresPosition[i].classList.add("selected_square");
};

rightArrow.addEventListener("click", rightArrowHandle);

// Comportement du clic sur la flèche de gauche

const leftArrowHandle = () => {
  if (i < 0) i = carousel.length - 1;
  squaresPosition[i].classList.remove("selected_square");
  i--;
  if (i < 0) i = carousel.length - 1;
  bannerImg.src = carousel[i].image;
  squaresPosition[i].classList.add("selected_square");
  console.log("La valeur de i est maintenant de " + `${i}`);
};

leftArrow.addEventListener("click", leftArrowHandle);
squaresPosition[i].addEventListener("click", rightArrowHandle);
bannerImg.addEventListener("click", rightArrowHandle);

const form = document.querySelector("form");

/* Vérification à l'envoi du formulaire avec Submit */

form.addEventListener("submit", (e) => {
  e.preventDefault(); // preventDefault sur le submit pour éviter le rechargement de la page au click
  console.log("Il n'y a pas eu de rafraichissment de la page");

  const name = document.getElementById("Prénom").value;
  const password = document.getElementById("Password").value;

  alert("Bravo, vous êtes inscrit ! Votre pseudo est : " + `${name}`);
  alert(
    "Votre mot de passe est : " +
      `${password}` +
      "          Conservez le précieusement !"
  );
});

/* Vérification après la saisie dans le champ */

const baliseNom = document.getElementById("Prénom");

baliseNom.addEventListener("change", () => {
  const valeurNom = baliseNom.value;

  let regex = new RegExp(
    "^[a-z]+$"
  ); /* On définit notre variableDeTest, ici la valeur testée à la ligne suivante doit comporter uniquement des lettres (si oui = True) */
  let resultat =
    regex.test(
      valeurNom
    ); /* resultat = variableDeTest.test(variableTestée);        */
  console.log(
    resultat
  ); /* Ici on affiche dans un log le résultat de notre test */

  if (valeurNom === "") {
    /* Ici on vérifie si il y a du contenu ou non */
    console.log("Le champ nom est vide");
  } else {
    console.log("Le champ nom est rempli");
  }
});
