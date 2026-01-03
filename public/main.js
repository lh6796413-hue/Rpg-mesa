const socket = io();

const input = document.getElementById("nameInput");
const btn = document.getElementById("confirm");
const start = document.getElementById("start");

input.oninput = () => {
  btn.disabled = input.value.trim().length === 0;
};

btn.onclick = () => {
  start.remove();
  socket.emit("join", input.value.trim());
};

socket.on("players", players => {
  console.log(players);
});
