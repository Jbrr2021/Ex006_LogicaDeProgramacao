document.getElementById("mostrarMenu").addEventListener("click", function () {
  var escolha = prompt(
    "Escolha na lista o que você quer que se faça:\n" +
      "1 - Imprimir números de 1 a 10\n" +
      "2 - Imprimir os números ímpares menores que 100\n" +
      "3 - Imprimir a tabuada do número 8\n" +
      "4 - Imprimir todas as tabuadas do número 1 ao 10"
  );

  var resultadoElemento = document.getElementById("resultado");

  switch (escolha) {
    case "1":
      resultadoElemento.innerText =
        "Números de 1 a 10:\n" + imprimirNumerosDeUmADez().join(", ");
      break;
    case "2":
      resultadoElemento.innerText =
        "Números ímpares menores que 100:\n" +
        imprimirImparesMenoresQueCem().join(", ");
      break;
    case "3":
      resultadoElemento.innerText =
        "Tabuada do 8:\n" + imprimirTabuadaDoOito().join(", ");
      break;
    case "4":
      resultadoElemento.innerText =
        "Todas as tabuadas:\n" + imprimirTodasAsTabuadas().join("\n");
      break;
    default:
      resultadoElemento.innerText = "Opção inválida.";
  }
});

function imprimirNumerosDeUmADez() {
  var numeros = [];
  for (var i = 1; i <= 10; i++) {
    numeros.push(i);
  }
  return numeros;
}

function imprimirImparesMenoresQueCem() {
  var impares = [];
  for (var i = 1; i < 100; i += 2) {
    impares.push(i);
  }
  return impares;
}

function imprimirTabuadaDoOito() {
  var tabuada = [];
  for (var i = 1; i <= 10; i++) {
    tabuada.push("8 x " + i + " = " + 8 * i);
  }
  return tabuada;
}

function imprimirTodasAsTabuadas() {
  var tabuadas = [];
  for (var i = 1; i <= 10; i++) {
    tabuadas.push("Tabuada do " + i);
    for (var j = 1; j <= 10; j++) {
      tabuadas.push(i + " x " + j + " = " + i * j);
    }
  }
  return tabuadas;
}
