
const pi = 3.14;
const martin = "Martin";
let x;
var y = 33;
let ime;
let recenica;
let blockquote;
let anotherExample;
let a = 25;
let b = 40;
let isSet = false;


let david = null;
let marko = undefined;

let pero = null;

let niza = [5, 18, 33, "Stojan"];


console.log(niza[0]);


x = 22;
y = 3;
z = x * y;

console.log(z);
ime = 'martin';
prezime = "karadzinov"

console.log(ime);
ime = "petar";

recenica = `Здраво ${ime} ${prezime}. "Добро" дојде' на нашиот сајт`;

blockquote = "Христо рече дека javascript e многу \"добра\" работа";

anotherExample = 'This is Martin\'s MacBook Pro';


console.log(recenica);


let result = mnozenje(b,a);
let result2 = mnozenje(8,3);


function mnozenje(a,b, defaultText = "А по б ви е : ")
{
    let c = a * b;
    return c;
}




let elRoot = document.getElementById("root");

let getText =  elRoot.innerText; // Здраво

let kliknato  = 1;

elRoot.addEventListener("click", function() {
    console.log(kliknato);


    elRoot.innerText = getText + " " + ime; // <div id="root">Здраво petar</div>


    if(kliknato < 10) {
        elRoot.style = "color: red;";
    } else {
        elRoot.style = "color: yellow;";
    }

    kliknato++;
});


let greenElements = document.getElementsByClassName("green");
greenElements[1].style = "color: lightgreen";


function changeColor()
{
    elRed = document.getElementsByClassName("red");
    elRed[0].style = "color: blue";
}




class Person {
    firstName;
    lastName;

    constructor(f, l)
    {
        this.firstName = f;
        this.lastName = l;
    }

    fullName()
    {
        return this.firstName + " " + this.lastName;
    }

}

let martinK = new Person("Martin", "Karadzinov");
let hristoK = new Person("Hristo", "Krstevski");
let davidK = new Person("David", "Kostovski");

console.log(davidK.fullName());


let ognen = {
    firstName: "Ognen",
    lastName: "Ognenovski",
    fullName: function() {
        return `${this.firstName}  ${this.lastName}`
    }
}

