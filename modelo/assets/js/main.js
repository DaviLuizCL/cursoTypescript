const form = document.querySelector("#form");

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    if (!peso){
        setResultado('Peso inválido', false);

        return;
    }
    if (!altura){
        setResultado('Altura inválida', false);
        return;
    }
    const imc = getImc(peso, altura);

    console.log(imc)
});
function criaP (className) {
    const p = document.createElement('p');
    return p;
}
function getNivelImc(imc) {
    const nivel = ["Abaixo do peso", "Peso normal", "Sobrepeso",
         "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];

}
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';
    const p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);

}

function getImc (peso, altura){
    const imc = peso / altura**2;
    return imc.toFixed(2);

}