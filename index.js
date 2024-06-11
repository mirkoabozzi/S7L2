const form = document.getElementById("form");
const input = document.getElementById("nameInput");
const h1 = document.querySelector("h1");

form.onsubmit = (event) => {
  event.preventDefault();
  const inputName = input.value;
  console.log(inputName);

  localStorage.setItem("Name", inputName);
  input.value = "";

  h1.innerHTML = localStorage.getItem("Name");
};

const deleteButton = document.getElementById("deleteBtn");
deleteButton.addEventListener("click", (event) => {
  localStorage.removeItem("Name");
  h1.innerHTML = "";
});

let timer = 0;

const incrementTimer = () => {
  timer++;
  //   console.log(timer);
  sessionStorage.setItem("Timer", timer);
};
setInterval(incrementTimer, 1000);

const getTimer = sessionStorage.getItem("Timer");
if (getTimer) {
  timer = getTimer;
}
