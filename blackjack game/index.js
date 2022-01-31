let player = {
  name: "Atish",
  chips: 154,
};

let cards = [];
let sum = 0;
let hasBlack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
//let sumEl = document.getElementById("sum-el");
let sumEl = document.querySelector("#sum-el");

let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $ " + player.chips;

console.log(playerEl);

//console.log(messageEl);
//console.log(sum);

function getRandomCard() {
  let random_num = Math.floor(Math.random() * 13) + 1;

  if (random_num > 10) {
    return 10;
  } else if (random_num === 1) {
    return 11;
  } else {
    return random_num;
  }
}

function startgame() {
  let firstcard = getRandomCard();
  let secondcard = getRandomCard();

  cards = [firstcard, secondcard];
  sum = firstcard + secondcard;
  isAlive = true;
  rendergame();
}

function rendergame() {
  cardEl.textContent = "Cards:";

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum :" + sum;

  //  cardEl=text.textContent.

  if (sum <= 20) {
    message = "do you want a new card to draw ";
    isAlive = true;
  } else if (sum === 21) {
    message = "You got blackjack ";
    hasBlack = true;
  } else {
    message = "You are out of the game	";
    isAlive = false;
  }

  // console.log("hasblack=" + hasBlack);
  // console.log("isAlive=" + isAlive);

  messageEl.textContent = message;
}

function newcard() {
  //  console.log("Drawing a new card from the deck!");

  if (isAlive === true && hasBlack === false) {
    let card = getRandomCard();

    sum += card;
    cards.push(card);
    console.log(cards);

    rendergame();
  }
}

// let mess = ["hello", "good", "morning"];

// for (let i = 0; i < mess.length; i++) {
// //  console.log(mess[i]);
// }

let random_number = Math.floor(Math.random() * 6);

console.log(random_number);
