/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let palos = ["corazon", "pica", "diamante", "trebol"];
  let numeros = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "10",
    "rey",
    "reina",
    "j",
    "as"
  ];

  // function generateExcuse() {
  let randomPalosIndex = Math.floor(Math.random() * palos.length);
  let randomNumerosIndex = Math.floor(Math.random() * numeros.length);

  // return (
  //   palos[randomPalosIndex]
  console.log(randomPalosIndex);
  console.log(palos[randomPalosIndex]);
  // )  }
};
