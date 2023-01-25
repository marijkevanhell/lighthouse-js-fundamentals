const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();
//example 1

const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Marijke")
sayHello("John")
sayHello("Jane")
//example 2

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John');
//example 3

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
//example 4

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John');
console.log(greeting);
//example 5

