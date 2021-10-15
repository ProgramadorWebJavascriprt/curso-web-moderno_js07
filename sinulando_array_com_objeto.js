console.log('curso de javascript web moderno/Array:Simulando Array com Objeto;') //quinta-feira,20/05/2021;14:26:30 h +|-
const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
Object.defineProperty(quaseArray, 'toString', {
    value: function() {return Object.values(this)},
    enumerable: false 
})
console.log(quaseArray[0])
const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)
