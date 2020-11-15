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
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log("altura inválida");
    alturaValida = false;
    tdImc.textContent = "Altura inválido";
    paciente.classList.add("paciente-invalido");
  }
  if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
  event.preventDefault();

  var form = document.querySelector("#form-adicionar");

  var nome = form.nome.value;
  var peso= form.peso.value;
  var altura = form.altura.value;
  var gordura =form.gordura.value;
  pacienteTr = document.createElement("tr");

var nomeTd = document.createElement("td")
var pesoTd = document.createElement("td")
var alturaTd = document.createElement("td")
var gorduraTd = document.createElement("td")
var imcTd = document.createElement("td")
nomeTd.textContent= nome;
pesoTd.textContent= peso;
alturaTd.textContent= altura;
gorduraTd.textContent= gordura;

pacienteTr.appendChild(nomeTd)
pacienteTr.appendChild(pesoTd)
pacienteTr.appendChild(alturaTd)
pacienteTr.appendChild(gorduraTd)
console.log(pacienteTr);

var tabela = document.querySelector("#tabela-pacientes")
tabela.appendChild(pacienteTr);

});
