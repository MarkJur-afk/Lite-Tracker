// Valib sõnade massiivist juhusliku sõna.
const words = [
    {
        estonian: "hajusrakendus",
        russian: "распределённое приложение"
    },
    {
        estonian: "hajussüsteem",
        russian: "распределённая система"
    },
    {
        estonian: "server",
        russian: "сервер"
    },
    {
        estonian: "klient",
        russian: "клиент"
    },
    {
        estonian: "klient-server arhitektuur",
        russian: "клиент-серверная архитектура"
    },
    {
        estonian: "sõlm",
        russian: "узел"
    },
    {
        estonian: "tulemüür",
        russian: "брандмауэр"
    },
    {
        estonian: "andmebaas",
        russian: "база данных"
    },
    {
        estonian: "andmebaasi server",
        russian: "сервер базы данных"
    },
    {
        estonian: "API",
        russian: "API"
    },
    {
        estonian: "veebiteenus",
        russian: "веб-сервис"
    },
    {
        estonian: "mikroteenus",
        russian: "микросервис"
    },
    {
        estonian: "teenus",
        russian: "сервис"
    },
    {
        estonian: "protokoll",
        russian: "протокол"
    },
    {
        estonian: "HTTP-protokoll",
        russian: "протокол HTTP"
    },
    {
        estonian: "andmeedastus",
        russian: "передача данных"
    },
    {
        estonian: "sünkroniseerimine",
        russian: "синхронизация"
    },
    {
        estonian: "sõnum",
        russian: "сообщение"
    },
    {
        estonian: "sõnumijärjekord",
        russian: "очередь сообщений"
    },
    {
        estonian: "pilvandmetöötlus",
        russian: "облачные вычисления"
    },
    {
        estonian: "pilveteenus",
        russian: "облачный сервис"
    },
    {
        estonian: "koormuse tasakaalustamine",
        russian: "балансировка нагрузки"
    },
    {
        estonian: "veataluvus",
        russian: "отказоустойчивость"
    },
    {
        estonian: "skaleeritavus",
        russian: "масштабируемость"
    },
    {
        estonian: "autentimine",
        russian: "аутентификация"
    },
    {
        estonian: "autoriseerimine",
        russian: "авторизация"
    }
];

let score = 0;
let currentEstonianWord = null;
let currentRussianWord = null;

function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function newEstonianWord() {
    currentEstonianWord = getRandomWord();

    document.getElementById("estonianWord").textContent =
        currentEstonianWord.estonian;

    document.getElementById("russianAnswer").value = "";
    document.getElementById("etRuResult").textContent = "";
}

function newRussianWord() {
    currentRussianWord = getRandomWord();

    document.getElementById("russianWord").textContent =
        currentRussianWord.russian;

    document.getElementById("estonianAnswer").value = "";
    document.getElementById("ruEtResult").textContent = "";
}

function checkEstonianToRussian() {
    const userAnswer = document
        .getElementById("russianAnswer")
        .value
        .trim()
        .toLowerCase();

    const correctAnswer =
        currentEstonianWord.russian.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("etRuResult").textContent =
            "Õige vastus!";

        score++;
        updateScore();
    } else {
        document.getElementById("etRuResult").textContent =
            "Vale vastus. Õige vastus on: " +
            currentEstonianWord.russian;
    }
}

function checkRussianToEstonian() {
    const userAnswer = document
        .getElementById("estonianAnswer")
        .value
        .trim()
        .toLowerCase();

    const correctAnswer =
        currentRussianWord.estonian.toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("ruEtResult").textContent =
            "Õige vastus!";

        score++;
        updateScore();
    } else {
        document.getElementById("ruEtResult").textContent =
            "Vale vastus. Õige vastus on: " +
            currentRussianWord.estonian;
    }
}

function updateScore() {
    document.getElementById("score").textContent =
        "Õiged vastused: " + score;
}

newEstonianWord();
newRussianWord();