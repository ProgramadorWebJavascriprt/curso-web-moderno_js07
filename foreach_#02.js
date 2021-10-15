console.log('curso de javascript web moderno/Array:Foreach #02;') //quinta-feira,20/05/2021;14:48:30 h +|-
Array.prototype.forEach2 = function(callback) {
    for(let i = 0; i < this.length; i++) {
     callback(this[i], i, this)
    }
}
const aprovados = ['Agatha','Bernardo','Cásio', 'Daniel']
aprovados.forEach2(function(nome, indice){
    console.log(`${indice +1}) ${nome}`)
}) 
