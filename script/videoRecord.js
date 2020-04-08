//************************************** eventos *************************************************************//
//Evento boton Comenzar grabacion
let letrero =  document.getElementsByClassName("mainCrearGif")[0];
let mainVideo = document.getElementsByClassName("mainVideo")[0];
let botonComenzar = document.getElementById("botonComenzar")
botonComenzar.addEventListener("click",()=>{
    letrero.style.cssText = 'display:none;';
    mainVideo.style.cssText = 'display:enable;';

})
//Evento boton Cancelar grabacion
let panelCrearGift = document.getElementsByClassName("panelCrearGift")[0];
let botonCancelar = document.getElementById("botonCancelar");
botonCancelar.addEventListener("click",()=>{
panelCrearGift.style.cssText = 'display:none;';

})
//
//**************************************Funciones*************************************************************//
//Realizar inicio de video
function visualizacionVid() { 

    navigator.mediaDevices.getUserMedia({
    
      audio: false,
      video: {
          facingMode: "user",
          width: { min: 640, ideal: 1280, max: 1920 },
          height: { min: 480, ideal: 720, max: 1080 }
      }
    
    })
    
    .then(function(stream) {
    
    video.srcObject = stream;
    
    video.play()
    
    })
  }