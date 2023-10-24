// Variables globales

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


// Asignacion de variables cuando cargue la pantalla
function incializarVariables(){ 
    rockButton = document.getElementById("piedra-jug")
    paperButton = document.getElementById("papel-jug")
    sccisorsButton = document.getElementById("tijera-jug")
    lizardButton = document.getElementById("lagarto-jug")
    spockButton = document.getElementById("spock-jug")
    reiniciar = document.getElementById("reinicio")

    nombreJugador = document.getElementById('nombre-jugador-inicio');
    botonIniciar = document.getElementById('button')
    inputBox = document.getElementById('input')

    
    botonIniciar = document.getElementById('button')
    inputBox.focus()

    console.log("----------------------------------")
    console.log("BIENVENIDO. ¡¡VAMOS A JUGAR!!")
    console.log("----------------------------------")
}

    // Iniciar el juego.
    function iniciarPartida() {

        //Inicio del juego cuando el jugador escriba su nombre y haga click en el boton.
        botonIniciar.addEventListener('click', function () {
  
            // Obtenemos el valor ingresado en el input
            let nombreIngresado = document.getElementById('input').value;
            // Actualizamos su contenido
            nombreJugador.textContent = nombreIngresado;

            if (nombreIngresado == "") {
                alert("Ingrese nombre para empezar a jugar")
                nombreJugador.textContent = "Jugador";
                inputBox.focus();

            } else {
                alert("¡¡Buena suerte " + nombreIngresado + "!! 🍀")
                jugar();
                reiniciarPartida();
            }
            
        });
    }
    

    // Jugar. Cada vez que el jugador pinche sobre su eleccion, esta se guarda en la variable playerOption.
    //Llamamos a opcionOrdenador() y a checkOptions() que le pasamos la eleccion de jugador y de ordenador.
    function jugar() {
            rockButton.addEventListener("click", () => {
            console.log("El jugador eligió: rock");
            playerOption = rockButton;
            opcionOrdenador();
            checkOptions(playerOption, computerOption)
            
        });

            paperButton.addEventListener("click", () => {
            console.log("El jugador eligió: paper");
            playerOption = paperButton;
            opcionOrdenador();
            checkOptions(playerOption, computerOption)
            
        });

            sccisorsButton.addEventListener("click", () => {
            console.log("El jugador eligió: scissors");
            playerOption = sccisorsButton;
            opcionOrdenador();
            checkOptions(playerOption, computerOption)
            
        });

            lizardButton.addEventListener("click", () => {
            console.log("El jugador eligió: lizard");
            playerOption = lizardButton;
            opcionOrdenador();
            checkOptions(playerOption, computerOption)
            
        });

            spockButton.addEventListener("click", () => {
            console.log("El jugador eligió: spock");
            playerOption = spockButton;
            opcionOrdenador();
            checkOptions(playerOption, computerOption)
            
        });
    }


    // computerOption es = a una eleccion aleatoria * 5. 
    // Porque es entre 0 (inclusive) y 5 (exclusivo)
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

    // Comprobamos si el jugador ganó la partida o si lo hace el ordenador.
    // Para ello le pasamos la eleccion de jugador y la eleccion de ordenador.
    // Esta funcion compara los resultados de cada variable.
    // Cuando ha hecho la comparacion, si el jugador gana la ronda entonces la variable rondasGanadasJugador++
    // Si lo hace el ordenador la variable rondasGanadasOrdenador++
    // Si es empate solo muestra un mensaje de empate.
    // Al final comprobamos que si alguna de las variables es igual a 3, se muestra un mensaje de ganador.
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

        
            if (rondasGanadasJugador === 3) {
                console.log("¡El jugador ha ganado la partida!");
                alert("GANASTE ENHORABUENA 🥳🥳🥳")
                nombreJugador.textContent = "Jugador";
                inputBox.value = "";
                rondasGanadasJugador = 0
                rondasGanadasOrdenador = 0
                console.clear()
            } 
            if (rondasGanadasOrdenador === 3){
                console.log("¡El ordenador ha ganado la partida!");
                alert("FIN DE LA PARTIDA, MAS SUERTE LA PROXIMA VEZ 😭😭😭")
                nombreJugador.textContent = "Jugador";
                inputBox.value = "";
                rondasGanadasJugador = 0
                rondasGanadasOrdenador = 0
                console.clear()
            }


        

    }

    // Funcion para reiniciar la partida.
    // Algunas veces da un pequeño fallo ya que repite el alert().
    function reiniciarPartida() {
        reiniciar.addEventListener("click", () => {
        
            nombreJugador.textContent = "Jugador";
            inputBox.value = "";
            rondasGanadasJugador = 0
            rondasGanadasOrdenador = 0

            console.clear()

            alert("Reiniciando... ¡Buena suerte de nuevo!")

        })


    }


    //LLamadas a la funcion iniciarVariables() e iniciarPartida() cuando cargue la pagina
    
    window.addEventListener("load", function () {  
        incializarVariables()
        iniciarPartida()
    })