//var
let s1 = document.querySelector(".s1");
let s2 = document.querySelector(".s2");
let goR = document.querySelector(".goR");
let gameover = document.querySelector(".gameover");
let ss1 = document.querySelector(".ss1");
let ss2 = document.querySelector(".ss2");
let nombrePokemon = document.querySelector(".nombrePokemon");
let resultados = document.querySelector(".resultados");
let points = document.querySelector(".puntos");
let dataP = document.querySelector(".ingresarData");
let btnA = document.querySelector(".btn");
let Nv = document.querySelector(".Nveces");
let btnC = document.querySelector(".btn-continuar");
let nave = document.querySelector(".nave");
let nombreJugador = document.querySelector(".nombre");
let nombreJ = document.querySelector(".nombreF");
let tiempo = document.querySelector(".time");
let Lpoke = [];
let noOP1;
let noOP2;
let Nveces = 1;
let puntos = 100;
let nombrePlayer;
let time;




//funtions
function GameEnd() {
    resultados.removeAttribute("hidden");
    gameover.removeAttribute("hidden");
    ss1.innerHTML = "";
    ss2.innerHTML = "";
    resultados.innerHTML = "";
    tiempo.innerHTML = 0 + "s";

}

function aleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a));
}

function myFunction() {
    Nv.innerHTML = Nveces += 1
    Lpoke = [];
    ss1.innerHTML = "";
    ss2.innerHTML = "";
    resultados.innerHTML = ""

    obtenerPersonaje(1)
    obtenerPersonaje(2)
        // tiempoTotal()














}


function runTime() {
    time -= 1;
    tiempo.innerHTML = time;
    if (time <= 0) {
        GameEnd()
    }
}

function tiempoTotal() {
    time = 30;
    setInterval("runTime()", 1000)
}







//events btn
btnC.addEventListener("click", () => location.reload())
btnA.addEventListener("click", () => {
    dataP.setAttribute("hidden", "")
    nave.removeAttribute("hidden");
    if (nombreJugador.value == "") {
        nombrePlayer = "jhon"

    } else {
        nombrePlayer = nombreJugador.value;

    }

    nombreJ.innerHTML = nombrePlayer;





});




s1.addEventListener("click", () => {


    if (noOP1 == nombreFinal) {
        puntos += 25;
        resultados.innerHTML = "<div>" + noOP1 + "</div><div>" + noOP2 + "</div><div class='a green'>Ganaste!</div>";

    } else {
        puntos -= 50;
        resultados.innerHTML = "<div>" + noOP1 + "</div><div>" + noOP2 + "</div><div class='a green'>Perdiste!</div>";
    }

    points.innerHTML = puntos;
    if (puntos <= 0) {
        GameEnd()


    } else {

        setTimeout(myFunction, 1000);


    }












})
s2.addEventListener("click", () => {

    if (noOP2 == nombreFinal) {
        puntos += 25;
        resultados.innerHTML = "<div>" + noOP1 + "</div><div>" + noOP2 + "</div><div class='a green'>Ganaste!</div>";

    } else {
        puntos -= 50;
        resultados.innerHTML = "<div>" + noOP1 + "</div><div>" + noOP2 + "</div><div class='a green'>Perdiste!</div>";
    }
    points.innerHTML = puntos
    if (puntos <= 0) {
        GameEnd()


    } else {

        setTimeout(myFunction, 1000);


    }











})


//api conection

function obtenerPersonaje(contadorMaximo) {

    fetch('../../../scripts/json/objectoDbz.json')
        .then(response => response.json())
        .then(function(data) {

            let Npersonajes = aleatorio(0, data.results.length - 1)
            let persoData = data.results[Npersonajes]
            console.log(data.results[Npersonajes])
            let imagenes = document.querySelector(".ss" + contadorMaximo);
            let Image = document.createElement('img')
            Image.classList.add("imagen")

            if (contadorMaximo === 1) {
                noOP1 = persoData.name;


            } else {
                noOP2 = persoData.name;

            }
            Lpoke[contadorMaximo - 1] = persoData.name


            Image.srcset = "../../../" + persoData.img
            Image.alt = persoData.name;
            imagenes.append(Image);



            function aleatorio(a, b) {
                return Math.round(Math.random() * (b - a) + parseInt(a));
            }


            numeroRandom = aleatorio(0, 1)
            console.log(numeroRandom)

            nombreFinal = Lpoke[numeroRandom]
            nombrePokemon.innerHTML = nombreFinal;




        })
}

obtenerPersonaje(1)
obtenerPersonaje(2)