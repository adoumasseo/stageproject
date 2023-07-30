const btnshowhidden = document.querySelector(".showpass");
let compteurBool = true;

btnshowhidden.addEventListener("click", () => {
  if (compteurBool) {
    firstpass.setAttribute("type", "text");
    compteurBool = false;
  } else {
    firstpass.setAttribute("type", "password");
    compteurBool = true;
  }
});