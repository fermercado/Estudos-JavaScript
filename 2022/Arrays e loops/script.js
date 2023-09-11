// // let videoGames = ['Switch', 'PS4', 'Xbox', '3DS']

// // let ultimoItem = videoGames.pop()

// // console.log(videoGames)

// // for (let numero = 0; numero <= 10; numero++) {
// //   console.log(numero)
// // }

// // let i = 0
// // while (i <= 20) {
// //   console.log(i)
// //   i = i + 5
// // }

// let videoGames = ['Switch', 'PS4', 'Xbox', '3DS']

// for (let i = 0; i < videoGames.length; i++) {
//   console.log(videoGames[i])
//   if (videoGames[i] === 'PS4') {
//     break
//   }
// }

// let frutas = ['Banana', 'Pera', 'Maca', 'Abacaxi', 'Uva']

// frutas.forEach(function (item, index, array) {
//   console.log(item, index, array)
// })

let copa = [1959, 1962, 1970, 1994, 2002]

for (let i = 0; i < copa.length; i++) {
  console.log('O brasil ganho a copa de ' + copa[i])
}

let frutas = ['Banana', 'Pera', 'Maca', 'Abacaxi', 'Uva']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i])
  if (frutas[i] === 'Pera') {
    break
  }
}

let ultimaFruta = frutas[frutas.length - 1]

console.log(ultimaFruta)
