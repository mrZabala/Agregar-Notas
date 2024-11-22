"use strict";

//Obtencion de clases desde html
var input = document.querySelector("input");
var addBtn = document.querySelector(".btnAdd");
var ul = document.querySelector("ul");
var empty = document.querySelector(".empty");
addBtn.addEventListener("click", function (e) {
  e.preventDefault(); //Evitar que se envie el formulario

  var text = input.value; // Obtener Valor del input

  if (text !== "") {
    var li = document.createElement("li");
    var p = document.createElement("p");
    p.textContent = text; //Se le cambia el valor al elemento p y se le agrega el valor del input

    var dateNow = moment(); // Se usa la libreria moment.

    var dateSpan = document.createElement("span");
    dateSpan.textContent = "".concat(dateNow.format("MMMM Do YYYY")); //Configuracion del formato de la fecha

    dateSpan.className = "date"; //Se agregan cada uno de los elementos a otro elemento contenedor

    li.appendChild(p);
    li.appendChild(dateSpan);
    li.appendChild(addDeleteBtn()); //Aqui se le agrega una funcion al elemento li

    ul.appendChild(li);
    input.value = "";
    empty.style.display = "none";
  } //Si text no esta vacio se ejecuta todo lo que sucede dentro de la condicional, se crean elementos como 'li', 'p' y 'span' siendo estos agregados al elemento p

});

function addDeleteBtn() {
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";
  deleteBtn.addEventListener("click", function (e) {
    var item = e.target.parentElement;
    ul.removeChild(item);
    var items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });
  return deleteBtn;
}
//# sourceMappingURL=script.dev.js.map
