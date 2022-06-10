const left = document.querySelector(".pass-left");
const right = document.querySelector(".pass-right");
const submit = document.getElementById("create-account-btn");

let leftPass;
let rightPass;

left.addEventListener(
  "keydown",
  () => (leftPass = document.getElementById("pass").value)
);

right.addEventListener(
  "keydown",
  () => (rightPass = document.getElementById("pass").value)
);

window.addEventListener("keydown", () => {
  if (leftPass === rightPass) {
    submit.disabled = false;
  }
});
