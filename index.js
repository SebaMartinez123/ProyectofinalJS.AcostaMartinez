inicializar();

// Declaramos variables globales, para guardar los datos ingresados //
let nombreJugador = [];
let posicion = [];
let equipo = [];

// Inicializamos los eventos de click en cada botón que se va a utilizar // 
function inicializar() {
    document.querySelector("#btnGuardarDatos").addEventListener("click", guardarDatos);
    document.querySelector("#btnMostrarDatos").addEventListener("click", mostrarDatos);
    document.querySelector("#btnBuscar").addEventListener("click", buscarJugador);
}

// Inicializamos cada function que vamos a utilizar // 

function guardarDatos() {
    const nombreIngresado = document.querySelector("#txtNombre").value;
    const posicionIngresada = document.querySelector("#txtPosicion").value;
    const equipoIngresado = document.querySelector("#txtEquipo").value;

    nombreJugador.push(nombreIngresado);
    posicion.push(posicionIngresada);
    equipo.push(equipoIngresado);
}

// Sección para mostrar los datos ingresados anteriormente // 

function mostrarDatos() {
    let datosGuardados = '<table border="1"><tr><th>Nombre</th><th>Posición</th><th>Equipo-Actual</th></tr>';

    for (let i = 0; i < nombreJugador.length; i++) {
        const nombreActual = nombreJugador[i];
        const posicionActual = posicion[i];
        const equipoActual = equipo[i];

        datosGuardados += `
            <tr>
                <td>${nombreActual}</td>
                <td>${posicionActual}</td>
                <td>${equipoActual}</td>
            </tr>
        `;
    }

    datosGuardados += '</table>';

    document.querySelector("#divMensajes").innerHTML = datosGuardados;
}

// Sección para buscar algún dato ingresado anteriormente // 

function buscarJugador() {
    const equipoBuscado = document.querySelector("#txtBuscar").value;
    let resultado = `No se han encontrado jugadores ${equipoBuscado}.`;

    let equipoEncontrado = false;
    let i = 0;
    while (!equipoEncontrado && i < equipo.length) {
        const equipoActual = equipo[i];
        if (equipoBuscado === equipoActual) {
            const nombreActual = nombreJugador[i];
            const posicionActual = posicion[i];
            
            resultado = `
                <table border="1">
                    <tr>
                        <th>Nombre</th>
                        <th>Posición</th>
                        <th>Equipo</th>
                    </tr>
                    <tr>
                        <td>${equipoActual}</td>
                        <td>${nombreActual}</td>
                        <td>${posicionActual}</td>
                    </tr>
                </table>
            `;

            equipoEncontrado = true;
        }
        i++;
    }

    document.querySelector("#divMensajes").innerHTML = resultado;
}