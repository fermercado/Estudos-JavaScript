// function areaQuadrada(lado) {
//   return lado * lado
// }

// console.log(areaQuadrada(2))

// function pi() {
//   return 3.14
// }

// var total = 5 * pi()

// console.log(total)

// function imc2(peso, altura) {
//   let imc = peso / (altura * altura)
//   console.log(imc)
// }

// imc2(80, 1.8)

// function corFavorita(cor) {
//   if (cor === 'azul') {
//     return 'Eu gosto do ceu'
//   } else if (cor === 'verde') {
//     return 'eu gosto de mato'
//   } else {
//     return ' eu n gost de cores'
//   }
// }

// console.log(corFavorita('verde'))

// addEventListener('click', function () {
//   console.log('oi')
// })

// function terceiraIdade(idade) {
//   console.log(typeof idade)
//   if (typeof idade !== 'number') {
//     return 'Por favor Preencha um numero'
//   } else if (idade >= 60) {
//     console.log(' É idoso')
//     return true
//   } else {
//     return false
//   }
// }

// console.log(terceiraIdade(60))

// function paisesVisitados(faltaVisitar) {
//   let totalPaises = 193
//   return `Falta visitar ${totalPaises - faltaVisitar} paises`
// }

// console.log(paisesVisitados(30))

// var profissao = 'Designer'
// function dados() {
//   var nome = 'Fernando'
//   var idade = 34
//   function outrosDados() {
//     var endereco = 'Birigui'
//     var idade = 34
//     return `${nome}, ${idade} anos, ${endereco}, ${profissao}`
//   }
//   return outrosDados()
// }

// console.log(dados())

// Crie uma função para verificar se um valor é Truthy
function isTruthy(dado) {
  return !!dado
}
console.log(isTruthy(2))

// Crie uma função matemática que retorne o perímetro de um quadr
function perimetoQuadrado(lado) {
  return lado * 4
}

console.log(perimetoQuadrado(5))

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome) {
  return `${nome} ${sobrenome}`
}
console.log(nomeCompleto('Fernando', 'Mercado'))

// Crie uma função que verifica se um número é par

function ePar(numero) {
  let modulo = numero % 2
  if (modulo === 0) {
    console.log('é par')
  } else {
    console.log('nao é par')
  }
}

function ePar(numero) {
  let modulo = numero % 2
  if (modulo === 0) {
    console.log('é par')
  } else {
    console.log('nao é par')
  }
}
console.log(ePar(5))

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(dado) {
  return typeof dado
}
console.log(tipoDado('oi'))

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet

addEventListener('click', function () {
  console.log('Fernando Mercado')
})
