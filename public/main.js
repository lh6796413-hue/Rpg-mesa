const input = document.getElementById("nome");
const botao = document.getElementById("btn");

input.addEventListener("input", () => {
  if (input.value.trim().length > 0) {
    botao.style.display = "inline-block";
  } else {
    botao.style.display = "none";
  }
});

botao.addEventListener("click", () => {
  alert("Bem-vindo ao RPG, " + input.value + "!");
});
