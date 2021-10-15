console.log('curso de javascript web moderno/Array:Visão Geral;') //quinta-feira,20/05/2021;13:39:10 h +|-
console.log(typeof Array,typeof new Array,typeof [] )
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovadros[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // não existem resultara em "undefined";
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)
console.log(aprovados[8] === null)
console.log(aprovados)
aprovados.sort() // causa dentro do array...
console.log(aprovados)
delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1)
console.log(aprovados)
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)
