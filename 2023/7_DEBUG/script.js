"use strict";

const opa = "teste"

//

function checkNumber(n){
  const result = Number(n );

  if(Number.isNaN(result)){
    console.log("Valor incorreto")
    return
  }

  console.log("Valor Correto")
  return result
}

checkNumber(5)
checkNumber("10")
checkNumber("teste")

//

let x = 10

// if(x != 11){
//   throw new Error("o valor de x nao pode ser diferente de 11")
// }

//

try {
  const  soma = x + y
} catch(error) {
  console.log(`Erro no programa: ${error}`)
}

//

try {
  const value = checkNumber("asd")

  if(!value){
    throw new Error("Valores invalidos")
  } 

  } catch(error){
    console.log(`Opa, aconteceu um erro> ${error}`)
  } finally {
    console.log("O codigo foi executado")
  }

  //

  function checkArray(arr){
    if(arr.length === 0){
      throw new Error("O array precisa ter elementos")
    } else {
      console.log(`O array tem ${arr.length} elementos`)
    }
  }


  checkArray([1,2,3,4])
  checkArray([])

