console.log('curso de javascript web moderno/Array:Metodos Importantes;') //quinta-feira,20/05/2021;14:04:30 h +|-
const pilotos = ['Vettel', 'Alonso', 'Raixkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro de novo;
console.log(pilotos)
pilotos.push('Verstappen')
console.log(pilotos)
pilotos.shift()// remove o pŕimeiro
console.log(pilotos)
pilotos.unshift('Hamilton')
console.log(pilotos)
// splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa') // adicionar
console.log(pilotos)
pilotos.splice(3, 1) // remover{Massa quebrou o carro de novouuuuuuuuuuu}
console.log(pilotos)
const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)


