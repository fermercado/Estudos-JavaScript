// const img = document.querySelector('img')

// img.addEventListener('click', callback)

// function callback(event) {
//   console.log('event')
// }

// const animaisLista = document.querySelector('.animais-lista')

// function callbacklista(event) {
//   console.log(event.currentTarget)
//   console.log(event.target)
//   console.log(event.type)
// }

// animaisLista.addEventListener('click', callbacklista)

// const linkExterno = document.querySelector('a[href^="http"')

// linkExterno.addEventListener('click', handleLinkExterno)

// function handleLinkExterno(event) {
//   event.preventDefault()
//   console.log(event)
// }

// // function handlEvent(event) {
// //   console.log(event.type, event)
// // }
// // const h1 = document.querySelector('h1')
// // h1.addEventListener('click', handlEvent)
// // h1.addEventListener('mousemove', handlEvent)
// // window.addEventListener('scroll', handlEvent)
// // window.addEventListener('resize', handlEvent)

function handleKeyboard(event) {
  if (event.key === 'a') {
    document.body.classList.toggle('azul')
  }
}
a

// const imgs = document.querySelectorAll('img')

// function handleImg(event) {
//   console.log(event.target)
// }

// imgs.forEach(img => {
//   img.addEventListener('click', handleImg)
// })

const linksInternos = document.querySelectorAll('a[href^="#"]')

function handleLink(event) {
  event.preventDefault()
  linksInternos.forEach(link => {
    link.classList.remove('ativo')
  })
  event.currentTarget.classList.add('ativo')
}

linksInternos.forEach(link => {
  link.addEventListener('click', handleLink)
})

const todosElementos = document.querySelectorAll('body *')

function handleElemento(event) {
  event.currentTarget.remove()
}

// todosElementos.forEach(elemento => {
//   elemento.addEventListener('click', handleElemento)
// })
// console.log(todosElementos)

function handleclickT(event) {
  if (event.key === 't') {
    document.documentElement.classList.toggle('textoMaior')
  }
}

window.addEventListener('keydown', handleclickT)
