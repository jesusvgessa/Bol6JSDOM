//Primero creo el menu 
var menu = document.createElement("ul");

//Creo la primera opcion del menu y le añado el texto
var li1 = document.createElement("li");
li1.innerHTML = "Opcion 1";

//Creo dentro el submenu de la primera opcion
var submenu1 = document.createElement("ul");

//Creo la primera opcion del submenu y le añado el texto
var subli11 = document.createElement("li");
subli11.innerHTML = "Subopcion 1.1";

//Creo la segunda opcion del submenu y le añado el texto
var subli12 = document.createElement("li");
subli12.innerHTML = "Subopcion 1.2";

//Añado al nodo del primer submenu las dos opciones. Y despues a la opcion 1 del menu
submenu1.appendChild(subli11);
submenu1.appendChild(subli12);
li1.appendChild(submenu1);

//Creo la segunda opcion del menu y le añado el texto
var li2 = document.createElement("li");
li2.innerHTML = "Opcion 2";

//Creo dentro el submenu de la segunda opcion 
var submenu2 = document.createElement("ul");

//Creo la primera opcion del submenu y le añado el texto
var subli21 = document.createElement("li");
subli21.innerHTML = "Subopcion 2.1";

//Creo la segunda opcion del submenu y le añado el texto
var subli22 = document.createElement("li");
subli22.innerHTML = "Subopcion 2.2";

//Añado al nodo del segundo submenu las dos opciones. Y despues a la opcion 2 del menu
submenu2.appendChild(subli21);
submenu2.appendChild(subli22);
li2.appendChild(submenu2);

//Finalmente lo añado todo al menu, y despues al body
menu.appendChild(li1);
menu.appendChild(li2);
document.body.appendChild(menu);

//Teniendolo todo, ya le añado el display none a los submenu,
//y los eventos onclick para mostrarlos
submenu1.style.display = "none";
submenu2.style.display = "none";

li1.style.cursor = "pointer";
li2.style.cursor = "pointer";
li1.addEventListener("click", mostrar);
li2.addEventListener("click", mostrar);

function mostrar() {
    this.firstElementChild.style.display = "block";
}