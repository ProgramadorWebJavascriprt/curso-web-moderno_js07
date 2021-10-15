console.log('curso de javascript web moderno/Array:Reduce #01;') //quinta-feira,20/05/2021;22:20:09 h +|-
const alunos = [
    {nome:'João',nota:7.3 , bolsista: false },
    {nome:'Maria',nota:9.3 , bolsista:true },
    {nome:'Pedro',nota: 9.8, bolsista:false },
    {nome:'Mario',nota:8.7, bolsista:true }
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador,  atual){
   console.log(acumulador, atual)
   return acumulador + atual
}, 0)
console.log(resultado)
