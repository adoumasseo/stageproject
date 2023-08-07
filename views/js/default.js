const bars = document.querySelector(".bars");
const aside = document.querySelector("aside");
const pageName = document.querySelectorAll(".pagename");
const icon = document.querySelectorAll(".icon");
const title = document.querySelector(".title");

bars.addEventListener("click", () => {
  aside.classList.toggle("asidesmall");
  title.classList.toggle("disappear");
  icon.forEach((icon) => {
    icon.classList.toggle("iconsmall");
  });
  pageName.forEach((pagename) => {
    pagename.classList.toggle("disappear");
  });
});

const popup = document.querySelector(".pop");
const background = document.querySelector(".background");
const cancel = document.querySelector(".cancelcancel");

window.addEventListener("scroll",()=>{
  background.style.setProperty("--scrollTop", window.scrollY +"px")
})

// Gestion du code couleur
const statut = document.querySelectorAll(".statut");
const actionUtilisateur = document.querySelectorAll(".actionuser");

window.addEventListener("load", () => {
  const line = document.querySelectorAll(".line");
  const lenght = line.length;

  aside.style.setProperty("--heightDynamic", lenght* 50 + 330 + "px");
  statut.forEach((statut) => {
    if (statut.textContent == "En attente") {
      statut.classList.add("enattente");
    } else if (statut.textContent == "En cours de traitement") {
      statut.classList.add("encours");
    } else if (statut.textContent == "Non accordée") {
      statut.classList.add("refus");
    } else if (statut.textContent == "Accordée") {
      statut.classList.add("valide");
    } else if (statut.textContent == "Restructurée") {
      statut.classList.add("Restructure");
    }
  });

  
  actionUtilisateur.forEach((actionUtilisateur) => {
    if (actionUtilisateur.textContent == "Annuler la demande") {
      actionUtilisateur.classList.add("annuler");
      actionUtilisateur.addEventListener("click", () => {
        popup.classList.toggle("appearform");
        background.classList.toggle("appearbg");
        overflow();
      });
    }
    background.addEventListener("click", () => {
      popup.classList.toggle("appearform");
      background.classList.toggle("appearbg");
      overflow();
    });

    cancel.addEventListener("click", () => {
      popup.classList.toggle("appearform");
      background.classList.toggle("appearbg");
      overflow();
    });
  });
});
