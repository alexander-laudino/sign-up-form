const left = document.querySelector(".pass-left");
const right = document.querySelector(".pass-right");

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
