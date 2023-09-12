const obj = {
  a: "teste",
  b: true,
};

console.log(obj instanceof Object);

const obj2 = {
  c: [],
};

Object.assign(obj2, obj);

console.log(obj2);

//

console.log(Object.keys(obj));
console.log(Object.keys(obj2));

// loop

const users = ["fernando", "Camila", "Chicao", "Karina"];

for (let i = 0; i < users.length; i++) {
  console.log(`Listando Usuarios ${users[i]}`);
}

//

const array = ["a", "b", "c"];

array.push("d");

console.log(array);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

// shift e unshift

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(letter);
console.log(letters);

//

const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
  console.log(`o numero é ${numero}`);
});

const posts = [
  { tittle: "Primeiro post", category: "PHP" },
  { tittle: "Segundo post", category: "JavaScript" },
  { tittle: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
  console.log(`Exibindo post: ${post.tittle}, da categoria: ${post.category}`);
});

//

const brands = ["BMW", "VW", "Fiat"];

if (brands.includes("BMW")) {
  console.log("Ha carros da BMW");
}

//

const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

//

const trimTest = " Testando \n ";

console.log(trimTest.length);
console.log(trimTest.trim().length);

//

const frase = "O rato roeu a roupa do rei de roma";

const arrayFrase = frase.split(" ");

console.log(arrayFrase);

//

const fraseDeNovo = arrayFrase.join(" ");

console.log(fraseDeNovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}`;

console.log(fraseDeCompra);

//

const palavra = "Testando ";
console.log(palavra.repeat(5));

//

const somaInfinita = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};

console.log(somaInfinita(1, 2, 3));

//

const somaInfinita2 = (...args) => {
  let total = 0;

  for (num of args) {
    total += num;
  }
  return total;
};
console.log(somaInfinita2(1, 2, 3));

//

const userDetails = {
  firstName: "Fernando",
  lastName: "Mercado",
  job: "Programador",
};

const { firstName, lastName, job } = userDetails;

//renomear variaveis

const {firstName:primeiroNome} = userDetails

console.log(primeiroNome)

//destruction array

const myList = ["Avião", "Submarino", "Carro"]

const [veiculoA, VeiculoB, VeiculoC] = myList

console.log(veiculoA,VeiculoB, VeiculoC)


//JSON

const myJson = '{"name": "Fernando", "age": 31, "skills": ["PHP", "JavaScript", "Python"]}'

console.log(myJson)

// JSON para obj e obj para JSON

const myObject = JSON.parse(myJson)

console.log(myObject)

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)
