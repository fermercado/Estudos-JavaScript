//1 criando função
function minhaFuncao() {
  console.log("testando");
}

minhaFuncao();

const minhaFuncaoEmVariavel = function () {
  console.log("funcao em variavel");
};

minhaFuncaoEmVariavel();

//2 - return
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(a, b));

//3- escopo da funcao
let y = 10;

function testandoEscopo() {
  let y = 20;
  console.log(`Y dentro da função é: ${y}`);
}

console.log(`y fora da função é ${y}`);

testandoEscopo();

//4- escopo aninhado

//6 arrow functions

const raizQuadrada = (x) => {
  return x * x;
};

console.log(raizQuadrada(4));

const raizQuadrada2 = (x) => x * x;
console.log(raizQuadrada2(12));

//7 parametro opcional

const multiplication = function (m, n) {
  if (n === undefined) {
    return m * 2;
  } else {
    return m * n;
  }
};
console.log(multiplication(5));
console.log(multiplication(2, 4));

const greeting = (name) => {
  if (!name) {
    console.log("ola");
    return;
  }
  console.log(`olá ${name}`);
};

greeting();
greeting("Fernando");

//8 valor default

const customGreeting = (name, greet = "olá") => {
  return `${greet}, ${name}`;
};

console.log(customGreeting("Matheus"));

console.log(customGreeting("João", "Bom dia"));

const repeatText = (text, repeat = 2) => {
  for (let i = 0; i < repeat; i++) {
    console.log(text);
  }
};
repeatText("testando texto");
repeatText("testando texto", 5);

//9 closure

function someFunction() {
  let txt = "Alguma Coisa";

  function display() {
    console.log(txt);
  }
  display();
}
someFunction();

//10 mais sobre closure

//11 recursion

const untilTen = (n, m) => {
  if (n < 10) {
    console.log("A função parou de executar");
  } else {
    const x = n - m;
    console.log(x);
    untilTen(x, m);
  }
};

untilTen(100, 7);

function factorial(x) {
  if (x === 0) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}

const num = 6;

const result = factorial(num);

console.log(`O fatorial do numero ${num} é ${result}`);
