const apiKey = 'M3pHPCucA0Juey10cWpWR1lRfkhJFfzi';
const q = 'gatos';
const path = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}`;
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
//funcion buscar gift de la barra de busqueda
function buscarGif(){
  const busq = fetch(path)
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
window.onload = () => {
  
  buscarGif();
}