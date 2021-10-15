console.log('curso de javascript web moderno/Array:Reduce #03;') //sexta-feira,20/05/2021;14:42:09 h +|-
Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceIncial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceIncial;i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(soma, 21))
