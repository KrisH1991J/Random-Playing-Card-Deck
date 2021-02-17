/* eslint-disable */
import "bootstrap";
import "./style.css";

import Deck from "./deck.js";
import "./assets/img/4geeks.ico";

window.onload = () => {
  alert("Here I have a random deck of cards..");
  alert("If you still have doubts, why don't you give them a click!!");
};

const CARD_VALUE_MAP = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14
};

const computerDeckElement = document.querySelector(".computer-deck");
const playerCardSlot = document.querySelector(".player-card-slot");
const playerDeckElement = document.querySelector(".player-deck");
const computerCardSlot = document.querySelector(".computer-card-slot");
const text = document.querySelector(".text");

let playerDeck, computerDeck, inRound, stop;

document.addEventListener("click", () => {
  if (stop) {
    alert("Wow I never would have guessed it was that card!!");
    alert("Well I know you have nothing better to do...");
    alert("But I should get going, see you later!!");
    location.reload();
    start();
    return;
  }

  if (inRound) {
    cleanBeforeRound();
  } else {
    flipCard();
  }
});

start();
function start() {
  const deck = new Deck();
  deck.shuffle();

  playerDeck = new Deck(deck.cards.slice(0, deck.numberOfCards));
  computerDeck = new Deck(deck.cards.slice(0, 0));
  inRound = false;
  stop = false;

  cleanBeforeRound();
}

function cleanBeforeRound() {
  inRound = false;
  playerCardSlot.innerHTML = "";
  computerCardSlot.innerHTML = "";

  updateDeckCount();
}

function flipCard() {
  inRound = true;

  const playerCard = playerDeck.pop();
  const computerCard = computerDeck.pop();

  playerCardSlot.appendChild(playerCard.getHTML());

  updateDeckCount();

  if (isRoundOver(playerCard)) {
    computerDeck.push(playerCard);
  }
  if (lastCard(playerCard)) {
    alert("This is your last card!!");
    alert("I can't believe you actually sat through all of them!!!");
    alert("Well seeing as how you have nothing better to do....");
    alert("Can you guess what your last card will be?");
    alert("Hmm I wonder what it could be...");
  }
  if (isDeckOut(playerDeck)) {
    stop = true;
  }
}

function updateDeckCount() {
  playerDeckElement.innerText = playerDeck.numberOfCards;
}

function isRoundOver(cardOne) {
  return (CARD_VALUE_MAP[cardOne.value] = CARD_VALUE_MAP[cardOne.value]);
}

function isDeckOut(deck) {
  return playerDeck.numberOfCards === 0;
}

function lastCard(deck) {
  return playerDeck.numberOfCards === 0;
}
