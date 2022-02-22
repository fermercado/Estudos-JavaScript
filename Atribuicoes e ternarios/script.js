let numero = 20
let numero2 = 10

numero *= numero2
console.log(numero)

let idade = 20
let naoPossuiDiabetes = true

let podeBeber

podeBeber = idade >= 18 && naoPossuiDiabetes ? 'Pode beber' : 'Nao pode beber'

console.log(podeBeber)

let possuiFaculdade = true
if (possuiFaculdade) console.log('Sim Possui')
else console.log('nao possui')

let scroll = 1000
scroll += 500
console.log(scroll)

let possuiCarro = true
let possuiCasa = false
let darCredito

darCredito =
  possuiCarro && possuiCasa ? 'Dar Credito ao cliente' : 'Negar Credito'

console.log(darCredito)
