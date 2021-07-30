/*
var d= new Date();
alert(d);
console.log(d.getHours());
*/

/*
function soma(n1, n2){
    return n1+n2;
}
alert(soma(5,8));
*/

function validarIdade(idade){
    var validar;
    if (idade > 18){
        validar=true
    }
    else {
        validar = false
    }
    return validar;
}

var idade= prompt("Qual sua idade");
console.log(validarIdade(idade));
