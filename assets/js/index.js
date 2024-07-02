const cartas = ["J", "A", "K", "Q"];
const cardOneBack = document.getElementById("card-one");
const cardTwoBack = document.getElementById("card-two");
const cardThreeBack = document.getElementById("card-three");

const iconeCopas = document.getElementById("copas");
const iconeEspada = document.getElementById("espada");
const iconeOuro = document.getElementById("ouro");

const cardOne = document.querySelector(".cardOne");
const cardTwo = document.querySelector(".cardTwo");
const cardThree = document.querySelector(".cardThree");

const container = document.getElementById("container");
const cards = document.getElementById("cards");
const winner = document.createElement("h2");
winner.textContent = "Parabéns você ganhou!";

alert("Vamos tentar a sorte?\nA regra é simples tire um A e ganhe");

cardOneBack.addEventListener("click", function () {
    cardOneBack.style.backgroundImage = "none";
    cardOneBack.style.backgroundColor = "#f5f5f5"

    cardTwoBack.style.backgroundImage = "none";
    cardTwoBack.style.backgroundColor = "#f5f5f5"

    cardThreeBack.style.backgroundImage = "none";
    cardThreeBack.style.backgroundColor = "#f5f5f5"

    cardOne.style.display = "flex";
    iconeCopas.style.display = "block";
    cardOne.textContent = cartas[cartaAleatoria()];

    cardTwo.style.display = "flex";
    iconeEspada.style.display = "block";
    cardTwo.textContent = cartas[cartaAleatoria()];

    cardThree.style.display = "flex";
    iconeOuro.style.display = "block";
    cardThree.textContent = cartas[cartaAleatoria()];

    switch(cardOne.textContent) {
        case "J":
            setTimeout(() => {
                winner.textContent = "Que pena não foi dessa vez!";
                cards.style.display = "none";
                container.appendChild(winner);
                document.body.appendChild(container);

                setTimeout(() => {
                    location.reload();
                }, 1000);

            }, 1000);
            break;
        case "K":
            setTimeout(() => {
                winner.textContent = "Que pena não foi dessa vez!";
                cards.style.display = "none";
                container.appendChild(winner);
                document.body.appendChild(container);

                setTimeout(() => {
                        location.reload();
                    }, 1000);

                }, 1000);
            break;
        case "Q":
            setTimeout(() => {
                winner.textContent = "Que pena não foi dessa vez!";                    cards.style.display = "none";
                container.appendChild(winner);
                document.body.appendChild(container);
    
                setTimeout(() => {
                    location.reload();
                }, 1000);
    
            }, 1000);
            break; 
        default: 
            setTimeout(() => {
                cards.style.display = "none";
                container.appendChild(winner);
                document.body.appendChild(container);

                setTimeout(() => {
                    location.reload();
                }, 1000);
            }, 1000);
    }
});

cardTwoBack.addEventListener("click", function () {
    cardOneBack.style.backgroundImage = "none";
    cardOneBack.style.backgroundColor = "#f5f5f5"

    cardTwoBack.style.backgroundImage = "none";
    cardTwoBack.style.backgroundColor = "#f5f5f5"

    cardThreeBack.style.backgroundImage = "none";
    cardThreeBack.style.backgroundColor = "#f5f5f5"

    cardOne.style.display = "flex";
    iconeCopas.style.display = "block";
    cardOne.textContent = cartas[cartaAleatoria()];

    cardTwo.style.display = "flex";
    iconeEspada.style.display = "block";
    cardTwo.textContent = cartas[cartaAleatoria()];

    cardThree.style.display = "flex";
    iconeOuro.style.display = "block";
    cardThree.textContent = cartas[cartaAleatoria()];

    switch(cardTwo.textContent) {
        case "J":
            setTimeout(() => {
                winner.textContent = "Que pena não foi dessa vez!";
                cards.style.display = "none";
                container.appendChild(winner);
                document.body.appendChild(container);

                setTimeout(() => {
                    location.reload();
                }, 1000);

            }, 1000);
            break;
        case "K":
            setTimeout(() => {
                winner.textContent = "Que pena não foi dessa vez!";
                cards.style.display = "none";
                container.appendChild(winner);
                document.body.appendChild(container);

                setTimeout(() => {
                        location.reload();
                    }, 1000);

                }, 1000);
            break;
        case "Q":
            setTimeout(() => {
                winner.textContent = "Que pena não foi dessa vez!";                    cards.style.display = "none";
                container.appendChild(winner);
                document.body.appendChild(container);
    
                setTimeout(() => {
                    location.reload();
                }, 1000);
    
            }, 1000);
            break; 
        default: 
            setTimeout(() => {
                cards.style.display = "none";
                container.appendChild(winner);
                document.body.appendChild(container);

                setTimeout(() => {
                    location.reload();
                }, 1000);
            }, 1000);
    }
});

cardThreeBack.addEventListener("click", function () {
    cardOneBack.style.backgroundImage = "none";
    cardOneBack.style.backgroundColor = "#f5f5f5"

    cardTwoBack.style.backgroundImage = "none";
    cardTwoBack.style.backgroundColor = "#f5f5f5"

    cardThreeBack.style.backgroundImage = "none";
    cardThreeBack.style.backgroundColor = "#f5f5f5"

    cardOne.style.display = "flex";
    iconeCopas.style.display = "block";
    cardOne.textContent = cartas[cartaAleatoria()];

    cardTwo.style.display = "flex";
    iconeEspada.style.display = "block";
    cardTwo.textContent = cartas[cartaAleatoria()];

    cardThree.style.display = "flex";
    iconeOuro.style.display = "block";
    cardThree.textContent = cartas[cartaAleatoria()];

    switch(cardThree.textContent) {
        case "J":
            setTimeout(() => {
                winner.textContent = "Que pena não foi dessa vez!";
                cards.style.display = "none";
                container.appendChild(winner);
                document.body.appendChild(container);

                setTimeout(() => {
                    location.reload();
                }, 1000);

            }, 1000);
            break;
        case "K":
            setTimeout(() => {
                winner.textContent = "Que pena não foi dessa vez!";
                cards.style.display = "none";
                container.appendChild(winner);
                document.body.appendChild(container);

                setTimeout(() => {
                        location.reload();
                    }, 1000);

                }, 1000);
            break;
        case "Q":
            setTimeout(() => {
                winner.textContent = "Que pena não foi dessa vez!";                    cards.style.display = "none";
                container.appendChild(winner);
                document.body.appendChild(container);
    
                setTimeout(() => {
                    location.reload();
                }, 1000);
    
            }, 1000);
            break; 
        default: 
            setTimeout(() => {
                cards.style.display = "none";
                container.appendChild(winner);
                document.body.appendChild(container);

                setTimeout(() => {
                    location.reload();
                }, 1000);
            }, 1000);
    }
});

function cartaAleatoria() {
    return Math.floor(Math.random() * cartas.length);
}