const user = {
    name: 'user1',
    weight: 100,
    height: 1.90


}

const imc = {
    calculateIMC(weight, height) {
        return weight / (height * height)
    }
}

console.log(imc.calculateIMC(user.weight, user.height));

/* Função para cancelar o envio do form */

function dontSend(event) {
    event.preventDefault();
    validate();


}

const myName = document.querySelector('#name');
const myWeight = document.querySelector('#weight');
const myHeight = document.querySelector('#height');

myName.value.replace(',', '.');
myWeight.value.replace(',', '.');
myHeight.value.replace(',', '.');

function validate() {

    if (myName.value == '') {
        document.querySelector("#msgName").textContent = 'Nome invalido';
    } else {
        document.querySelector("#msgName").textContent = '';
    }

    if (myWeight.value == '') {
        document.querySelector('#msgWeight').textContent = 'Peso invalido';
    } else {
        document.querySelector("#msgWeight").textContent = '';
    }

    if (myHeight.value == '') {
        document.querySelector('#msgHeight').textContent = 'Altura invalida';
    } else {
        document.querySelector("#msgHeight").textContent = '';
    }
}
