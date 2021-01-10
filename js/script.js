/* Função para cancelar o envio do form e conferir a validação dos inputs*/

function dontSend(event) {
    event.preventDefault();
    saveName();
    validate();
    document.querySelector('#result').textContent = imc.calculateIMC(user.weight.value, user.height.value);
}

/* Lógica da conta */
const user = {
    name: localStorage.getItem('nameUser'),
    weight: document.querySelector('#weight'),
    height: document.querySelector('#height')
}

const imc = {
    calculateIMC(weight, height) {
        return Math.floor(weight / (height * height));
    }
}

const myName = document.querySelector('#name');

/* Função de validação dos inputs */
function validate() {

    if (myName.value == '') {
        document.querySelector("#msgName").textContent = 'Nome invalido';
    } else {
        document.querySelector("#msgName").textContent = '';
    }

    if (user.weight.value == '') {
        document.querySelector('#msgWeight').textContent = 'Peso invalido';
    } else {
        document.querySelector("#msgWeight").textContent = '';
    }

    if (user.height.value == '') {
        document.querySelector('#msgHeight').textContent = 'Altura invalida';
    } else {
        document.querySelector("#msgHeight").textContent = '';
    }
}

/* Salvando o nome do usuario */
function saveName() {
    const nameSave = myName.value;

    localStorage.setItem('nameUser', nameSave);
}