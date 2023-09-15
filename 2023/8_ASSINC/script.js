console.log("Ainda nao executou");

setTimeout(function () {
  console.log("requisição assincrona");
}, 2000);

console.log("ainda nao executou2");

//
console.log("Ainda nao começou");

// setInterval(function () {
//   console.log("intervalo assincrono");
// }, 3000);

console.log("Ainda nao começou2");

//

const promessa = Promise.resolve(5 + 5);
console.log("Algum codigo");

promessa
  .then((value) => {
    console.log(`A soma é ${value}`);
    return value;
  })

  .then((value) => value - 1)
  .then((value) => console.log(`Agora é ${value}`));

console.log("outro codigo");

//
const p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(10);
  }, 3000);
});

const p2 = Promise.resolve(10 + 10);

const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject("Erro");
  }
});

Promise.all([p1, p2, p3]).then((values) => console.log(values));

//

async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(2, 4).then((value) => {
  console.log(`O valor da soma é: ${value}`);
});

console.log(" teste async");

//

function resolveComDelay(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve("Resolveu a promise")
    }, 2000)
  })
}

async function chamadaAsync(){
  console.log("chamando a promise, e esperando o resultado");
  const result = await resolveComDelay()
  console.log(`o resultado chegou ${result}`)
}

chamadaAsync()
