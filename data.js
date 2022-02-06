var data = new Date();

var hora = data.getHours()
if(hora.toString().length == 1) hora = "0"+hora
document.querySelector("#hora").innerText=hora;

var minutos = data.getMinutes()
document.querySelector("#minutos").innerText=minutos;

var semana = data.getDay()
document.querySelector("#diaSemana").innerText=semana;

var dia = data.getDate()
document.querySelector("#dia").innerText=dia;

var mes = data.getMonth()+1
document.querySelector("#mes").innerText=mes;

var ano = data.getFullYear()
document.querySelector("#ano").innerText=ano;


