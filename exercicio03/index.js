//numero divisivel por 3 = Fizz
// numero divisivel po 5 = buzz
// numero é dividisel por 3 e 5 = fizzbuzz
// numero nao é divisivel por 3 e 5 = retorna o proprio numero
// checar se realmente é numero
// usar pra todos os numeros de 0 a 100]

function comparar(numero){
    if (typeof numero !== 'number'){
        return "Digite um numero válido."
    }
    let retorno = '';
    if (numero % 3 === 0){
        retorno = retorno + 'Fizz';
    }

    if (numero % 5 === 0){
        retorno = retorno + 'Buzz';
    }
    if (retorno === ''){
        return numero;
    }
    return retorno;
}
console.log(comparar("3"))