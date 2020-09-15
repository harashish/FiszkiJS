
//tablica dwuwymiarowa składająca się ze słów po polsku i ich tłumaczeń na niemiecki
var czasowniki = [

  ["wyłączać", "ausmachen"],
  ["odwiedzać", "besuchen"],
  ["dzwonić", "anrufen"],
  ["rozpoczynać", "anfangen"],
  ["włączać", "anmachen"],
  ["ubierać (się))", "anziehen (sich)"],
  ["wstawać", "aufstehen"],
  ["wychodzić", "ausgehen"],
  ["zapraszać", "einladen"],
  ["",""]

];

//dla przycisków
var badButton = document.getElementById("bad");
var goodButton = document.getElementById("good");
badButton.style.visibility= "hidden";
goodButton.style.visibility= "hidden";

//licznik fiszek
var counter = 0;

//licznik punktów
var points = 0;

//dla punktów
var punktyDiv = document.getElementById("points");
punktyDiv.innerHTML = points;

//dla fiszek
var fiszkaDiv = document.getElementById("center");
fiszkaDiv.innerHTML = czasowniki[0][0];


//funkcja wykonująca się po przerobieniu jednej fiszki
function Fstart(){
  fiszkaDiv.innerHTML = czasowniki[counter][0];
  badButton.style.visibility= "hidden";
  goodButton.style.visibility= "hidden";
}


//funkcja wykonująca się po kliknięciu fiszki
function Fclicked(){
  fiszkaDiv.innerHTML = czasowniki[counter][1];
  badButton.style.visibility= "visible";
  goodButton.style.visibility= "visible";
}


//funkcja wykonująca się po przejściu przez wszytskie fiszki
function Fend(){
  if(counter > 8)
  {
    alert("KONIEC, liczba punktów: " + points + " na " + (counter))
    badButton.style.visibility= "hidden";
    goodButton.style.visibility= "hidden";
    document.getElementById("fiszka").style.visibility = "hidden";
    document.getElementById("content1").innerHTML = "przeładuj stronę aby zacząć jeszcze raz...";

  }
}


//funkcja naciśnięcia przycisku ":("
function Bad(){
  counter++;
  Fstart();
  Fend();
}


//funkcja naciśnięcia przycisku ":)"
function Good(){
  counter++;
  points++;
  punktyDiv.innerHTML = points;
  Fstart();
  Fend();

}


//console.log(czasowniki[1][0]);
//console.log(czasowniki[1][1]);
//console.table(czasowniki);
