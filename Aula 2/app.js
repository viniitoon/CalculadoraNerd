
var primeiroValor = parseInt (prompt ('Digite o peimeiro valor:'))

var segundoValor = parseInt (prompt ('Digite o segundo valor:'))

var resultado = primeiroValor * segundoValor


var operacao = prompt ("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração")

const span = document.querySelector(".result")
if (operacao == 1) {
    var resultado = primeiroValor / segundoValor
    span.innerHTML = primeiroValor + "/" + segundoValor + "=" + resultado

}else if (operacao == 2) {
    var resultado = primeiroValor * segundoValor
    span.innerHTML = primeiroValor + "*" + segundoValor + "=" + resultado

}else if (operacao == 3) {
    var resultado = primeiroValor + segundoValor
    span.innerHTML = primeiroValor + "+" + segundoValor + "=" + resultado

}else if (operacao == 4) {
    var resultado = primeiroValor - segundoValor
    span.innerHTML = primeiroValor + "-" + segundoValor + "=" + resultado
}
else {
    span.innerHTML= ("<h2> Opção Inválida </h2")
}

//if = se
//else = senão
//else if = senão se