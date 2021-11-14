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
let btnC = document.querySelector(".btn-continuar");
let nave = document.querySelector(".nave");
let nombreJugador = document.querySelector(".nombre");
let nombreJ = document.querySelector(".nombreF");
let Lpoke = [];
let noOP1;
let noOP2;
let puntos = 100;
let nombrePlayer;

function aleatorio(a, b) {
    return Math.round(Math.random() * (b - a) + parseInt(a));
}
//----------------------------------------------------------------

function obtenerPokemon(contadorMaximo) {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118')
        .then(response => response.json())
        .then(function(allpokemon) {
            let Npoke = Math.random(1, 100) * 1000
            let pokemon = allpokemon.results[Math.round(Npoke)];
            let url = pokemon.url
            fetch(url)
                .then(response => response.json())
                .then(function(pokeData) {
                    console.log(pokeData)
                    let imagenes = document.querySelector(".ss" + contadorMaximo);
                    let pokeImage = document.createElement('img')
                    pokeImage.classList.add("imagen")

                    if (contadorMaximo === 1) {
                        noOP1 = pokeData.name;


                    } else {
                        noOP2 = pokeData.name;

                    }
                    Lpoke[contadorMaximo - 1] = pokeData.name

                    function testImage(URL) {
                        var tester = new Image();
                        tester.onload = imageFound;
                        tester.onerror = imageNotFound;
                        tester.src = URL;
                    }

                    function imageFound() {
                        pokeImage.srcset = `https://pokeres.bastionbot.org/images/pokemon/${pokeData.id}.png`
                        pokeImage.alt = pokeData.name;
                        imagenes.append(pokeImage);


                        function aleatorio(a, b) {
                            return Math.round(Math.random() * (b - a) + parseInt(a));
                        }
                        for (let i = 0; i <= 20; i++) {
                            console.log(aleatorio(0, 1))

                        }

                        numeroRandom = aleatorio(0, 1)
                        console.log(numeroRandom)

                        nombreFinal = Lpoke[numeroRandom]
                        nombrePokemon.innerHTML = nombreFinal;
                    }

                    function imageNotFound() {
                        obtenerPokemon(contadorMaximo);
                    }

                    testImage(`https://pokeres.bastionbot.org/images/pokemon/${pokeData.id}.png`);







                })

        })
}
obtenerPokemon(1)
obtenerPokemon(2)

//----------------------------------------------------------------

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
        resultados.removeAttribute("hidden");
        gameover.removeAttribute("hidden");


    } else {

        setTimeout(myFunction, 1000);


    }





    function myFunction() {
        ss1.innerHTML = "";
        ss2.innerHTML = "";
        resultados.innerHTML = ""

        obtenerPokemon(1)
        obtenerPokemon(2)


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
        resultados.removeAttribute("hidden");
        gameover.removeAttribute("hidden");


    } else {

        setTimeout(myFunction, 1000);


    }



    function myFunction() {
        ss1.innerHTML = "";
        ss2.innerHTML = "";
        resultados.innerHTML = "";

        obtenerPokemon(1)
        obtenerPokemon(2)


    }







})