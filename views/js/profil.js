const btnshowhidden = document.querySelector(".showpass");
const passwd = document.querySelectorAll(".passwd");
let compteurBool = true;
console.log(passwd);
btnshowhidden.addEventListener("click", () => {
  if (compteurBool) {
    passwd.forEach((password) => {
      password.setAttribute("type", "text");
    });
    compteurBool = false;
  } else {
    passwd.forEach((password) => {
      password.setAttribute("type", "password");
    });
    compteurBool = true;
  }
});

const cgpasswd = document.querySelector(".changepasswd");
const popup = document.querySelector(".pop");
const background = document.querySelector(".background");

cgpasswd.addEventListener("click", () => {
  popup.classList.toggle("appearform");
  background.classList.toggle("appearbg");
  overflow();
});

background.addEventListener("click", () => {
  popup.classList.toggle("appearform");
  background.classList.toggle("appearbg");
  overflow();
});

const savepasswd = document.querySelector(".savepasswd");

savepasswd.addEventListener("click", () => {
  popup.classList.toggle("appearform");
  background.classList.toggle("appearbg");
});

const img = document.querySelector(".pictureprofile");
const input = document.querySelector('input[type="file"]');

input.addEventListener('change', () => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      img.src = reader.result;
    });
    reader.readAsDataURL(file);
  });
