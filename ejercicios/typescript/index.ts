// Boolean

let mute: boolean = true
mute = false

// numeros
let numerador: number = 42
let denominador: number = 6
let resultado = numerador / denominador

// String
let nombre: string = 'Carlos'
let saludo = `Me llamo ${nombre}`

// Arreglos
let people: string[] = [];
people = ['Isable','Nicole','Raul'];
people.push('9000')

let peopleAnNumeros: Array< string | number> =[]
peopleAnNumeros.push(9000);
peopleAnNumeros.push("Carlos")

// enum
enum Colores {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul"
}

let colorFavorito: Colores = Colores.Azul
console.log("Pase 34"+ colorFavorito)
console.log(colorFavorito)

// Any
let comodin: any = "Joker";
comodin = {type: 'Wildcard'}

// Object
let someObject: object = {type: 'Wildcard'}



// Funciones
function add(a: number, b: number): number{
  return a + b;
}

const suma = add(4, 6)
console.log(suma)

function createAdder(a: number): (numer) => number {
  return function(b: number){
    return b + a;
  }
}

const addFour = createAdder(4);
const forPlus6 = addFour(6);
console.log("Pase 1")
console.log(addFour);
console.log("Pase 2")
console.log(forPlus6);



function fullName(firstName: string, lastName: string =''): string {
  return `${firstName} ${lastName}`;
}
console.log(fullName('Carlos', 'Granada'))
console.log(fullName('Carlos'))

// interfaces

enum Color {
  Rojo = 'Rojo',
  Verde = 'Verde',
}
interface Rectangulo {
  ancho: number;
  alto: number;
  color?: Color;
}

let rect: Rectangulo = {
  ancho: 4,
  alto: 6,
  color: Color.Rojo,
};

function area(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
  return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
};

console.log(rect.toString());


