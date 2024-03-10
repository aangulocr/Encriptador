const btnCifrar = document.getElementById("btn_cifrar");
const btnDescifrar = document.getElementById("btn_descifrar");
const btnCopiar = document.getElementById("btn_copiar");

const cifrarTxt = document.getElementById("cifrar");
const descifrarTxt = document.getElementById("descifrar");

const codigos = [
  { numero: 1, letra: "A" },
  { numero: 2, letra: "B" },
  { numero: 3, letra: "C" },
  { numero: 4, letra: "D" },
  { numero: 5, letra: "E" },
  { numero: 6, letra: "F" },
  { numero: 7, letra: "G" },
  { numero: 8, letra: "H" },
  { numero: 9, letra: "I" },
  { numero: 10, letra: "J" },
  { numero: 11, letra: "K" },
  { numero: 12, letra: "L" },
  { numero: 13, letra: "M" },
  { numero: 14, letra: "N" },
  { numero: 15, letra: "O" },
  { numero: 16, letra: "P" },
  { numero: 17, letra: "Q" },
  { numero: 18, letra: "R" },
  { numero: 19, letra: "S" },
  { numero: 20, letra: "T" },
  { numero: 21, letra: "U" },
  { numero: 22, letra: "V" },
  { numero: 23, letra: "W" },
  { numero: 24, letra: "X" },
  { numero: 25, letra: "Y" },
  { numero: 26, letra: "Z" },
];

// *****************************************************
// *****************************************************
// *****************************************************

btnCifrar.addEventListener("click", function () {
  const texto = cifrarTxt.value;
  if (texto.length == 0) {
    alert("Debe ingresar Texto");
  } else {
    // llamar a función para cifrar texto
    // Limpia el TextArea antes de cifrar

    if (texto.substring(0, 2) === "##") {
      alert("El Texto está Cifrado, debe dar clic en Descifrar");
    } else {
      descifrarTxt.value = getCifrado(texto);
    }
  }
});

btnDescifrar.addEventListener("click", function () {
  const texto = cifrarTxt.value;
  if (texto.length == 0) {
    alert("Debe ingresar Texto");
  } else {
    // llamar a función para descifrar texto
    console.log(texto);
    if (texto.substring(0, 2) === "##") {
      // console.log("Texto esta cifrado...");
      // Llamar a función Descifrar();

      //******** aquí codigo para descrifrar ********
      let numCodigo = getCodigo(texto.substring(2, 3));
      let txtSinCodigo = texto.substring(3, texto.length - 2);

      let textoDescifrado = getDescifrar(numCodigo, txtSinCodigo);
      console.log("Mensaje Descifrado: " + textoDescifrado.toUpperCase());
      descifrarTxt.value = textoDescifrado;

      // descifrarTxt.value = "vamos a descifrar " + numCodigo + " Texto Limpio: " + txtSinCodigo;
    } else {
      alert("NO ES UN TEXTO CIFRADO, VERIFICAR o DAR CLIC EN BOTÓN COPIAR");
    }
    // descifrarTxt.value = texto;
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
  const maxFloored = Math.floor(6);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

// *************************************************
//     Función para Cifrar el mensaje enviado
// *************************************************

function getCifrado(textoPlano) {
  const codigosSize = codigos.length;
  const numMagico = getRandomInt();

  let objCodigo;
  let strLetra;
  let numLetra;
  let letraDisponibles;
  let cuentaLetras;
  let sumaLetras;
  let nuevaLetra;

  console.log("Funcion getCifrado: " + textoPlano);

  var textoCifrado = "";

  for (var indexLetra in textoPlano) {
    let charText = textoPlano[indexLetra].toUpperCase();

    objCodigo = codigos.find((sletra) => sletra.letra == charText);
    if (objCodigo === undefined) {
      textoCifrado += charText;
    } else {
      strLetra = objCodigo.letra;
      numLetra = objCodigo.numero;

      letraDisponibles = codigosSize - numLetra;
      cuentaLetras = numMagico - letraDisponibles;
      sumaLetras = 0;

      if (cuentaLetras > 0) {
        sumaLetras = cuentaLetras;
      } else {
        sumaLetras = numLetra + numMagico;
      }

      nuevaLetra = codigos.find((nLetra) => nLetra.numero === sumaLetras);
      textoCifrado += nuevaLetra.letra;
      // console.log("Nueva Letra es: " + nuevaLetra.letra);
    }
  }

  // Verifica el código de Cifrado

  let codCifrado;

  switch (numMagico) {
    case 1:
      codCifrado = "R";
      break;
    case 2:
      codCifrado = "S";
      break;
    case 3:
      codCifrado = "T";
      break;
    case 4:
      codCifrado = "X";
      break;
    case 5:
      codCifrado = "Y";
      break;
    case 6:
      codCifrado = "Z";
      break;
  }

  textoCifrado = "##" + codCifrado + textoCifrado + "##";
  console.log(textoCifrado);
  return textoCifrado;
}

// *************************************************
//     Función para DesCifrar el mensaje enviado
// *************************************************

function getDescifrar(intCodigo, textoCifrado) {
  const codigosSize = codigos.length;

  let objCodigo;
  let strLetra;
  let numLetra;

  let letraDisponibles;
  let cuentaLetras;
  let sumaLetras;
  let nuevaLetra;

  var textoDesCifrado = "";

  for (var indexLetra in textoCifrado) {
    let charText = textoCifrado[indexLetra].toUpperCase();

    objCodigo = codigos.find((sletra) => sletra.letra === charText);
    if (objCodigo === undefined) {
      textoDesCifrado += charText;
    } else {
      strLetra = objCodigo.letra;
      numLetra = objCodigo.numero;

      letraDisponibles = numLetra - intCodigo;
      cuentaLetras = codigosSize + letraDisponibles;
      sumaLetras = 0;

      if (cuentaLetras > 0) {
        sumaLetras = cuentaLetras;
      } else {
        sumaLetras = codigosSize + letraDisponibles;
      }

      nuevaLetra = codigos.find((nLetra) => nLetra.numero === letraDisponibles);

      if (nuevaLetra === undefined) {
        textoDesCifrado += charText;
        console.log("charText Undefined " + charText);
      } else {
        textoDesCifrado += nuevaLetra.letra;
        console.log("charText " + charText);
      }
    }

    // console.log("Salida NumeroLetra: " + numLetra);
    // console.log("Salida letrasDisponibles: " + letraDisponibles);
    // console.log("Salida cuentaLetras: " + cuentaLetras);
    // console.log("Salida sumaLetras " + sumaLetras);
  }
  return textoDesCifrado;
}

function getCodigo(strCodigo) {
  let intNum;
  switch (strCodigo) {
    case "R":
      intNum = 1;
      break;
    case "S":
      intNum = 2;
      break;
    case "T":
      intNum = 3;
      break;
    case "X":
      intNum = 4;
      break;
    case "Y":
      intNum = 5;
      break;
    case "Z":
      intNum = 6;
      break;
  }
  return intNum;
}
