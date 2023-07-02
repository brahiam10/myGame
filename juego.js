//estas variables contienen elvalor inicial de la vida de ambos jugadores
var vidaEnemigo = 100;
var vidaYo = 100;
var mensaje;
var jugadoractual;
console.log(vidaEnemigo);
console.log(vidaYo);
//var mensajeContainer = document.getElementById("mensajeContainer");


//esta funcion sirve para verificar el total de la vida del enemigo
 function totalVidaEnemigo(vidaEnemigo) {
    const barraEnemigo = document.getElementById("barraEnemigo");
    const porcentaje = vidaEnemigo+"%";
    console.log(porcentaje);
    barraEnemigo.style.width = porcentaje;
    barraEnemigo.querySelector(".vida-porcentaje").textContent = porcentaje;
  }

//esta funcion sirve para verificar el total de la vida del jugador
function totalVidaYo(vidaYo) {
    const barraJugador = document.getElementById("barraJugador");
    const porcentaje = vidaYo+"%";
    console.log(porcentaje);
    barraJugador.style.width = porcentaje;
    barraJugador.querySelector(".vida-porcentaje").textContent = porcentaje;
  }

//esta funcion sirve para mostrar el mensaje del tipo de ataque que utilizas, que tipo de defensa utiliza tu enemigo y que cantidad de vida le resta a tu enemigo
function muestraVidaEnemigo(nombre,accion,defensa,pot){
    console.log(vidaEnemigo);
    if(vidaEnemigo<=0){
        mensaje="gano";
        cambiarTurno(mensaje);
    }else{
        mensaje="Tu has "+accion+" con "+nombre+"<br>"+" Tu enemigo se ha defendido con "+defensa+"<br>"+" La vida de tu enemigo se le ha restado "+pot;
        document.getElementById('mensaje').innerHTML=mensaje;
        console.log(mensaje);
        cambiarTurno(1);
        // appendmessage(mensaje);
    }
    
}

//esta funcion ejecuta los valores de ataque del jugador, genera una defensa aleatoria a la maquina y retorna valores a la funcion muestraVidaEnemigo()
function ataqueEnemigo (potencia,nombreAtaque) {
//este es un arreglo que almacena las posibles defefensas
const escudoDefensor1 = [
        'pocion verde',
        'pocion azul',
        'pocion roja'
    ];
    //esta es una variable que me genera un dato aleatorio para el arreglo de escudoDefensor1
    const defensaMaq = escudoDefensor1[Math.floor(Math.random()*escudoDefensor1.length)];
     //en los siguientes tres bloques se validan los datos y se ejecuta una orden segun los datos y retorna la funcion muestraVidaEnemigo()
    if(defensaMaq==="pocion verde" && nombreAtaque==="Ataque de tierra"){
        pot = potencia-potencia;
         vidaEnemigo -= pot;
         totalVidaEnemigo(vidaEnemigo);
        muestraVidaEnemigo(nombreAtaque,"atacado","pocion verde",pot); 
    }else if (defensaMaq==="pocion verde" && nombreAtaque==="Ataque de agua"){
        pot = potencia-5;
         vidaEnemigo -= pot;
         totalVidaEnemigo(vidaEnemigo);
        muestraVidaEnemigo(nombreAtaque,"atacado","pocion verde",pot); 
    }else if (defensaMaq==="pocion verde" && nombreAtaque==="Ataque de fuego"){
        pot = potencia-2;
         vidaEnemigo -= pot;
         totalVidaEnemigo(vidaEnemigo);
        muestraVidaEnemigo(nombreAtaque,"atacado","pocion verde",pot); 
    }

    if(defensaMaq==="pocion azul" && nombreAtaque==="Ataque de agua"){
        pot = potencia-potencia;
        vidaEnemigo -= pot;
        totalVidaEnemigo(vidaEnemigo);
       muestraVidaEnemigo(nombreAtaque,"atacado","pocion azul",pot); 
    }else if(defensaMaq==="pocion azul" && nombreAtaque==="Ataque de tierra"){
        pot = potencia-5;
        vidaEnemigo -= pot;
        totalVidaEnemigo(vidaEnemigo);
       muestraVidaEnemigo(nombreAtaque,"atacado","pocion azul",pot); 
    }else if (defensaMaq==="pocion azul" && nombreAtaque==="Ataque de fuego"){
        pot = potencia-2;
        vidaEnemigo -= pot;
        totalVidaEnemigo(vidaEnemigo);
       muestraVidaEnemigo(nombreAtaque,"atacado","pocion azul",pot); 
    }

    if(defensaMaq==="pocion roja" && nombreAtaque==="Ataque de fuego"){
        pot = potencia-potencia;
         vidaEnemigo -= pot;
         totalVidaEnemigo(vidaEnemigo);
        muestraVidaEnemigo(nombreAtaque,"atacado","pocion roja",pot); 
    }else if(defensaMaq==="pocion roja" && nombreAtaque==="Ataque de agua"){
        pot = potencia-5;
         vidaEnemigo -= pot;
         totalVidaEnemigo(vidaEnemigo);
        muestraVidaEnemigo(nombreAtaque,"atacado","pocion roja",pot); 
    }else if (defensaMaq==="pocion roja" && nombreAtaque==="Ataque de tierra"){
        pot = potencia-2;
         vidaEnemigo -= pot;
         totalVidaEnemigo(vidaEnemigo);
        muestraVidaEnemigo(nombreAtaque,"atacado","pocion roja",pot); 
      
    } 
     
}
 
//esta funcion sirve para mostrar el mensaje del tipo de ataque que utilizas, que tipo de defensa utiliza tu enemigo y que cantidad de vida le resta a tu enemigo
function muestraVidaYo(nombre,accion,defensa,pot){

    if(vidaYo<=0){
        mensaje="perdio";
        cambiarTurno(mensaje);
    }else{
        mensaje="Te has "+accion+" con "+nombre+"<br>"+" tu enemigo te ha atacado con "+defensa+"<br>"+" A la vida de tu enemigo se le ha restado "+pot;
        document.getElementById('mensaje').innerHTML=mensaje;
        console.log(mensaje);
        cambiarTurno(2);
    }
}
//esta funcion ejecuta los valores de ataque del jugador, genera una defensa aleatoria a la maquina y retorna valores a la funcion muestraVidaYo()
function escudoDefensor(potencia,nombrePosion){
    const listaDeAtaque = [
        'Ataque de fuego',
        'Ataque de agua',
        'Ataque de tierra'
    ];
    //este es un arreglo que almacena los posibles ataques
    const miAtaque = listaDeAtaque[Math.floor(Math.random()*listaDeAtaque.length)];
    //en los siguientes tres bloques se validan los datos y se ejecuta una orden segun los datos y retorna la funcion muestraVidaYo()
    if(miAtaque==="Ataque de tierra" && nombrePosion==="pocion verde"){
        pot = potencia-potencia;
        vidaYo -= pot;
        totalVidaYo(vidaYo)
         muestraVidaYo(nombrePosion,"defendido","Ataque de tierra",pot); 
    }else if (miAtaque==="Ataque de agua" &&  nombrePosion==="pocion verde"){
        pot = potencia-5;
        vidaYo -= pot;
        totalVidaYo(vidaYo)
         muestraVidaYo(nombrePosion,"defendido","Ataque de agua",pot); 
    }else if (miAtaque==="Ataque de fuego" && nombrePosion==="pocion verde"){
        pot = potencia-2;
        vidaYo -= pot;
        totalVidaYo(vidaYo)
         muestraVidaYo(nombrePosion,"defendido","Ataque de fuego",pot); 
    }


    if(miAtaque==="Ataque de agua" && nombrePosion==="pocion azul"){
        pot = potencia-potencia;
        vidaYo -= pot;
        totalVidaYo(vidaYo)
         muestraVidaYo(nombrePosion,"defendido","Ataque de agua",pot); 
    }else if(miAtaque==="Ataque de tierra" && nombrePosion==="pocion azul"){
        pot = potencia-5;
        vidaYo -= pot;
        totalVidaYo(vidaYo)
         muestraVidaYo(nombrePosion,"defendido","Ataque de tierra",pot); 
    }else if (miAtaque==="Ataque de fuego" && nombrePosion==="pocion azul"){
        pot = potencia-2;
        vidaYo -= pot;
        totalVidaYo(vidaYo)
         muestraVidaYo(nombrePosion,"defendido","Ataque de fuego",pot); 
    }

    if(miAtaque==="Ataque de fuego" && nombrePosion==="pocion roja"){
        pot = potencia-potencia;
        vidaYo -= pot;
        totalVidaYo(vidaYo)
         muestraVidaYo(nombrePosion,"defendido","Ataque de fuego",pot); 
    }else if(miAtaque==="Ataque de agua" && nombrePosion==="pocion roja"){
        pot = potencia-5;
        vidaYo -= pot;
        totalVidaYo(vidaYo)
         muestraVidaYo(nombrePosion,"defendido","Ataque de agua",pot); 
    }else if (miAtaque==="Ataque de tierra" && nombrePosion==="pocion roja"){
        pot = potencia-2;
        vidaYo -= pot;
        totalVidaYo(vidaYo)
         muestraVidaYo(nombrePosion,"defendido","Ataque de tierra",pot); 
    } 
}

//cambiar turno
function cambiarTurno(jugadoractual){
    var yo = document.getElementById("jugador1");
    var enemigo = document.getElementById("jugador2");
    var menganador = document.getElementById("mensaje-ganador");
    var menperdedor = document.getElementById("mensaje-perdedor");
    var mensaje = document.getElementById("mensaje");
    var barraEnemigo = document.getElementById("barraEnemigo");
    var barraJugador = document.getElementById("barraJugador");

    if(jugadoractual === 1){
        yo.style.display = "none";
        enemigo.style.display = "block";
        jugadoractual = 2;
    }else if(jugadoractual === 2){
        yo.style.display = "block";
        enemigo.style.display = "none";
        jugadoractual = 1;
    }else if(jugadoractual === "gano"){
        yo.style.display = "none";
        enemigo.style.display = "none";
        menperdedor.style.display = "none";
        mensaje.style.display = "none";
        barraEnemigo.style.display = "none";
        barraJugador.style.display = "none";
        menganador.style.display = "block";
        jugadoractual = "perdio";
    }else if(jugadoractual === "perdio"){
        yo.style.display = "none";
        enemigo.style.display = "none";
        menperdedor.style.display = "block";
        mensaje.style.display = "none";
        barraEnemigo.style.display = "none";
        barraJugador.style.display = "none";
        menganador.style.display = "none";
        jugadoractual = "perdio";
    }
    }


