<<<<<<< HEAD
const btnCifrar = document.getElementById("btn_cifrar");
const btnDescifrar = document.getElementById("btn_descifrar");
const btnCopiar = document.getElementById("btn_copiar");

const cifrarTxt = document.getElementById("cifrar");
const descifrarTxt = document.getElementById("descifrar");

const codigos = [
  {
    "numero": 1,
    "letra": "A"
  },
  {
    "numero": 2,
    "letra": "B"
  },
  {
    "numero": 3,
    "letra": "C"
  },
  {
    "numero": 4,
    "letra": "D"
  },
  {
    "numero": 5,
    "letra": "E"
  },
  {
    "numero": 6,
    "letra": "F"
  },
  {
    "numero": 7,
    "letra": "G"
  },
  {
    "numero": 8,
    "letra": "H"
  },
  {
    "numero": 9,
    "letra": "I"
  },
  {
    "numero": 10,
    "letra": "J"
  },
  {
    "numero": 11,
    "letra": "K"
  },
  {
    "numero": 12,
    "letra": "L"
  },
  {
    "numero": 13,
    "letra": "M"
  },
  {
    "numero": 14,
    "letra": "N"
  },
  {
    "numero": 15,
    "letra": "O"
  },
  {
    "numero": 16,
    "letra": "P"
  },
  {
    "numero": 17,
    "letra": "Q"
  },
  {
    "numero": 18,
    "letra": "R"
  },
  {
    "numero": 19,
    "letra": "S"
  },
  {
    "numero": 20,
    "letra": "T"
  },
  {
    "numero": 21,
    "letra": "U"
  },
  {
    "numero": 22,
    "letra": "V"
  },
  {
    "numero": 23,
    "letra": "W"
  },
  {
    "numero": 24,
    "letra": "X"
  },
  {
    "numero": 25,
    "letra": "Y"
  },
  {
    "numero": 26,
    "letra": "Z"
  }  
];

const codigoSize = codigos.length;
const numMagico = getRandomInt();

let objCodigo = codigos.find(sletra => sletra.letra === "X");
let strLetra = objCodigo.letra;
let numLetra = objCodigo.numero;
const conteoLetras = codigoSize - numLetra;
let restosLetras =  conteoLetras - numMagico;

console.log("Codigos Size: " + codigoSize);
console.log("salida objeto: " + strLetra + " Numero: " + numLetra);
console.log("Salida Numero magico: " + numMagico);
console.log("Letras Restos: " + conteoLetras);
console.log("Numero de Letra: " + restosLetras);

console.log("***********************************");

if(restosLetras < 0){
  restosLetras += numMagico;
}else{
  restosLetras += numMagico;
}

console.log("Valor Nuevo sumado: " + restosLetras);
let nuevaLetra = codigos.find(nLetra => nLetra.numero === restosLetras);
console.log("Nueva Letra es: " + nuevaLetra.letra);



// if(numLetra < numMagico){
//   console.log("Iniciar Desde Inicio de Letras");
//   let numBuscado = numMagico - numLetra;
//   console.log("numero de letra " + numBuscado);
//   // let nLetra = codigos.find(nletra => nLetra.numero = 2);
//   console.log(`La letra sustituta es: ${numeroLetra}`);
// }

// console.log(`numero de letras: ${numLetra} numero Magico: ${numMagico}`);

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
  const maxFloored = Math.floor(6);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

=======
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
>>>>>>> d5728f3 (Cambio codigo javascript Proyecto)
