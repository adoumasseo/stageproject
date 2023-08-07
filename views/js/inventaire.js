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
console.log(statut);

window.addEventListener("load", () => {
  statut.forEach((statut) => {

  const line = document.querySelectorAll(".line");
  const lenght = line.length;
  aside.style.setProperty("--heightDynamic", lenght* 50 + 330 + "px");
  
    if (statut.textContent == "En Congés") {
      statut.classList.add("conges");
    } else if (statut.textContent == "Actif") {
      statut.classList.add("actif");
    }
  });
 
});
