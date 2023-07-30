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

// Gestion du code couleur
const statut = document.querySelectorAll(".statut");
window.addEventListener("load", () => {
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
  
});
