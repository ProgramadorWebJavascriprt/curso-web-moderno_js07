console.log('curso de javascript web moderno/Array:Reduce #02;') //sexta-feira,20/05/2021;14:42:09 h +|-
const alunos = [
    {nome:'João',nota:7.3 , bolsista: false },
    {nome:'Maria',nota:9.3 , bolsista:true },
    {nome:'Pedro',nota: 9.8, bolsista:false },
    {nome:'Mario',nota:8.7, bolsista:true }
]

console.log('Desafio 1: todos os alunos são Bolsistas?')
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a =>a.bolsista).reduce(todosBolsistas))
console.log(' Desafio 2: algum aluno é Bolsista?')
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
