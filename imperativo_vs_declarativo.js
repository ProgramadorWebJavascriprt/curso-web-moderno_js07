console.log('curso de javascript web moderno/Array:Imperativo vs Declarativo;') //sexta-feira,20/05/2021;15:05:09 h +|-
const alunos = [
    {nome:'João',nota:7.3 },
    {nome:'Maria',nota:9.3 }
]
// Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[1].nota
}
console.log(total1 / alunos.length)
// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
// Select codigo, nome, e-mail from clientes where ativo = 1
