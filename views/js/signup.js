const btnshowhidden = document.querySelector(".showpass");
let compteurBool = true;

btnshowhidden.addEventListener("click", () => {
  if (compteurBool) {
    firstpass.setAttribute("type", "text");
    secondpass.setAttribute("type", "text");
    compteurBool = false;
  } else {
    firstpass.setAttribute("type", "password");
    secondpass.setAttribute("type", "password");
    compteurBool = true;
  }
});

const input = document.querySelector('input[type="file"]');
const imgchoose = document.querySelector(".choose");
// console.log(imgchoose.textContent);
input.addEventListener("change", () => {
  const file = input.files[0];
  imgchoose.textContent = file.name;
  // console.log(file);
});
