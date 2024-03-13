const btnCifrar = document.getElementById("btn_cifrar");
const btnDescifrar = document.getElementById("btn_descifrar");
const btnCopiar = document.getElementById("btn_copiar");

const cifrarTxt = document.getElementById("cifrar");
const descifrarTxt = document.getElementById("descifrar");

const codigos = [
  {"numero": 1,"letra": "A"},
  {"numero": 2,"letra": "B"},
  {"numero": 3,"letra": "C"},
  {"numero": 4,"letra": "D"},
  {"numero": 5,"letra": "E"},
  {"numero": 6,"letra": "F"},
  {"numero": 7,"letra": "G"},
  {"numero": 8,"letra": "H"},
  {"numero": 9,"letra": "I"},
  {"numero": 10,"letra": "J"},
  {"numero": 11,"letra": "K"},
  {"numero": 12,"letra": "L"},
  {"numero": 13,"letra": "M"},
  {"numero": 14,"letra": "N"},
  {"numero": 15,"letra": "O"},
  {"numero": 16,"letra": "P"},
  {"numero": 17,"letra": "Q"},
  {"numero": 18,"letra": "R"},
  {"numero": 19,"letra": "S"},
  {"numero": 20,"letra": "T"},
  {"numero": 21,"letra": "U"},
  {"numero": 22,"letra": "V"},
  {"numero": 23,"letra": "W"},
  {"numero": 24,"letra": "X"},
  {"numero": 25,"letra": "Y"},
  {"numero": 26,"letra": "Z"}
];

const codigoSize = codigos.length;
let numMagico = getRandomInt();

btnCifrar.addEventListener("click", function () {
  const texto = cifrarTxt.value;
  if (texto.length == 0) {
    alert("Debe ingresar Texto");
  } else {
    // llamar a función para cifrar texto
    if (texto.substring(0, 2) === "##") {
      alert("EL TEXTO ESTÁ CIFRADO, DAR CLIC EN DESCIFRAR O ESCRIBIR NUEVO TEXTO");
    }else{
      numMagico = getRandomInt();
      let salida = codec(true, texto);
      descifrarTxt.value = "##" + numCodigo(numMagico) + salida + "##";
    }
      
  }
});

btnDescifrar.addEventListener("click", function () {
  const texto = cifrarTxt.value;
  if (texto.length == 0) {
    alert("Debe ingresar Texto");
  } else {
    // llamar a función para descifrar texto
    if (texto.substring(0, 2) === "##") {
      descifrarTxt.value = codec(false, texto);
    }else{
      alert("EL TEXTO NO ESTÁ CIFRADO, DAR CLIC EN CIFRAR Y LUEGO DAR CLIC EN COPIAR");
    }
  }
});

btnCopiar.addEventListener("click", function () {
  const texto = descifrarTxt.value;
  if (texto.length == 0) {
    alert("No hay texto Cifrado");
  } else {
    // llamar a función para descifrar texto
    cifrarTxt.value = texto;
  }
});

// Genera numero aleatorio conteo letra abcdario
function getRandomInt() {
  const minCeiled = Math.ceil(1);
  const maxFloored = Math.floor(6);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

// Funcion para Codificar y Decodificar
function codec(cod, strTexto){

  let nuevoTexto="";
  let objCodigo;
  let charCodigo;
  let espacio;

  if (strTexto.substring(0, 2) === "##") {
    charCodigo = strCodigo(strTexto.substring(2, 3));
    strTexto = strTexto.substring(3, strTexto.length - 2);
  }
  
  for(var indexLetra in strTexto) {
    let charText = strTexto[indexLetra].toUpperCase();
 
      objCodigo = codigos.find((sletra) => sletra.letra == charText);
      
      // Si no encuentra letra en objeto de Códigos = undefined No lo codifica...
      if (objCodigo === undefined) {
        nuevoTexto += charText;
      } else { // Codifica el caracter
        let strLetra = objCodigo.letra;
        let numLetra = objCodigo.numero;
        let mover;

        // Codifica el Texto
        if(cod == true){
          espacio = codigoSize - numLetra;
          if(espacio < numMagico){
            mover = numMagico - (codigoSize - numLetra);
          }else{
            mover = numLetra + numMagico;
          }
        // Decodifica el Texto
        }else{
          espacio = numLetra - 1;
          if(espacio >= charCodigo){
            mover = numLetra - charCodigo;
          }else{
            mover = codigoSize + (numLetra - charCodigo) ;
          }
        }
        
        let nuevaLetra = codigos.find(nLetra => nLetra.numero === mover);
        // console.log("Nueva Letra es: " + nuevaLetra.letra);
       nuevoTexto += nuevaLetra.letra;
      }
      
  }
  // console.log(numCodigo(numMagico) + nuevoTexto);
  return nuevoTexto;
  
}

function numCodigo(numeroCodigo){
  let codCifrado;

  switch (numeroCodigo) {
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

  return codCifrado;

}

function strCodigo(letraCodigo){
  let codCifrado;

  switch (letraCodigo) {
    case "R":
      codCifrado = "1";
      break;
    case "S":
      codCifrado = "2";
      break;
    case "T":
      codCifrado = "3";
      break;
    case "X":
      codCifrado = "4";
      break;
    case "Y":
      codCifrado = "5";
      break;
    case "Z":
      codCifrado = "6";
      break;
  }

  return codCifrado;

}