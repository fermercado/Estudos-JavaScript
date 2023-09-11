// const imgs = document.querySelectorAll('img')

// imgs.forEach(function (item, index, array) {
//   console.log(item, index, array)
// })

// // const img = document.querySelectorAll('img')

// // img.forEach((item, index) => {
// //   console.log(item, index)
// // })

// let i = 0
// imgs.forEach(item => {
//   console.log(i++)
// })

// const paragrafo = document.querySelectorAll('p')
// console.log(paragrafo)

// paragrafo.forEach(item => {
//   console.log(item.innerText)
// })
const menu = document.querySelector('.menu')
menu.classList.add('ativo')
menu.classList.remove('azul')
menu.classList.toggle('azul')

if (menu.classList.contains('azul')) {
  menu.classList.add('possui-azul')
}

menu.className += ' vermelho'

console.log(menu.className)

const animais = document.querySelector('.animais')

console.log(animais.attributes)

const imgs = document.querySelectorAll('img')

imgs.forEach(img => {
  const possuiAtributo = img.hasAttribute('alt')
  console.log(img, possuiAtributo)
})

const link = document.querySelector('a[href^="http"]')
link.setAttribute('href', 'https://www.google.com')
console.log(link)
