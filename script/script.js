const apiKey = 'M3pHPCucA0Juey10cWpWR1lRfkhJFfzi';
const busquedaEndPoint = 'http://api.giphy.com/v1/gifs/search?api_key='
const tendenciasEndPoint ="http://api.giphy.com/v1/gifs/trending?api_key=";

//************************************** eventos *************************************************************//
//eventos de sugerencias
let psug1 = document.getElementById('psug1');
psug1.addEventListener("click",()=>{
  buscarGif("kitty");
  titulo.textContent = "kitty"+" (resultados)";
});
let psug2 = document.getElementById('psug2');
psug2.addEventListener("click",()=>{
  buscarGif("cat");
  titulo.textContent = "cat"+" (resultados)";
});
let psug3 = document.getElementById('psug3');
psug3.addEventListener("click",()=>{
  buscarGif("dogue");
  titulo.textContent = "dogue"+" (resultados)";
});
//eventos de boton de tarjetas sugerencias
let sug1 = document.getElementById('sug1');
sug1.addEventListener("click",()=>{
  buscarGif(sug1.value);
});
let sug2 = document.getElementById('sug2');
sug2.addEventListener("click",()=>{
  buscarGif(sug2.value);
});
let sug3 = document.getElementById('sug3');
sug3.addEventListener("click",()=>{
  buscarGif(sug3.value);
});
let sug4 = document.getElementById('sug4');
sug4.addEventListener("click",()=>{
  buscarGif(sug4.value);
});
//realizar busqueda con  botonBuscar
let busqText = document.getElementById("barraBuscar");
let busqForm = document.getElementById('buscarForm');
let sugerencias = document.getElementsByClassName("panelSugerencias")[0]; 
let titulo = document.getElementById("tituloBuq");
busqForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const q = busqText.value
    let resultHtml='';
    
    sugerencias.innerHTML = resultHtml;
    //botonBuscar.style.cssText = "background:#E6E6E6;";
    if(q==""){
      botonBuscar.disabled=true;
    }else{
      buscarGif(q);
    }
});
//evento barra de busqueda, mostrar barra de sugerencias
let panelsugeBusq = document.getElementById('panelsugeBusq');
barraBuscar.addEventListener("input",()=>{
  if(busqText.value==""){
    panelsugeBusq.style.cssText = 'display:none;';
    botonBuscar.disabled=true;
  }else{
    panelsugeBusq.style.cssText = 'display:enable;';
    botonBuscar.disabled=false;
    
  }
});
//evento de mostrar temas
let botonTemas = document.getElementById("botonTemas");
botonTemas.addEventListener("click",()=>{
  let menuTema = document.getElementById('menuTema');
  menuTema.style.cssText='display:enable;';
});
//evento tema day
let sailorDay = document.getElementById("sailorDay");
sailorDay.addEventListener('click',()=>{
  menuTema.style.cssText='display:none;';
  let tema = document.getElementById('tema');
  tema.href= './style/style.css'
  let logoPrincipal = document.getElementById('logoPrincipal');
  logoPrincipal.src = './image/assets/gifOF_logo.png';;
});
//evento tema nigth
let sailorNight = document.getElementById("sailorNight");
sailorNight.addEventListener('click',()=>{
  menuTema.style.cssText='display:none;';
  let tema = document.getElementById('tema');
  tema.href= './style/style_night.css'
  let logoPrincipal = document.getElementById('logoPrincipal');
  logoPrincipal.src = './image/assets/gifOF_logo_dark.png';
});
//**************************************Funciones*************************************************************//

//funcion mostrar resultados de busqueda
function mostrarBusqueda(datos){
  const resultados = document.getElementById('resultados'); 
  let resultHtml='';
  resultados.innerHTML = resultHtml; //vacia las etiquetas dentro resultados
  datos.forEach(element => {
    let conteGif = document.createElement("div");
            conteGif.setAttribute("class", "conteGif");
    let gif = document.createElement('img');
    let foot = document.createElement('div');
      gif.setAttribute("src", element.images.downsized.url);
      foot.setAttribute("class", "foot");
      foot.innerHTML+=dividirTitulo(element.title);
      conteGif.append(gif);
      conteGif.append(foot);
                resultados.appendChild(conteGif) ;
  }); 
}

// parsear el titulo para hover
function dividirTitulo(titulo){
  let frases = titulo.split(" ");
  let final = frases.indexOf('GIF');
  res = "";
  if (final==0){
    for (let index = final+1; index < frases.length; index++) {
       res = res +'#'+frases[index] +" ";
      
    }
  }else{
    for (let index = 0; index < final; index++) {
      res = res +'#'+frases[index] +" ";
      
    }
  }
  
  return res;
}
/*funcion buscar gift de la barra de busqueda
    q = busqueda ingresada en baner
*/
function buscarGif(q){
  const busq = fetch(busquedaEndPoint + apiKey + '&q='+q)
        .then((res) => {
            //console.log(res.json());
            return res.json();
        })
        .then(data=>{
          
          let datos = data.data;
          console.log(data);
          mostrarBusqueda(datos);
          
          return data;
        })
        .catch(error => {
            return error;
        });
  return busq;
}
//funcion buscar las tendencias de gift
function tendenciasGift(){
  const tend = fetch(tendenciasEndPoint + apiKey)
        .then((res) => {
            
            return res.json();
        })
        .then(data=>{
          
          let datos = data.data;
          mostrarBusqueda(datos);
          
          return data;
        })
        .catch(error => {
            return error;
        });
  return tend;
}

let giftArray = [];
let contador = 0;
//funcion cargar sugerencia
function preCargaSugerencia(gif,busqueda){
  
  
    let img = document.createElement("img");
    img.setAttribute("class","gifSug")
    //console.log("--"+giftArray[i]);
    img.setAttribute("src",gif);
    let sugerencia = document.getElementsByClassName('sugerencia')[contador];
    let boton = sugerencia.getElementsByClassName('botonAzul')[0];
    let menu = sugerencia.getElementsByClassName('menu')[0];
    let titulo = menu.getElementsByClassName('tituloSug')[0];
    titulo.textContent = "#"+busqueda;
  
    boton.setAttribute('value',busqueda);
    console.log("hijos es "+sugerencia.childNodes.length)
    if (sugerencia.childNodes.length == 5){
      sugerencia.insertBefore(img,boton);
      contador++;
    }
    
    
  
}
//funcion busqueda 1 gif
 function  buscarSug(busqueda){
  const busq = fetch(busquedaEndPoint + apiKey + '&q='+busqueda+'&limit='+1)
        .then((res) => {
            return res.json();
        })
        .then(data=>{
          let dato = data.data[0].images.downsized.url;
          //giftArray[index] = datos;
          //console.log(giftArray[index]);
          preCargaSugerencia(dato,busqueda);
          
          return data;
        })
        .catch(error => {
            return error;
        });
  return busq;
}
//guardar gif
function guardarSug(){
  let giftencidias = ["hola","perro","gato","tren"]
  for(let i = 0;i<4;i++){
     buscarSug(giftencidias[i]);
  }
}
//funcion carga inicial
function inicio(){
  botonBuscar.disabled=true;
  tendenciasGift();
}

//tendenciasGift();
window.onload = () => {
  guardarSug();
  inicio();
}