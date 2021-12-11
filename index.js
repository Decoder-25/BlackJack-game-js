let sum = 0
let cards = []
let blackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");
let player ={
    name: "Disha" ,
    chips: 160
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getrandomcard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber > 10) {
        return 10;
    }
    else if (randomNumber === 1) {
        return 11;
    }
    else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getrandomcard()
    let secondCard = getrandomcard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards: ";

    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Wohoo! You've got the BlackJack.";
        blackjack = true;
    } else {
        message = "You lost the game.";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
    if(isAlive === true && blackjack === false)
    {
        let card = getrandomcard();
        sum += card;
        cards.push(card)
        renderGame();
    }
}
