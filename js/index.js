
/*index.js
    interacciones:
        -Efecto de scroll en la sección de 'interfaces'al cargar la pagina
        -Carrusel con las diferentes interacciones de la app
    Estructura:
        -constantes
        -variables
        -funciones*/

 //selección de todas las clases "animado"
const animado= document.querySelectorAll(".animado");
 //selección de  la clase "carrusel-grande"
const carruselGrande = document. querySelector(".carrusel-grande")
 //selección de todas las clase "carrusel-punto"
const carruselPunto = document.querySelectorAll(".carrusel-punto")


/*Esta es una función que genera un efecto de scroll en la sección de interfaces
 para realizarla primero seleccionamos la altura del documento desde arriba,
 posteriormente definimos un bucle, en el que se recprra los datos del documento y al
        definir la variable de alturaAnimado (altura desde arriba del documento hasta los elementos con la calse animado)
        le ponemos la condicion de que: cuando esta variable menos un cierto espacio (400) sea menor que la latura del documento
        recorre los elementos de la calse animado y les da OPACIDAD 1 para que se vean
        además para que el efecto se vea suavizado le ADD la clase 'mostrarArriba', previamente definida
        en CSS para que se trasladen los elementos hacia arriba en el eje y.*/

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

/* creamos un evento en el que al hacer scroll en la ventana apareazcan las interfaces en esa sección)*/
window.addEventListener ("scroll",mostrarScrollInterfaces);


//CARRUSEL
//Selecciono las dos clases del HTML con las que voy a crear la interacción
// (por un lado los puntos y por otro lado el div que se va a ir moviendo conforme
// hagamos "click " en los puntos)
//creamos la función para que:
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
