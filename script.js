"use strict";

let numeroAleatorio = Math.trunc(Math.random() * 20) + 1;

let pontuacao = 20;
let recorde = 0;

document.querySelector(".confirmar").addEventListener("click", function () {
  const numero = Number(document.querySelector(".caixaNumero").value);
  console.log(numero, typeof numero);

  //Quando o player nao joga
  if (!numero) {
    document.querySelector(".adivinhe").textContent = "⛔ Caixa vazia";

    //Quando o numero é maior
  } else if (numeroAleatorio > numero) {
    document.querySelector(".adivinhe").textContent = "⬆️ É maior";
    pontuacao -= 1;
    document.querySelector(".score").textContent = pontuacao;

    //Quando o numero é menor
  } else if (numeroAleatorio < numero) {
    document.querySelector(".adivinhe").textContent = "⬇️ É menor";
    pontuacao -= 1;
    document.querySelector(".score").textContent = pontuacao;

    //Quando o player ganha
  } else if (numeroAleatorio === numero) {
    document.body.style.backgroundColor = "#60b347";
    document.querySelector(".divPonto").style.width = "30rem";
    document.querySelector(".divPonto").textContent = numero;
    document.querySelector(".adivinhe").textContent = "🎉 Acertou!";

    if (pontuacao > recorde || recorde == 0) {
      recorde = pontuacao;
      document.querySelector(".recorde").textContent = recorde;
    }
  }
});

document.querySelector(".repetir").addEventListener("click", function () {
  numeroAleatorio = Math.trunc(Math.random() * 20) + 1;
  console.log(numeroAleatorio, typeof numeroAleatorio);
  pontuacao = 20;
  document.querySelector(".divPonto").textContent = "?";
  document.querySelector(".divPonto").style.width = "15rem";
  document.body.style.backgroundColor = "#222";
  document.querySelector(".adivinhe").textContent = "Adivinhe...";
  document.querySelector(".score").textContent = "20";
  document.querySelector(".caixaNumero").value = "";
});
