// los valores pueden tener diferentes tipos de datos
// En JS cada valor es un Objeto o un valor primitivo
// Un valor es primitivo cuando no es un Objeto

// https://es.javascript.info/types

// Objeto
let me = {
  name: "Ryan Gosling",
};

// Primitivo
let firstName = "Martin Saavedra";
let age = 35;

// Existen siete tipo de datos primitivo
// string, number, boolean, undefined, null, symbol

// Number son siempre numeros de puntos flotantes ya que siempre tienen decimales a pesar de que no lo vemos o definimos
// Ejemplo: let num = 23 es en realidad 23.0
let num = 23;

// String
let john = "John";

// boolean son valores logicos true o false
let boo = true;
let boo2 = false;

// Undefined es un valor que aun no esta definido
// Una variable que no fue definida es una variable que declaramos pero sin asignar un valor
// Basicamente podriamos decir que undefined es un valor vacio
// https://es.javascript.info/types#el-valor-undefined-indefinido
let children;

// null es un valor vacio
// https://es.javascript.info/types#el-valor-null-nulo
let isNull = null;

// symbol define un valor que es único y que no se puede cambiar
// symbol se introduje en ES2015

// BigInt (ES2020)
// BigInt se utiliza para representar enteros que son muy grandes para representar por el tipo de dato

// JavaScript has dynamic typing
// https://dev.to/kozlovzxc/js-interview-in-2-minutes-static-vs-dynamic-typing-2d5k
// Cuando creo una nueva variable no tengo que definir manualmente el tipo de dato del valor que contiene
// JS determina automaticamente el tipo de dato de un valor cuando se almacena en una variable
// En JS es el valor que tiene un tipo y no la variable
