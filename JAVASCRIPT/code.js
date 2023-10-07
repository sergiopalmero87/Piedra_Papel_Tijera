let rockButton = "rock"
let paperButton = "paper"
let sccisorsButton = "sccisors"
let lizardButton = "lizard"
let spockButton = "spock"


let tie = 0
let win = 0
let lost = 0

let nombreJugador
let botonIniciar
let inputBox
let reiniciar

let rondasGanadasJugador = 0
let rondasGanadasOrdenador = 0

let playerOption = null;
let computerOption = null;



window.addEventListener("load", function () {
    rockButton = document.getElementById("piedra-jug")
    paperButton = document.getElementById("papel-jug")
    sccisorsButton = document.getElementById("tijera-jug")
    lizardButton = document.getElementById("lagarto-jug")
    spockButton = document.getElementById("spock-jug")
    reiniciar = document.getElementById("reinicio")

    function iniciarPartida() {
        nombreJugador = document.getElementById('nombre-jugador-inicio');
        botonIniciar = document.getElementById('button')
        inputBox = document.getElementById('input')

        //Inicio del juego cuando el jugador escriba su nombre y haga click en el boton.
        botonIniciar = document.getElementById('button')
        inputBox.focus()

        botonIniciar.addEventListener('click', function () {
            // Obtenemos el valor ingresado en el input
            let nombreIngresado = document.getElementById('input').value;
            // Actualizamos su contenido
            nombreJugador = document.getElementById('nombre-jugador-inicio');
            nombreJugador.textContent = nombreIngresado;

            if (nombreIngresado == "") {
                alert("Ingrese nombre para empezar a jugar")
                nombreJugador.textContent = "Jugador";

            } else {
                alert("¡¡Buena suerte " + nombreIngresado + "!! 🍀")
            }
        });
    }


    function jugar() {
        rockButton.addEventListener("click", () => {
            console.log("El jugador eligió: rock");
            playerOption = rockButton;
            opcionOrdenador(rockButton);
            checkOptions(playerOption, computerOption)
        });

        paperButton.addEventListener("click", () => {
            console.log("El jugador eligió: paper");
            playerOption = paperButton;
            opcionOrdenador(paperButton);
            checkOptions(playerOption, computerOption)
        });

        sccisorsButton.addEventListener("click", () => {
            console.log("El jugador eligió: scissors");
            playerOption = sccisorsButton;
            opcionOrdenador(sccisorsButton);
            checkOptions(playerOption, computerOption)
        });

        lizardButton.addEventListener("click", () => {
            console.log("El jugador eligió: lizard");
            playerOption = lizardButton;
            opcionOrdenador(lizardButton);
            checkOptions(playerOption, computerOption)
        });

        spockButton.addEventListener("click", () => {
            console.log("El jugador eligió: spock");
            playerOption = spockButton;
            opcionOrdenador(spockButton);
            checkOptions(playerOption, computerOption)
        });
    }



    function opcionOrdenador() {

        computerOption = Math.floor(Math.random() * 5)
        switch (computerOption) {

            case 0:
                computerOption = rockButton
                console.log("El ordeandor eligió: rock")
                break;

            case 1:
                computerOption = paperButton
                console.log("El ordeandor eligió: paper")
                break;

            case 2:
                computerOption = sccisorsButton
                console.log("El ordeandor eligió: scissors")
                break;

            case 3:
                computerOption = lizardButton
                console.log("El ordeandor eligió: lizard")
                break;

            case 4:
                computerOption = spockButton
                console.log("El ordeandor eligió: spock")
                break;

        }

    }





    function checkOptions(playerOption, computerOption) {


        if (
            (playerOption === rockButton && (computerOption === sccisorsButton || computerOption === lizardButton)) ||

            (playerOption === paperButton && (computerOption === rockButton || computerOption === spockButton)) ||

            (playerOption === sccisorsButton && (computerOption === paperButton || computerOption === lizardButton)) ||

            (playerOption === lizardButton && (computerOption === spockButton || computerOption === paperButton)) ||

            (playerOption === spockButton && (computerOption === sccisorsButton || computerOption === rockButton))
        ) {

            console.log("¡Ganaste la ronda")
            rondasGanadasJugador++

        }
        else if (playerOption === computerOption) {
            console.log("Ronda empatada")
        }
        else {
            console.log("El ordenador gana la ronda")
            rondasGanadasOrdenador++
        }

        console.log("Rondas ganadas por el Jugador: " + rondasGanadasJugador);
        console.log("Rondas ganadas por el Ordenador: " + rondasGanadasOrdenador);

        if (rondasGanadasJugador === 3 || rondasGanadasOrdenador === 3) {
            if (rondasGanadasJugador === 3) {
                console.log("¡El jugador ha ganado la partida!");
                alert("GANASTE ENHORABUENA 🥳🥳🥳")
                reiniciarPartida()
            } else {
                console.log("¡El ordenador ha ganado la partida!");
                alert("FIN DE LA PARTIDA, MAS SUERTE LA PROXIMA VEZ 😭😭😭")
                reiniciarPartida()
            }


        }

    }

    function reiniciarPartida() {
        reiniciar.addEventListener("click", () => {
            
            rondasGanadasJugador = 0
            rondasGanadasOrdenador = 0
            nombreJugador.textContent = "Jugador"
            
            console.clear()

            alert("Reiniciando... ¡Buena suerte de nuevo!")

        })


    }


    //LLamadas a las funciones
    iniciarPartida()
    jugar()
    reiniciarPartida()

})