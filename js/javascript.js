const submit = document.getElementById("create-account-btn");
const errorSpan = document.querySelector("span");

let toggled = false;

window.addEventListener("keydown", () => {
  let leftPass = document.getElementById("pass").value;
  let rightPass = document.getElementById("confirm-pass").value;
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
