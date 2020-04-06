//************************************** eventos *************************************************************//
//Evento boton Comenzar grabacion
let letrero =  document.getElementsByClassName("mainCrearGif")[0];
let botonComenzar = document.getElementById("botonComenzar")
botonComenzar.addEventListener("click",()=>{
    letrero.style.cssText = 'display:none;';
})

//