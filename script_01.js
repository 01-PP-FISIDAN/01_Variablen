"use strict";

/***** Variablen 01 *******/

/** 
 * 
 *  Block-Kommentar
 * 
*/

// Konsolen-Ausgaben
// console.log("Hallo");
// console.log(firstName);

/***** 02 Deklaration + Wertzuweisung I *******/

// let firstName; //Deklaration bzw Definition der Variablen in Camel-Schreibweise
// firstName = "Daniel"; // Hier wird der Wert Daniel an die Variable firstName übergeben Ziel = Wert
// console.log(firstName); //Ausgabe

// let familyName = "Schwark" // DEklaration und WErtzuweisung in einer Zeile
// console.log(familyName);
// console.log(firstName +" "+ familyName); //kombinierte Ausgabe mit Leerzeichen

/****** 03 Deklaration + Wertzuweisung II */

// let firstName, familyName;
// firstName = prompt("Bitte Vornamen eingeben."); // Wertzuweisung
// familyName = prompt("Bitte Nachnamen eingeben."); // Wertzuweisung
// console.log(firstName + " " + familyName); //Ausgabe

// console.log("Datentyp: " + typeof firstName);

/* JS ist eine untypisierte Sprache! | untyped */

// let test;
// test = "hallo";
// test = 2;
// test = true;

// console.log("Datentyp: " + typeof test);
// console.log("Inhalt: " + test);


/******* 03a Konstanten **********/
// const test = "hello" /* Konstanten müssen als Sonderform der Variablen ihren Wert zur Laufzeit zugewiesen bekommen und nicht ändern*/
// test = "hi"; // Keine neue Zuweisung zur LZ möglich! --> Fehler!
// console.log("Inhalt: " + test); // Ausgabe

/***** 04 Beispiel - Berechnung   *********/

// Deklaration
const birthYearJohn = 2000;
const birthYearMark = 1999;
let ageJohn, ageMark;

let year = 2023;

// Berechnung
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

console.log("Alter John: " + ageJohn);
console.log("Alter John: " + ageMark);
