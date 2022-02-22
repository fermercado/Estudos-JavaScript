// const listaAnimais = document.querySelector('.animais-lista')

// const height = listaAnimais.scrollHeight
// const animaisTop = listaAnimais.offsetTop
// console.log(animaisTop)

// const primeiroh2 = document.querySelector('h2')
// const h2Left = primeiroh2.offsetLeft

// const rect = primeiroh2.getBoundingClientRect()

// console.log(rect.height)

// console.log(
//   window.innerWidth,
//   window.innerHeight,
//   window.outerHeight,
//   window.outerWidth,
//   window.pageYOffset,
//   window.pageXOffset
// )

// const small = window.matchMedia('(max-width: 600px)')

// if (small.matches) {
//   console.log('usuario mobile')
// } else {
//   console.log('usuario')
// }

const img = document.querySelector('img')
const imgTop = img.offsetTop

console.log(imgTop)

function soma() {
  const somaLarguraImg = document.querySelectorAll('img')
  let total = 0

  somaLarguraImg.forEach(somaLargura => {
    total += somaLargura.offsetWidth
  })
  console.log(total)
}

window.onload = function () {
  soma()
}

const links = document.querySelectorAll('a')

links.forEach(link => {
  const linkWidth = link.offsetWidth
  const linkHeight = link.offsetHeight
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log(link, 'Possui acessibilida')
  } else {
    console.log(link, 'não boa ossui acessibilida')
  }
})
console.log(links)

const browserSmall = window.matchMedia('(max-width: 720px)').matches

if (browserSmall) {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}
