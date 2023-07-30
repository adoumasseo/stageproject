// Gestion du pop up
const adddate = document.querySelector(".adddate");
const background = document.querySelector(".background");
const popup = document.querySelector(".pop");
adddate.addEventListener("click", () => {
  popup.classList.toggle("appearform");
  background.classList.toggle("appearbg");
});

background.addEventListener("click", () => {
    popup.classList.toggle("appearform");
    background.classList.toggle("appearbg");
  });