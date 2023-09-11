// const h1 = document.querySelector('h1')

// console.log(h1.innerHTML)

// const lista = document.querySelector('.animais-lista')
// console.log(lista.parentElement)
// console.log(lista.nextElementSibling)
// console.log(lista.previousElementSibling)
// console.log(lista.children)

// console.log(lista.children[--lista.children.length])
// console.log(lista.querySelector('li:last-child'))

// const animais = document.querySelector('.animais')
// const contato = document.querySelector('.contato')
// const titulo = contato.querySelector('.titulo')

// const mapa = document.querySelector('.mapa')
// contato.replaceChild(lista, titulo)
// // contato.removeChild(titulo)

// // contato.insertBefore(animais, mapa)

// const novoh1 = document.createElement('h1')

// novoh1.innerText = 'Novo Titulo'
// novoh1.classList.add('titulo')
// mapa.appendChild(novoh1)

// console.log(novoh1)

// const h1 = document.querySelector('h1')
// const faq = document.querySelector('.faq')

// const cloneh1 = h1.cloneNode(true)

// faq.appendChild(cloneh1)

const menu = document.querySelector('.menu')
const copy = document.querySelector('.copy')

const novoMenu = menu.cloneNode(true)

copy.appendChild(novoMenu)

const faq = document.querySelector('.faq')
const primeiroDt = faq.querySelector('dt')

const proximoDd = primeiroDt.nextElementSibling

console.log(proximoDd)

const animais = document.querySelector('.animais')
faq.innerHTML = animais.innerHTML
