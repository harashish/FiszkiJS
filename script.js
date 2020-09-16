
//tablica dwuwymiarowa składająca się ze słów po polsku i ich tłumaczeń na niemiecki
var fiszki = [

  ["wyłączać", "ausmachen"],
  ["odwiedzać", "besuchen"],
  ["dzwonić", "anrufen"],
  ["rozpoczynać", "anfangen"],
  ["włączać", "anmachen"],
  ["ubierać (się))", "anziehen (sich)"],
  ["wstawać", "aufstehen"],
  ["wychodzić", "ausgehen"],
  ["zapraszać", "einladen"],
  ["zasypiać", "einschlafen"],
  ["mieć zamiar coś zrobic ", "vorhaben"],
  ["myć się", "sich waschen"],
  ["sprzątać", "aufräumen"],
  ["czyścić", "sauber machen"],
  ["zmywać", "abwaschen"],
  ["odkurzać (kurz)", "Staub saugen"],
  ["leżeć", "liegen"],
  ["kłaść", "legen"],
  ["przyrządzać posiłek", "die Mahlzeit zubereiten"],
  ["wycierać", "wischen"],
  ["robić pranie", "die Wäsche waschen"],
  ["wynosić śmieci", "den Müll wegbringen"],

  ["przed poludniem", "Vormittag"],
  ["okno", "das Fenster"],
  ["firanka", "die Gardine"],
  ["dywan", "der Teppich"],
  ["zasłona", "der Vorhang"],
  ["fotel", "der Sessel"],
  ["sprzęt stereo", "die Stereoanlage"],
  ["biurko", "der Schreibtisch"],
  ["żelazko", "das Bügeleisen"],
  ["kuchenka elektryczna", "der Elektroherd"],
  ["zmywarka", "der Geschirrspüler"],
  ["odkurzacz", "der Staubsauger"],
  ["pralka", "die Waschmaschine"],

  ["",""]

];

//ü, ö, ä

var dlugosc = fiszki.length-2;

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
fiszkaDiv.innerHTML = fiszki[0][0];


//funkcja wykonująca się po przerobieniu jednej fiszki
function Fstart(){
  fiszkaDiv.innerHTML = fiszki[counter][0];
  badButton.style.visibility= "hidden";
  goodButton.style.visibility= "hidden";
}


//funkcja wykonująca się po kliknięciu fiszki
function Fclicked(){

  //ustalenie koloru dla tekstu na podstawie rodzajnika lub przedrostka
  //dla czasownika rozdzielnie zlozonego
  if (fiszki[counter][1].includes("der"))
    fiszkaDiv.style.color = "blue";
  else if (fiszki[counter][1].includes("die"))
    fiszkaDiv.style.color = "#ea0e96";
  else if (fiszki[counter][1].includes("das"))
    fiszkaDiv.style.color = "green";
  else if (fiszki[counter][1].includes("aus"))
    fiszkaDiv.style.color = "#54124f";
  else if (fiszki[counter][1].includes("an"))
      fiszkaDiv.style.color = "#798510";
  else if (fiszki[counter][1].includes("auf"))
      fiszkaDiv.style.color = "#3fb687";
  else if (fiszki[counter][1].includes("ein"))
      fiszkaDiv.style.color = "#c98415";
  else
      fiszkaDiv.style.color = "#0d0d0d";

  fiszkaDiv.innerHTML = fiszki[counter][1];
  badButton.style.visibility= "visible";
  goodButton.style.visibility= "visible";
}


//funkcja wykonująca się po przejściu przez wszytskie fiszki
function Fend(){
  if(counter > dlugosc)
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
  fiszkaDiv.style.color = "#0d0d0d";
  counter++;
  Fstart();
  Fend();

}


//funkcja naciśnięcia przycisku ":)"
function Good(){
  fiszkaDiv.style.color = "#0d0d0d";
  counter++;
  points++;
  punktyDiv.innerHTML = points;
  Fend();
  Fstart();


}


//console.log(fiszki[1][0]);
//console.log(fiszki[1][1]);
//console.table(fiszki);
