//Obtencion de clases desde html
const input = document.querySelector("input");
const addBtn = document.querySelector(".btnAdd");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

    addBtn.addEventListener("click", (e) => {
      e.preventDefault(); //Evitar que se envie el formulario

      const text = input.value; // Obtener Valor del input

      if (text !== "") { 
        const li = document.createElement("li");
        const p = document.createElement("p");


        p.textContent = text; //Se le cambia el valor al elemento p y se le agrega el valor del input

        const dateNow = moment(); // Se usa la libreria moment.
        const dateSpan = document.createElement("span"); 
        dateSpan.textContent = `${dateNow.format("MMMM Do YYYY")}`;//Configuracion del formato de la fecha
        dateSpan.className = "date";


        //Se agregan cada uno de los elementos a otro elemento contenedor
        li.appendChild(p);
        li.appendChild(dateSpan);
        li.appendChild(addDeleteBtn());//Aqui se le agrega una funcion al elemento li
        ul.appendChild(li);

        input.value = "";
        empty.style.display = "none";
      } //Si text no esta vacio se ejecuta todo lo que sucede dentro de la condicional, se crean elementos como 'li', 'p' y 'span' siendo estos agregados al elemento p
    });

    function addDeleteBtn() {
      const deleteBtn = document.createElement("button");

      deleteBtn.textContent = "X";
      deleteBtn.className = "btn-delete";

      deleteBtn.addEventListener("click", (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll("li");

        if (items.length === 0) {
          empty.style.display = "block";
        }
      });

      return deleteBtn;
    }
