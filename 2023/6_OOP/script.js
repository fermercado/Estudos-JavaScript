const animal = {
  nome: "bob",
  latir: function () {
    console.log("au au");
  },
};

console.log(animal.nome);
animal.latir();

//

const pessoa = {
  nome: "Fernando",
  getNome: function () {
    return this.nome;
  },
  setNome: function (novoNome) {
    this.nome = novoNome;
  },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());
pessoa.setNome("chicao");
console.log(pessoa.nome);
console.log(pessoa.getNome());

//

const text = "teste";

console.log(Object.getPrototypeOf(text));

const myObject = {
  a: "b",
};

console.log(Object.getPrototypeOf(myObject));

const mySecondObject = Object.create(myObject);

function criarCachorro(nome, raca) {
  const cachorro = Object.create({});
  cachorro.nome = nome;
  cachorro.raca = raca;

  return cachorro;
}
const rodolfo = criarCachorro("Rodolfo", "Vira lata");

console.log(rodolfo);

//

function Cachorro(nome, raca) {
  this.nome = nome;
  this.raca = raca;
}

const husky = new Cachorro("ozzy", "Husky");

console.log(husky);

//

Cachorro.prototype.uivar = function () {
  console.log("Auuuu!!");
};

husky.uivar();

//

class CachorroClasse {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const jeff = new CachorroClasse("Jeff", "Labrador");

console.log(jeff);

//

class Caminhao {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
  }
}

const scania = new Caminhao(6, "Vermelha");

console.log(scania);

scania.descreverCaminhao();

const c2 = new Caminhao(4, "Preta");

console.log(c2);

Caminhao.prototype.motor = 4.0;

const c3 = new Caminhao(6, "Azul");

console.log(c3.motor);

//

class Aviao {
  constructor(marca, turbinas) {
    this.marca = marca;
    this.turbinas = turbinas;
  }
}

const asas = Symbol();
const pilotos = Symbol();

Aviao.prototype[asas] = 2;
Aviao.prototype[pilotos] = 3;

const boeing = new Aviao("boeing", 10);

console.log(boeing);
console.log(boeing[asas]);
console.log(boeing[pilotos]);

//

class Post {
  constructor(titulo, descricao, tags) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.tags = tags;
  }

  get exibirTitulo() {
    return `Voce esta lendo: ${this.titulo}`;
  }

  set adicionarTags(tags) {
    const tagsArray = tags.split(", ");
    this.tags = tagsArray;
  }
}

const myPost = new Post("Algum post", "é um posto sobre progranmação");

console.log(myPost.exibirTitulo);

myPost.adicionarTags = "programação, Javascript, JS";

console.log(myPost);

//

class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, nome) {
    super(patas, patas);
    this.nome = nome;
  }
}

const shark = new Lobo(4, "shark");

console.log(shark);
console.log(shark.patas);
