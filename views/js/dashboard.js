const chevron = document.querySelector(".chevron");
const servicelink = document.querySelector(".servicelink");
const servicelist = document.querySelector(".servicelist")

servicelink.addEventListener("mouseenter", () => {
  chevron.classList.toggle("chevronturn");
  servicelist.classList.toggle("appearlist");
});
