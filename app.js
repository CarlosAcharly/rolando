"use strict";

// MENU RESPONSIVE

const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
menu.classList.toggle("show");
});


// SCROLL A PRODUCTOS

function scrollProductos(){
document.getElementById("productos").scrollIntoView({
behavior:"smooth"
});
}


// TESTIMONIOS AUTOMATICOS

const testimonios = document.querySelectorAll(".testimonio");
let index = 0;

function cambiarTestimonio(){

testimonios.forEach(t=>{
t.classList.remove("activo");
});

index++;

if(index >= testimonios.length){
index = 0;
}

testimonios[index].classList.add("activo");

}

setInterval(cambiarTestimonio,4000);


// FORMULARIO

const form = document.getElementById("formContacto");

form.addEventListener("submit", (e)=>{

e.preventDefault();

alert("Mensaje enviado correctamente 🌱");

form.reset();

});