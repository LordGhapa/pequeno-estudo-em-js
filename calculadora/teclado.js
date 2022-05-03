/* const mapaTeclado = {
  0: "item-27", //class in html
  1: "tecla1",
  2: "tecla2",
};
const mapearTeclado = (evento) => {
  const tecla = evento.key;
  console.log(evento.key + " codigo " + evento.keyCode);

  const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) != -1;
  if (teclaPermitida()) {
    // document.querySelector(mapaTeclado, "[class=tecla0]").click(); //dont work
    // document.getElementsByid(mapaTeclado, [item]).click();
    // console.log("allowed key");
  }
}; */
//document.addEventListener("keydown", mapearTeclado);

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 96) {
    document.getElementById("item-27").click();
  }
  if (event.keyCode === 97) {
    document.getElementById("item-23").click();
  }
  if (event.keyCode === 98) {
    document.getElementById("item-24").click();
  }
  if (event.keyCode === 99) {
    document.getElementById("item-25").click();
  }
  if (event.keyCode === 100) {
    document.getElementById("item-13").click();
  }
  if (event.keyCode === 101) {
    document.getElementById("item-16").click();
  }
  if (event.keyCode === 102) {
    document.getElementById("item-19").click();
  }
  if (event.keyCode === 103) {
    document.getElementById("item-12").click();
  }
  if (event.keyCode === 104) {
    document.getElementById("item-15").click();
  }
  if (event.keyCode === 105) {
    document.getElementById("item-18").click();
  }
  if (event.keyCode === 13) {
    document.getElementById("item-29").click();
  }
  if (event.keyCode === 107) {
    document.getElementById("item-26").click();
  }
  if (event.keyCode === 109) {
    document.getElementById("item-22").click();
  }
  if (event.keyCode === 111) {
    document.getElementById("item-20").click();
  }
  if (event.keyCode === 106) {
    document.getElementById("item-21").click();
  }
  if (event.keyCode === 110) {
    document.getElementById("item-28").click();
  }
  if (event.keyCode === 8) {
    document.getElementById("item-11").click();
  }
  if (event.keyCode === 144) {
    document.getElementById("item-4").click();
  }
});
