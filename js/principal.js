var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = true;
  var alturaValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log("peso inválido");
    pesoValido = false;
    tdImc.textContent = "peso inválido";
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log("altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura inválido";
  }
  if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}

var pacientes = document.querySelector(".paciente");
console.log(pacientes);

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

console.log("Hola , mundo!");
