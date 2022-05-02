var display = $('#item-3');
var textOperador = $('#item-2');

var txtn1 = 'naodefinido';
var txtn2 = 'naodefinido';
var n1;
var n2;
var i = 1;
function pegaNumero() {
  n1Format = txtn1.replace(',', '.');
  n2Format = txtn2.replace(',', '.');

  n1 = parseFloat(n1Format);
  n2 = parseFloat(n2Format);
}

function verificaPonto() {
  var textDisplay = $('#item-3').html();
  var temPonto = textDisplay.indexOf(',');
  console.log(temPonto);
  return temPonto;
}

function pisca() {
  $('#item-2,#item-3').fadeToggle(25);
  $('#item-2,#item-3').fadeToggle(25);
}

/* limpa tudo */
function limpar() {
  display.html('');
  textOperador.html('');
  txtn1 = 'naodefinido';
  txtn2 = 'naodefinido';
  i = 1;
  pegaNumero();
}

/* coloca numeros */
function insert(num) {
  pisca();
  if (txtn1 !== 'naodefinido' && i < 2) {
    console.log('nana');
    display.html('');
    i++;
  }
  /* verifica se nao tem numero e coloca 0, no display */
  if (num == ',' && display.html().length == 0) {
    display.html('0,');
    return;
  }
  /* verifica se ja tem , no display */
  if (num == ',') {
    if (verificaPonto() != -1) {
      return;
    }
  }

  if (display.html().length < 18) {
    display.html(display.html() + num);
  } else {
    console.log('tem mais de 18 digitos');
  }
}

function operador(op) {
  if (txtn1 == 'naodefinido' || txtn1 == '') {
    console.log(txtn1);
    txtn1 = display.html();
    console.log('novo valor ' + txtn1);
  } else {
    txtn2 = display.html();
  }

  pegaNumero();
  switch (op) {
    case '+':
      textOperador.html('SOMA');
      /* display.html(n1 + n2); */
      console.log(n1 + n2);
      i = 1;
      break;
    case '-':
      textOperador.html('MENOS');
      break;

    case '/':
      textOperador.html('DIVISÃO');
      break;

    case '*':
      textOperador.html('MULTI');
      break;

    default:
      break;
  }
  console.log(op);
}
