// Seleciona e retorna elementos do Dom:
//     getElementById
//     pegaElementosPeloId
// ex.:

// const animaisSection = document.getElementById('animais');
// console.log(animaisSection)

// const contatoSection = document.getElementById('contato');
// console.log(contatoSection)

// const naoExiste = document.getElementById('teste');
// console.log(naoExiste)



// ***************

// querySelector:
// querySelector é um Seleltor Geral Único
//      retorna o primeiro elemento que combinar com o seu seletor CSS

const animais = document.getElementById('animais')
console.log(animais.innerText.toUpperCase())

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection)
console.log(gridSection.length)


const contato = document.getElementsByClassName('grid-section contato')
console.log(contato)

const ul = document.getElementsByTagName('li')
console.log(ul)
console.log(gridSection[2])

const animaiss = document.querySelector('.animais');
console.log(animaiss)

const lastChild = document.querySelector('.animais-lista li:last-child');
console.log(lastChild)

const linkCss = document.querySelector('[href^="https://"]');
console.log(linkCss)
// esse seletor especial é para selecionar todo href do meu documento: '[href^="https://"]      e coloca o valor que comece com com o que vc quer consultar/procurar, aqui no caso é o "https://", mas poderia ser outra com como uma "#" ou outra coisa.  Isso é um seletor css.

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);


const primeiroUl = document.querySelector('ul');
/*
//primeiroUl.classList.add('grid-section');
       //console.log(primeiroUl); esseaqui add/adiciona uma nova classe ao site, até deu uma "quebrada"(o menu de navegação ficou maior) no site, mas continou funcionando. 
*/
const navItem = primeiroUl.querySelector('li');  // Busca dentro do UL apenas.
console.log(navItem);

//P) Como selecionar todos os links internos?
//R)
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno)


//   *********
//   querySelectorAll:
//   querySelectorAll retorna todos os elementos compatíveis com o seletor CSS em uma NodeList.

const gridSectionn = document.querySelectorAll('.gridSection')
console.log(gridSection[2])

const listas = document.querySelectorAll('ul');
console.log(listas.length) // tem 3 listas
console.log(listas[1])

const fotosAnimais = document.querySelectorAll('.animais-lista img');
console.log(fotosAnimais[0])
// quando tem (parenteses) é método, se chama método, leia quando tiver parenteses() metodo


const gridSectionHTML = document.getElementsByClassName('grid-section');
console.log(gridSectionHTML)


/*  MUDAR O NOME DA CONST p/ USAR O EXEMPLO:
const primeiroUl = document.querySelector('ul');
/*
//primeiroUl.classList.add('grid-section');
       //console.log(primeiroUl); esseaqui add/adiciona uma nova classe ao site, até deu uma "quebrada"(o menu de navegação ficou maior) no site, mas continou funcionando. 
*/


// ***   ***   for Each()
const gridSectionNode = document.querySelectorAll('.grid-section');
gridSectionNode.forEach(function (item, index) {
    console.log(index)
});


const gridSectionNodee = document.querySelectorAll('.grid-section');
gridSectionNodee.forEach(function (item, index) {
    console.log(item, index)
});


const gridSectionNodeee = document.querySelectorAll('.grid-section');
gridSectionNodeee.forEach(function (item, index) {
    console.log(item)
});

//  ***   ***   TRANSFORMANDO ARRAY-LIKE EM ARRAY:


const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid)

// arrayGrid.pop()
// console.log(arrayGrid)
// console.log(arrayGrid.length)



// ---->>>>   *******************
// Exercícios:
// 1/5: Retorne no console todas as imagens do site
const todaImg = document.querySelectorAll('img');
console.log(todaImg);

//------------------------

// 2/5: Retorne no console apenas as imagens que começaram com a palavra imagem
const animaisListaImg = document.querySelectorAll('.animais-lista img');
('img[src^="img/imagem"]')
console.log(animaisListaImg)

//------------------------

// 3/5: Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelector('[href^="#"]'); // ou escrever ('[href="#animais"]')
console.log(linksInterno);
//retornou -->   <a href="#animais">ANIMAIS</a>

//------------------------

// 4/5: Selecione o primeiro h2 dentro de .animais-descricao
const primeiroh2 = document.querySelector('h2:first-child');
console.log(primeiroh2);
/*retornou no console: 
<h2>
    ::before
    "RAPOSA"
</h2> 
*/

//------------------------

// 5/5: Selecione o último p do site.
const paragrafos = document.querySelectorAll('p'); // esses paragrafos é uma array-like e ele possui o .length que é uma propriedade.
console.log(paragrafos.length) // tem 25 
console.log(paragrafos[24]) // pq conta o zero
console.log(paragrafos[24])
console.log(paragrafos[24])
console.log(paragrafos[paragrafos.length - 1])
// melhor jeito é esse é esse aqui
console.log(paragrafos[--paragrafos.length])
// forma mais usada



/*retornou no console:
<p>
"Também apresentam como particularidade suas pupilas ovais, semelhantes às pupilas verticais dos felídeos."
</p> */

//-------*****---------*****--------

// for Each
//  É um método que é utilizado de array.
// Uma lista, uma NodeList
// function é chamada de callback
// dentro dessa function é onde posso passar o argumento

const imgs = document.querySelectorAll('img');
imgs.forEach(function (item) {
    console.log(item);
});

// Parâmetros do forEach:
// Primeiro parâmetro é o callback, a função será ativada a cada item. Essa função pode receber 3três parâmetros: valorAtual, index, array.

const imgss = document.querySelectorAll('img');
imgss.forEach(function (valorAtual, index, array) {
    console.log(valorAtual);
    console.log(index);
    console.log(array);
});


imgss.forEach(function (item, index, array) {
    console.log(item, index, array)
});

// Array É UM OBJETO QUE CRIA ARRAYS

// aqui embaixo mostra a criação de HTMLCollection para array
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function (item) {
    console.log(item)
});


// Arrow Function
// encurta a FUNCTION EXPRESSION QUE É O CALLBACK FUNCTION
// é só substituir a function(){} por () => e pronto

const imgsss = document.querySelectorAll('img');
imgsss.forEach((item) => {
    console.log(item);
});

imgsss.forEach((item, index) => {
    console.log(item, index)
});

let i = 0;
imgsss.forEach(() => {
    console.log(i++)
});

// aqui coloquei return dentro do console
let ii = 0;
imgsss.forEach(() => {
    return console.log(ii++)
});

// aqui só vai ter uma linha de código então pode tirar as chaves e fazer depois da arrow function/seta
// a function curta não tem chaves
// argumento é o item e depois a arrow function
let iii = 0;
imgsss.forEach((item) => console.log(iii++));

// aqui não vai ter argumento nenhum, o parâmetro tá vazio é onde tem os parênteses. 
let iiii = 0;
imgsss.forEach(() => console.log(iiii++));



// ****** ------*****------_______*******




// Exercícios: Arrow function;

// 1/3: Mostre no console cada parágrafo do site:

const todosParagrafos = document.querySelectorAll('p');
// ou fazer com TagName: const todosParagrafos = document.getElementsByTagName('p');
todosParagrafos.forEach((item) => {
    console.log(item);
});


// 2/3: Mostre o texto dos parágrafos no console:

const mostraTextoP = document.querySelectorAll('p');

mostraTextoP.forEach((item) => {
    console.log(item.innerText)
})

// 3/3: Como corrigir os erros abaixo:
const immgs = document.querySelectorAll('img');
// aqui faltava os parenteses
immgs.forEach((item, index) => {
    console.log(item, index);
});

// aqui faltou os parenteses
let iiiii = 0;
imgs.forEach(() => {
    console.log(iiiii++);
});


imgs.forEach(() => (iiiii++));
console.log(iiiii);



// *****---------------******-----------


// Classes e atributos:

// classList :  

const menu = document.querySelector('.menu');
menu.classList.add('ativo', 'azul')// adiciona
menu.classList.remove('azul')// remove
menu.classList.toggle('azul')//adicionou o azul que foi removido, ele remove ou adiciona
// console.log(menu.classList.)

if (menu.classList.contains('azul')) {
    menu.classList.add('possui-azul')
} else {
    menu.classList.add('nao-possui-azul')
};


//    classNames:

console.log(menu.className)// isso aqui com className retorna uma string

// o sinal de +mais em string é para concatenar
// o sinal de += ajuda a abreviar , olha abaixo
//  menu.className += ' vermelho'

// essa forma aqui é a mais usada
menu.className = menu.className + ' vermelho'


//   attributes:
// retorna um array-like com os atributos do elemento.

const animaisss = document.querySelector('.animais');
console.log(animaisss.attributes[0]);
console.log(animaisss.attributes.class);
console.log(animaisss.attributes.id);

// attribute: data; atributo data
// data-texto

console.log(animaisss.attributes[0]);
console.log(animaisss.attributes.class);
console.log(animaisss.attributes.id);
console.log(animaisss.attributes['data-texto']);  // escreve igual uma string


//   getAttribute e setAttribute:

//   (são os que mais vamos usar)
//  Métodos que retornam ou definem de acordo com o atributo selecionado.

// nele a gente já passa direto o valor que quer puxar

const imgssss = document.querySelector('img');

imgssss.getAttribute('src')
console.log(imgssss.getAttribute('src'));
console.log(imgssss.getAttribute('alt'));

const srcImg = imgssss.getAttribute('alt');
console.log(srcImg)

const setImg = imgssss.setAttribute('cria-posição-nome-do-atributo-ex:-caneta-ou-alt', 'aqui é o valor do atributo, ex: é uma raposa')
// ATENCAO: o set não verifica, só cria, se tiver errado vai ficar errado

// getAttribute é um método, e um método é uma função, então por isso tem parênteses pra ativar ele

// set cria um novo atributo se não existir   ou   então ele simplesmente atualiza 

const possuiAlt = imgssss.hasAttribute('alt');
console.log(possuiAlt)
// o has retorna resultado boleano

// get pra pegar
// set pra setar

const carro = {
    portas: 4,
    andar: function (km) {
        console.log(`Andou ${km}`);
    }
}  // isso tudo é um objeto!!!

// carro.andar sem parenteses é um método
// carro.andar com parenteses tem valor 




//  ATENCAO:
//      cores no Origamid:
// amarelo: metodo, função
// cinza: propriedade
// branco: objeto (é a variavel em si)


// ------*****--------****-----*****


// 1/4: Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');
itensMenu.forEach((item) => {
    item.classList.add('ativo');
});
// -------------*****------------



// 2/4: Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item) => {
    item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

// -------------*****------------



// 3/4: Verifique se as imagens possuem o atributo alt

const imgAlt = document.querySelectorAll('img')
imgAlt.forEach((img) => {
    const possuiAtributo = img.hasAttribute('alt')
    console.log(img, possuiAtributo);
})

// -------------*****------------



// 4/4: Modifique o href do link externo no menu

const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href', 'www.google.com/');
console.log(linkExterno)
// -------------*****------------

// 0306 parte1:
// Height e Width

const section = document.querySelector('.animais');
section.clientHeight;
console.log(section)
// section link externo