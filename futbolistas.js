"use strict";

/**********************************************************************************************
*             EJERCICIOS EXTRAS PARA PRACTICAR EL ACCESO A OBJETOS DENTRO DE UN ARRAY         *                                   
**********************************************************************************************/


const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        partidosJugados: [
            { rival: "Orlando City", goles: 1, asistencias: 2, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "LA Galaxy", goles: 2, asistencias: 1, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "New York Red Bulls", goles: 0, asistencias: 0, tarjetaAmarilla: false, tarjetaRoja: false }
        ]
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        partidosJugados: [
            { rival: "Al Hilal", goles: 1, asistencias: 0, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "Al Shabab", goles: 2, asistencias: 1, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "Al Ahli", goles: 1, asistencias: 1, tarjetaAmarilla: false, tarjetaRoja: true }
        ]
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        partidosJugados: [
            { rival: "Liverpool", goles: 1, asistencias: 2, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "Chelsea", goles: 0, asistencias: 1, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "Manchester United", goles: 0, asistencias: 3, tarjetaAmarilla: false, tarjetaRoja: false }
        ]
    }
];

/**
 * ACT 1 - EXTRA: Calcular el total de goles y asistencias de cada jugador: Usa map() y reduce() para calcular el total de goles y asistencias de cada jugador en sus partidos.
 */
function totalGolesAsistenciasJugador() {
    const jugadores = [];

    futbolistas.forEach(jugador => {
        let goles = jugador.partidosJugados.reduce((acc, total) => acc + total.goles, 0);
        let asistencias = jugador.partidosJugados.reduce((acc, total) => acc + total.asistencias, 0);
        jugadores.push({ nombre: jugador.nombre, totalGoles: goles, totalAsistencias: asistencias });
    });

    console.log(jugadores);
}
//totalGolesAsistenciasJugador();

/**
 * ACT 2 - EXTRA: Filtrar jugadores con tarjetas rojas en algún partido: Encuentra a los jugadores que hayan recibido al menos una tarjeta roja en algún partido.
 */
function tarjetasRojas() {
    const jugadorConRoja = [];

    futbolistas.forEach(jugador => {
        if (jugador.partidosJugados.filter(partido => partido.tarjetaRoja == true).length > 0) {
            jugadorConRoja.push(jugador.nombre);
        };
    });
    console.log(jugadorConRoja);

    // CORRECCION
    const jugadoresConRojas = futbolistas.filter(jugador =>
        jugador.partidosJugados.some(partido => partido.tarjetaRoja)
    );
    console.log(jugadoresConRojas);
}
tarjetasRojas();

/**
 * ACT 3 - EXTRA: Listar los rivales en los que un jugador específico anotó: Pide el nombre de un jugador y, si existe en el array, devuelve una lista de los equipos rivales contra los que anotó.
 */
let anotoJugador = (nombreJugador) => {
    let listaRivales = [];

    futbolistas.forEach(jugador => {
        if (jugador.nombre == nombreJugador) {
            listaRivales = jugador.partidosJugados.filter(partido => partido.goles > 0).map(partido => partido.rival);
        }
    });

    console.log(listaRivales);
}

//anotoJugador("Cristiano Ronaldo");

/**
 * ACT 4 - EXTRA: Calcular el promedio de tarjetas amarillas por jugador en sus partidos: Calcula el promedio de tarjetas amarillas recibidas en los partidos para cada jugador.
 */
function promedioTarjetas() {
    const tarjetasAmarillas = [];

    futbolistas.forEach(jugador => {
        let amarillasJugador = jugador.partidosJugados.filter(partido => partido.tarjetaAmarilla == true).reduce((acc, partido) => acc + (partido.tarjetaAmarilla ? 1 : 0), 0);
        let promedio = amarillasJugador / jugador.partidosJugados.length;
        tarjetasAmarillas.push({ nommbre: jugador.nombre, promedioAmarillas: promedio.toFixed(2) });
    });

    console.log(tarjetasAmarillas);
}
//promedioTarjetas();

/**
 * ACT 5 - EXTRA: Contar los jugadores con al menos un gol en todos sus partidos: Filtra los jugadores que hayan anotado al menos un gol en cada uno de sus partidos.
 */
function contarJugadores() {
    const goleadores = [];

    futbolistas.forEach(jugador => {
        if (jugador.partidosJugados.filter(partido => partido.goles > 0).length == jugador.partidosJugados.length) {
            goleadores.push(jugador.nombre);
        }
    });
    console.log(goleadores);

    // CORRECCION
    const jugadoresSiempreAnotan = futbolistas.filter(jugador =>
        jugador.partidosJugados.every(partido => partido.goles > 0)
    );
    console.log(jugadoresSiempreAnotan);
}
//contarJugadores();