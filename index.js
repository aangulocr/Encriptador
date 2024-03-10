const btnCifrar = document.getElementById("btn_cifrar");
const btnDescifrar = document.getElementById("btn_descifrar");
const btnCopiar = document.getElementById("btn_copiar");

const cifrarTxt = document.getElementById("cifrar");
const descifrarTxt = document.getElementById("descifrar");

btnCifrar.addEventListener("click", function () {
  const texto = cifrarTxt.value;
  if (texto.length == 0) {
    alert("Debe ingresar Texto");
  } else {
    // llamar a función para cifrar texto
    console.log(texto);
    let num = getRandomInt();
    descifrarTxt.value = texto + "" + num;
  }
});

btnDescifrar.addEventListener("click", function () {
  const texto = cifrarTxt.value;
  if (texto.length == 0) {
    alert("Debe ingresar Texto");
  } else {
    // llamar a función para descifrar texto
    console.log(texto);
    descifrarTxt.value = texto;
  }
});

btnCopiar.addEventListener("click", function () {
  const texto = descifrarTxt.value;
  if (texto.length == 0) {
    alert("No hay texto Cifrado");
  } else {
    // llamar a función para descifrar texto
    console.log(texto);
    cifrarTxt.value = texto;
  }
});

// Genera numero aleatorio conteo letra abcdario
function getRandomInt() {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(5);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
