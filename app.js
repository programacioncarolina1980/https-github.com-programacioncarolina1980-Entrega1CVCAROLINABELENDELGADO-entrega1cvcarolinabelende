//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto}
     menu.style.display = "block";
    menu_visible = true;
}
    else{
        menu.style.display = "none";
        menu_visible= false;
    }
}
//ocultar el menu una vez que se selecciona una opción
let links = document.querySelectorAll("nav a");
for(var x =0; x <links.length;x++){
    links[x].onclick =function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}
//barras identificadas por id
function crearBarra(id_barra) {
    for (i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className ="e";
        id_barra.appendChild(div);
    }
 }
  //Selecciono todas las barras generales para manipular luego
  let html = document.getElementById("html");
  crearBarra(html);
  let javascript = document.getElementById("javascript");
  crearBarra (javascript);
  let wordpress =document.getElementById("Wordpress"); 
  crearBarra (wordpress);
  let aplicaciones_android =document.getElementById("aplicaciones_android"); 
  crearBarra (aplicaciones_android);
  let phyton =document.getElementById("phyton"); 
  crearBarra (phyton);
  let msql =document.getElementById("msql"); 
  crearBarra (msql);
  //guardar las barritas que se van pintando
  //para eso utuilizo un arreglo, cada posicion pertenece a un elemento
  // comienzan en -1 porque no tiene ninguna pintada al inicializarse
  let contadores =[-1,-1,-1,-1,-1,-1];
  //Esta variable la voy a utilizar de bandera para saber si ya se ehjecuto la animacion
  let entro = false;
  //funcion que aplica las animaciones de las habilidades
  function efectoHabilidades() {
    var habilidades = document.getElementById("habilidades");
    var distancia_skills= window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function name() {
            pintarBarra(html, 16, 0, intervalHtml);
            
        },100);
        const intervalJavascript = setInterval(function name() {
            pintarBarra(javascript, 11, 0, intervalJavascript);
            
        },100);
    }
    
  }
  //llenado de barra con una cierta cantidad
  function pintarBarra(id_barra, cantidad, indice, interval){
     contadores[indice]++;
     x =contadore(indice);
     if(x < cantidad){
        let elementos = id_barra.getBoundingClientRect("e");
        elementos [x].style.backgroundColor = "#940253";
     }else{
        clearInterval(interval)
     }
     }
    
  //detecta el scrolling del mouse para aplicar la animacion de la barra
  windows.onscroll = function () {
    efectoHabilidades();
    }

//verificador de envio de correo
function Verificar() {

    if (document.getElementById('email_titular').value == "") {
        document.getElementById("estado").innerHTML = colorTexto = "El campo E-Mail es obligatorio".fontcolor("red");
    }
    else {
        if (document.getElementById('nombre').value == "") {
            document.getElementById("estado").innerHTML = colorTexto = "El campo nombre es obligatorio".fontcolor("red");
        }
        else {
            if (document.getElementById('mensaje').value == "") {
                document.getElementById("estado").innerHTML = colorTexto = "El campo mensaje es obligatorio".fontcolor("red");
            }

            else {
                document.getElementById("estado").innerHTML = colorTexto = "Mensaje Enviado.!".fontcolor("green");
            }
        }

    }






}
