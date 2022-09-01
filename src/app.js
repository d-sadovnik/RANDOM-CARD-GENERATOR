/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let simbolo = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

  let random = Math.floor(Math.random() * simbolo.length);

  document.querySelector("#numero").append(simbolo[random]);

  let cardsymbol = ["♣", "♠", "♥", "♦"];

  let randomcardsymbol = Math.floor(Math.random() * cardsymbol.length);

  document.querySelector("#symbol").append(cardsymbol[randomcardsymbol]);
  document.querySelector("#symbol2").append(cardsymbol[randomcardsymbol]);

  if (
    cardsymbol[randomcardsymbol] === "♥" ||
    cardsymbol[randomcardsymbol] === "♦"
  ) {
    document.querySelector("#symbol").style.color = "red";
    document.querySelector("#symbol2").style.color = "red";
  }
};
