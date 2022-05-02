"use strict";

const display = $(".display");
const numeros = document.querySelectorAll("[class*=tecla]");
const operadores = document.querySelectorAll("[class*=operador]");

let novoNumero = true;
let operador;
let numeroAnterior;

const operaçãoPendente = () => operador != undefined;

const calcular = () => {
  if (operaçãoPendente()) {
    const numeroAtual = parseFloat(display.text().replace(",", "."));
    novoNumero = true;

    if (operador == "+") {
      atualizarDisplay(numeroAnterior + numeroAtual);
    } else if (operador == "-") {
      atualizarDisplay(numeroAnterior - numeroAtual);
    } else if (operador == "X") {
      atualizarDisplay(numeroAnterior * numeroAtual);
    } else if (operador == "÷") {
      atualizarDisplay(numeroAnterior / numeroAtual);
    }
  }
};

function atualizarDisplay(texto) {
  if (novoNumero) {
    display.text(texto).toLocaleString("BR");
    novoNumero = false;
  } else {
    display.text(display.text() + texto).toLocaleString("BR");
  }

  console.log("num escolhido " + texto);
  //display.textContent += texto;
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

numeros.forEach((numero) => numero.addEventListener(`click`, inserirNumero));

const selecionarOperador = (evento) => {
  if (!novoNumero) {
    calcular();
    novoNumero = true;

    operador = evento.target.textContent;

    console.log("operador escolhido " + operador);
    numeroAnterior = parseFloat(display.text().replace(",", "."));
    Raiz();
  }
};

operadores.forEach((operador) =>
  operador.addEventListener(`click`, selecionarOperador)
);

$(".igual").click(function () {
  calcular();
  operador = undefined;
});

$(".limpaDisplay").click(function () {
  display.text("");
  operador = undefined;
  novoNumero = true;
  numeroAnterior = undefined;
});

$(".backspace").click(function () {
  display.text(display.text().slice(0, -1));
});

/* function existeDecimal() {
  display.text().indexOf(",") != -1;
}
 function existeValor() {
  display.text().length > 0;
} */

const existeDecimal = () => display.text().indexOf(",") != -1;
const existeValor = () => display.text().length > 0;

$(".decimal").click(function () {
  //teste

  if (!existeDecimal()) {
    if (existeValor()) {
      atualizarDisplay(",");
    } else {
      atualizarDisplay("0,");
    }
  }
});

/* 
 function inserirNumero(x) {
  console.log(x.path[0].innerText);
} 

//

 function inserirNumero(x) {
  display.html(x.target.textContent);

 console.log(x.target.textContent);*/

function Raiz() {
  if (operador == "√") {
    atualizarDisplay(Math.sqrt(numeroAnterior));
  }
}
