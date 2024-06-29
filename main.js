// Definir los objetos de audio una sola vez para ambos niveles
let winAudio = new Audio('./sounds/win.mp3');
let loseAudio = new Audio('./sounds/lose.mp3');
let clickAudio = new Audio('./sounds/click.mp3');
let rightAudio = new Audio('./sounds/right.mp3');
let wrongAudio = new Audio('./sounds/wrong.mp3');

// Variables comunes
let temporizador1 = false; // Temporizador específico para el nivel 1
let temporizador2 = false; // Temporizador específico para el nivel 2
let tiempoRegresivoId1 = null; // Añadido un identificador específico para el temporizador del nivel 1
let tiempoRegresivoId2 = null; // Añadido un identificador específico para el temporizador del nivel 2

// Nivel 1
let tarjetasDestapadas1 = 0;
let tarjeta1_1 = null;
let tarjeta2_1 = null;
let primerResultado1 = null;
let segundoResultado1 = null;
let movimientos1 = 0;
let aciertos1 = 0;
let timer1 = 35;
let timerInicial1 = 35;

// Apuntando a Documento HTML Nivel 1
let mostrarMovimientos1 = document.getElementById('movimientos');
let mostrarAciertos1 = document.getElementById('aciertos');
let mostrarTiempo1 = document.getElementById('t.restante');

// Generación de números aleatorios Nivel 1
let numeros1 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros1 = numeros1.sort(() => Math.random() - 0.5);
console.log(numeros1);

// Funciones Nivel 1
function contarTiempo1() {
    tiempoRegresivoId1 = setInterval(() => {
        timer1--;
        mostrarTiempo1.innerHTML = `Tiempo: ${timer1} segundos`;
        if (timer1 == 0) {
            clearInterval(tiempoRegresivoId1);
            bloquearTarjetas1();
            loseAudio.play();
        }
    }, 1000);
}

function bloquearTarjetas1() {
    for (let i = 0; i <= 15; i++) {
        let tarjetaBloqueada = document.getElementById(`n1_${i}`);
        tarjetaBloqueada.innerHTML = numeros1[i];
        tarjetaBloqueada.disabled = true;
    }
}

function destaparNivel1(id) {
    if (temporizador1 == false) {
        contarTiempo1();
        temporizador1 = true;
    }

    tarjetasDestapadas1++;
    console.log(tarjetasDestapadas1);

    if (tarjetasDestapadas1 == 1) {
        // Mostrar Primer Número
        tarjeta1_1 = document.getElementById(`n1_${id}`);
        primerResultado1 = numeros1[id];
        tarjeta1_1.innerHTML = primerResultado1;
        clickAudio.play();

        // Deshabilitar botón
        tarjeta1_1.disabled = true;
    } else if (tarjetasDestapadas1 == 2) {
        // Mostrar Segundo Número
        tarjeta2_1 = document.getElementById(`n1_${id}`);
        segundoResultado1 = numeros1[id];
        tarjeta2_1.innerHTML = segundoResultado1;

        // Deshabilitar segundo botón
        tarjeta2_1.disabled = true;

        // Incrementar Movimientos
        movimientos1++;
        mostrarMovimientos1.innerHTML = `Movimientos: ${movimientos1}`;

        if (primerResultado1 == segundoResultado1) {
            // Encerrar tarjetas destapadas
            tarjetasDestapadas1 = 0;

            // Aumentar aciertos
            aciertos1++;
            mostrarAciertos1.innerHTML = `Aciertos: ${aciertos1}`;
            rightAudio.play();

            if (aciertos1 == 8) {
                winAudio.play();
                clearInterval(tiempoRegresivoId1);
                mostrarAciertos1.innerHTML = `Aciertos: ${aciertos1} ¡Ganaste!`;
                mostrarTiempo1.innerHTML = `¡Fantástico! Solo demoraste ${timerInicial1 - timer1} segundos`;
                mostrarMovimientos1.innerHTML = `Movimientos: ${movimientos1} ¡Buen Trabajo!`;
                // Mostrar el segundo nivel después de ganar el primer nivel
                setTimeout(() => {
                    document.getElementById('nivel1').style.display = 'none';
                    document.getElementById('nivel2').style.display = 'block';
                }, 3000);
            }
        } else {
            wrongAudio.play();
            // Mostrar momentáneamente valores y volver a tapar
            setTimeout(() => {
                tarjeta1_1.innerHTML = ' ';
                tarjeta2_1.innerHTML = ' ';
                tarjeta1_1.disabled = false;
                tarjeta2_1.disabled = false;
                tarjetasDestapadas1 = 0;
            }, 600);
        }
    }
}

// Nivel 2
let tarjetasDestapadas2 = 0;
let tarjeta1_2 = null;
let tarjeta2_2 = null;
let primerResultado2 = null;
let segundoResultado2 = null;
let movimientos2 = 0;
let aciertos2 = 0;
let timer2 = 65;
let timerInicial2 = 65;

// Apuntando a Documento HTML Nivel 2
let mostrarMovimientos2 = document.getElementById('movimientos2');
let mostrarAciertos2 = document.getElementById('aciertos2');
let mostrarTiempo2 = document.getElementById('t.restante2');

// Generación de números aleatorios Nivel 2
let numeros2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12];
numeros2 = numeros2.sort(() => Math.random() - 0.5);
console.log(numeros2);

// Funciones Nivel 2
function contarTiempo2() {
    tiempoRegresivoId2 = setInterval(() => {
        timer2--;
        mostrarTiempo2.innerHTML = `Tiempo: ${timer2} segundos`;
        if (timer2 == 0) {
            clearInterval(tiempoRegresivoId2);
            bloquearTarjetas2();
            loseAudio.play();
        }
    }, 1000);
}

function bloquearTarjetas2() {
    for (let i = 0; i <= 23; i++) {
        let tarjetaBloqueada = document.getElementById(`n2_${i}`);
        tarjetaBloqueada.innerHTML = `<img src="./img/${numeros2[i]}.png" alt="">`;
        tarjetaBloqueada.disabled = true;
    }
}

function destaparNivel2(id) {
    if (temporizador2 == false) {
        contarTiempo2();
        temporizador2 = true;
    }

    tarjetasDestapadas2++;
    console.log(tarjetasDestapadas2);

    if (tarjetasDestapadas2 == 1) {
        // Mostrar Primer Número
        tarjeta1_2 = document.getElementById(`n2_${id}`);
        primerResultado2 = numeros2[id];
        tarjeta1_2.innerHTML = `<img src="./img/${primerResultado2}.png" alt="">`;
        clickAudio.play();

        // Deshabilitar botón
        tarjeta1_2.disabled = true;
    } else if (tarjetasDestapadas2 == 2) {
        // Mostrar Segundo Número
        tarjeta2_2 = document.getElementById(`n2_${id}`);
        segundoResultado2 = numeros2[id];
        tarjeta2_2.innerHTML = `<img src="./img/${segundoResultado2}.png" alt="">`;

        // Deshabilitar segundo botón
        tarjeta2_2.disabled = true;

        // Incrementar Movimientos
        movimientos2++;
        mostrarMovimientos2.innerHTML = `Movimientos: ${movimientos2}`;

        if (primerResultado2 == segundoResultado2) {
            // Encerrar tarjetas destapadas
            tarjetasDestapadas2 = 0;

            // Aumentar aciertos
            aciertos2++;
            mostrarAciertos2.innerHTML = `Aciertos: ${aciertos2}`;
            rightAudio.play();

            if (aciertos2 == 12) {
                winAudio.play();
                clearInterval(tiempoRegresivoId2);
                mostrarAciertos2.innerHTML = `Aciertos: ${aciertos2} ¡Ganaste!`;
                mostrarTiempo2.innerHTML = `¡Fantástico! Solo demoraste ${timerInicial2 - timer2} segundos`;
                mostrarMovimientos2.innerHTML = `Movimientos: ${movimientos2} ¡Buen Trabajo!`;
            }
        } else {
            wrongAudio.play();
            // Mostrar momentáneamente valores y volver a tapar
            setTimeout(() => {
                tarjeta1_2.innerHTML = ' ';
                tarjeta2_2.innerHTML = ' ';
                tarjeta1_2.disabled = false;
                tarjeta2_2.disabled = false;
                tarjetasDestapadas2 = 0;
            }, 600);
        }
    }
}