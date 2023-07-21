

const animado= document.querySelectorAll(".animado");

function mostrarScrollInterfaces(){
    let scrollTop = document.documentElement.scrollTop;

    for( var i=0; i<animado.length; i++){
        let alturaAnimado= animado[i].offsetTop;
        if(alturaAnimado - 400 < scrollTop){
            animado[i].style.opacity=1;
            animado[i].classList.add("mostrarArriba")
        }
    }
}


window.addEventListener ("scroll",mostrarScrollInterfaces);


//CARRUSEL
//Selecciono las dos clases del HTML con las que voy a crear la interacción
// (por un lado los puntos y por otro lado el div que se va a ir moviendo conforme
// hagamos "click " en los puntos)


const carruselGrande = document. querySelector(".carrusel-grande")
const carruselPunto = document.querySelectorAll(".carrusel-punto")

//al hacer CLIK
 // COgemos la posición del punto
 // le ponemos un transform translateX al div grande
 //quitamos la clase activo a todos los puntos
 //añadimos la clase activo al punto que se le hace CLICK

 carruselPunto.forEach (( cadacarruselPunto , i ) => {
    carruselPunto[i].addEventListener(`click`, ()=>{
        let posicion = i
        let operacion = posicion *-25


        carruselGrande.style.transform = `translateX(${operacion}%)`

        carruselPunto.forEach ((cadaCarruselPunto , i )=>{
            carruselPunto[i].classList.remove("activo")
        })

        carruselPunto[i].classList.add("activo")




    })
 })
