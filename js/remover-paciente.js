var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
  var alvoEvento = event.target;
  var paiDoAlvo = alvoEvento.parentNode;
paiDoAlvo.remove();
});





//pacientes.forEach(function(paciente){
 // paciente.addEventListener("dblclick", function(){
    //console.log(" fui clicado");
    //this.remove();
    

  //})

//});