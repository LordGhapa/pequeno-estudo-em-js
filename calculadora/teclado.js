const mapaTeclado = {
  0: "tecla0", //class in html
  1: "tecla1",
  2: "tecla2",
};
const mapearTeclado = (evento) => {
  const tecla = evento.key;
  console.log(evento.key);

  const teclaPermitida = () => Object.keys(mapaTeclado).indexOf(tecla) != -1;
  if (teclaPermitida()) {
    // document.getElementsByClassName(mapaTeclado[tecla]).click();  dontwork
    // document.querySelector(mapateclado, "[class=tecla]").click(); dont work

    console.log("allowed key");
  }
};
document.addEventListener("keydown", mapearTeclado);
