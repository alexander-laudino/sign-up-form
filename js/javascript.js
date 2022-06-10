const left = document.querySelector(".pass-left");
const right = document.querySelector(".pass-right");
const submit = document.getElementById("create-account-btn");
const errorSpan = document.querySelector("span");

let leftPass = "left";
let rightPass = "right";
let toggled = false;

window.addEventListener("keydown", () => {
  leftPass = document.getElementById("pass").value;
  rightPass = document.getElementById("confirm-pass").value;
  if (leftPass === rightPass && !toggled) {
    submit.disabled = false;
    errorSpan.classList.toggle("do-not-match");
    toggled = true;
  } else if (leftPass !== rightPass && toggled) {
    submit.disabled = true;
    errorSpan.classList.add("do-not-match");
    toggled = false;
  }
});
