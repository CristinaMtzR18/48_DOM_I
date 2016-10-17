//Código JavaScript
var elTitulo = document.getElementById("form-signin-heading");
elTitulo.innerHTML = "Por favor inicia sesión";			

document.getElementById("inputEmail").setAttribute('placeholder','Correo Electrónico');
document.getElementById("inputPassword").setAttribute('placeholder','Contraseña');

var elCheckbox = document.getElementById("checkbox");
elCheckbox.innerHTML = "Recordar datos";

var elbtnSubmit = document.getElementById("btnSubmit");
elbtnSubmit.innerHTML = "Inciar Sesión";