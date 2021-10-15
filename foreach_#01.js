console.log('curso de javascript web moderno/Array:Foreach #01;') //quinta-feira,20/05/2021;14:34:30 h +|-
const aprovados = ['Agatha','Bernardo','Casio', 'Daniel']
aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
})
aprovados .forEach(nome => console.log(nome))
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)
