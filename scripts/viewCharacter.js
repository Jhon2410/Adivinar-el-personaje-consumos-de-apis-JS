let MostrarPersonajes = document.querySelector(".btn-character");
let bola = document.querySelector(".bola")
let sliderPersonajes = document.querySelector("#sliderPersonnajes");
let nombrePersonaje = document.querySelector(".nombrePersonaje");
let imgCharacter = document.querySelector(".imgCharacter");
let atras = document.querySelector(".atras");
let siguiente = document.querySelector(".siguiente");
let i = 0

function obtenerPersonaje() {

    fetch('../../scripts/json/objectoDbz.json')
        .then(response => response.json())
        .then(function(data) {



            let Npersonajes = i;
            let persoData = data.results[Npersonajes]
            imgCharacter.innerHTML = ' <img src="../../' + persoData.img + '" alt="' + persoData.name + '" id="imagenes">'
            nombrePersonaje.innerHTML = persoData.name
            setTimeout(() => { window.location.href = "#sliderPersonajes" }, 100)




            /*

            let imagenes = document.querySelector(".r");
            let Image = document.createElement('img')
            Image.classList.add("imagen")

            Image.srcset = "../../" + persoData.img
            Image.alt = persoData.name;
            i++
            if (i == 1) {
                imagenes.removeChild(bola)

            }

            imagenes.append(Image);
            */








        })
}


function avanzar() {
    i += 1
    obtenerPersonaje()

}

function retroceder() {
    if (i <= 0) {
        alert("no se puede retroceder mas")

    } else {
        i -= 1
        obtenerPersonaje()

    }


}
MostrarPersonajes.addEventListener("click", () => {
    atras.classList.add("fade");
    siguiente.classList.add("fade");
    atras.innerHTML = "atras";
    siguiente.innerHTML = "siguiente";


    obtenerPersonaje()



})