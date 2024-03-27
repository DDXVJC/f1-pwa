//zmienna slidelist jest tablicą i przechowuje wszystkie slajdy w formie obiektów 
const slidelist = [
    {
        img : "./IMG/f1.jpg",
        text : "ABU DHABI"
    }, {
        img : "./IMG/f3.jpg",
        text : "MAX VERSTAPPEN"
    }, {
        img : "./IMG/f2.jpg",
        text : "ROBERT KUBICA CALY SWIAT ZACHWYCA"
    }
];

//pobieramy elementy, na których chcemy pracować i przypisujemy je do zmiennych
const img = document.querySelector('img');
const h3 = document.querySelector('h3');
const rectangles = [...document.querySelectorAll('.rectangles span')];

const time = 2000; //zmienna, która określa co jaki czas mają się zmieniać slajdy
let active = 0; //zmienna określająca indeks aktywnego slajdu i  prostokąta

function changeRectangles(){
    const activeRectangles = rectangles.findIndex(rec => rec.classList.contains('active'));

    rectangles[activeRectangles].classList.remove('active');
    rectangles[active].classList.add('active');
}

function changeSlide() {
    active++; //zmienia wartość zmiennej active o 1

    if (active == slidelist.length) {
        active = 0;
    }

    img.src = slidelist[active].img;
    h3.textContent = slidelist[active].text;

    changeRectangles();
}

let indexInterval = setInterval(changeSlide, time);