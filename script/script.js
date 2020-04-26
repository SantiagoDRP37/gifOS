const apiKey = 'M3pHPCucA0Juey10cWpWR1lRfkhJFfzi';
const busquedaEndPoint = 'http://api.giphy.com/v1/gifs/search?api_key='
const tendenciasEndPoint ="http://api.giphy.com/v1/gifs/trending?api_key=";

//************************************** eventos *************************************************************//
//realizar busqueda con  botonBuscar
let busqText = document.getElementById("barraBuscar");
let busqForm = document.getElementById('buscarForm');
let sugerencias = document.getElementsByClassName("panelSugerencias")[0]; 
let titulo = document.getElementById("tituloBuq");
busqForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const q = busqText.value
    let resultHtml='';
    titulo.textContent = q+" (resultados)";
    sugerencias.innerHTML = resultHtml;
    buscarGif(q);

});
//evento de mostrar temas
let botonTemas = document.getElementById("botonTemas");
botonTemas.addEventListener('clic',()=>{
  let menuTema = document.getElementById('menuTema');
  menuTema.style.cssText('display:none;');
})
//**************************************Funciones*************************************************************//

//funcion mostrar resultados de busqueda
function mostrarBusqueda(datos){
  const resultados = document.getElementById('resultados'); 
  let resultHtml='';
  resultados.innerHTML = resultHtml; //vacia las etiquetas dentro resultados
  datos.forEach(element => {
    let conteGif = document.createElement("div");
            conteGif.setAttribute("class", "conteGif");
            conteGif.innerHTML +=
                ' <img src =' + element.images.downsized.url + '>' +
                ' <div class = "foot">' +
                '  <p>' + element.title + '</p>' +
                ' </div>';
                resultados.appendChild(conteGif) ;
  }); 
}
//Funcion para mostrar los gif en tendencias
function mostrarTendencias(datos){
  const resultados = document.getElementById('resultados'); 
  let resultHtml='';
  resultados.innerHTML = resultHtml; //vacia las etiquetas dentro resultados
  datos.forEach(element => {
    let conteGif = document.createElement("div");
            conteGif.setAttribute("class", "conteGif");
            conteGif.innerHTML +=
                ' <img src =' + element.images.downsized.url + '>' +
                ' <div class = "foot">' +
                '  <p>' + element.title + '</p>' +
                ' </div>';
                resultados.appendChild(conteGif) ;
  }); 
}
/*funcion buscar gift de la barra de busqueda
    q = busqueda ingresada en baner
*/
function buscarGif(q){
  const busq = fetch(busquedaEndPoint + apiKey + '&q='+ q)
        .then((res) => {
            //console.log(res.json());
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
tendenciasGift();
window.onload = () => {
  
  tendenciasGift();
}