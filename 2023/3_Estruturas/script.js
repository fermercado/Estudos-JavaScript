//1 Variáveis
let nome = "Fernando";

console.log(nome);

nome = "Fernando Mercado";

console.log(nome);

let a = 10,
  b = 20,
  c = 30;

console.log(a, b, c);

const nomecompleto = "Fernando Francis";
const nomeCompleto = "Fernando Mercado";

console.log(nomecompleto, nomeCompleto);

//3- prompt

// const age = prompt("digite a sua idade:")

// console.log(`você tem ${age} anos`)

//4-alert
// alert('testando')

//5 - math
console.log(Math.max(5, 2, 1, 10));
console.log(Math.floor(5.14));
console.log(Math.ceil(5.14));

//6- console
console.log("teste");
console.error("erro");
console.warn("aviso");

//7- if
const m = 10;

if (m > 5) {
  console.log("M é maior que 5");
}

const user = "João";

if (user === "João") {
  console.log("Olá, João!");
}

//8- else

const loggedIn = false;

if (loggedIn) {
  console.log("está autenticado");
} else {
  console.log("Não esta autenticado");
}

const q = 10;
const w = 15;

if (q > 5 && w > 20) {
  console.log("Números mais altos");
} else {
  console.log("Os números não são mais altos");
}

//9- else if
if (1 > 2) {
  console.log("teste");
} else if (2 > 3) {
  console.log("teste 2");
} else if (5 > 1) {
  console.log("agora sim");
}

const userName = "Fernando";
const userAge = 35;

if (userName === "José") {
  console.log("Bem vindo, José");
} else if (userName === "Fernando" && userAge === 35) {
  console.log("Ola Fernando");
} else {
  console.log("Nenhuma condição aceita");
}

//10 -  while
p = 0;

while (p < 5) {
  console.log(`Repetindo ${p}`);
  p = p + 1;
}

//11 - do while

let o = 10;

do {
  console.log(`Valor de o: ${o}`);
  o--;
} while (o > 1);

//12- for

for (let t = 0; t < 10; t++) {
  console.log("Repetindo Algo...");
}

let r = 10;

for (r; r > 0; r--) {
  console.log(`r easta diminuindo... ${r}`);
}


//14- break

for(let g = 20; g > 10; g--){
    console.log(`O valor de g é ${g}`)
    if(g===15) {
        console.log("g é 15")
        break;
    }
}

//15 - continue

for(let s = 0; s < 10; s++){
    if(s % 2 === 0){
        console.log("número par!")
        continue;
    }
     console.log(s)
}

//16- switch

const job = "Programador"

switch(job) {
    case "Programador":
        console.log("voce é um programador")
        break;
    case "Advogado":
        console.log("voce é um Advogado")
        break  ; 
    case "engenheiro":
         console.log("voce é um engenheiro")
        break  ;  
    default:
        console.log("Profissão não encontrada")
    } 
