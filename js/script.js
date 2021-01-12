/* Função para cancelar o envio do form e conferir a validação dos inputs*/

function dontSend(event) {

  event.preventDefault();
  saveName();
  validate();

}

/* Lógica da conta */
const user = {

  name: localStorage.getItem('nameUser'),
  weight: document.querySelector('#weight'),
  height: document.querySelector('#height')

}

const imc = {
  calculateIMC(weight, height) {
    const account = Math.ceil(weight / (height * height));

    const thinness = account <= 18.5;
    const normal = account > 18.5 && account <= 24.9;
    const overweight = account > 24.9 && account <= 30
    const obesity = account > 30

    if (thinness) {

      return document.querySelector('#result').textContent = user.name + ' sinto muito, seu IMC é de ' + account + ' kg/m² e você precisa ganhar peso.';

    } else if (normal) {

      return document.querySelector('#result').textContent = user.name + ' Parabéns, seu IMC é de ' + account + ' kg/m² e você está dentro do peso adequado!';

    } else if (overweight) {

      return document.querySelector('#result').textContent = user.name + ' sinto muito, mas o seu IMC é de ' + account + ' kg/m², por isso você está acima do peso e deveria emagrecer no mínimo 1 kg.';

    } else if (obesity) {

      return document.querySelector('#result').textContent = user.name + ' sinto muito, mas o seu IMC é de ' + account + ' kg/m², por isso você está acima do peso e deveria emagrecer no mínimo 19 kg.';

    }
  }
}

/* Função de validação dos inputs */
const myName = document.querySelector('#name');

function validate() {

  const confirmName = myName.value;
  const confirmWeight = user.weight.value;
  const confirmHeight = user.height.value;

  if (confirmName == '') {

    document.querySelector("#msgName").textContent = 'Nome invalido';
    document.getElementById('name').classList.add('show-erro');

  } else {

    document.querySelector("#msgName").textContent = '';
    document.getElementById('name').classList.remove('show-erro');

  }

  if (confirmWeight == '') {

    document.querySelector('#msgWeight').textContent = 'Peso invalido';
    document.getElementById('weight').classList.add('show-erro');
    document.getElementById('weightSubtitle').classList.add('show-subtitle');

  } else {

    document.querySelector("#msgWeight").textContent = '';
    document.getElementById('weight').classList.remove('show-erro');
    document.getElementById('weightSubtitle').classList.remove('show-subtitle');

  }

  if (confirmHeight == '') {

    document.querySelector('#msgHeight').textContent = 'Altura invalida';
    document.getElementById('height').classList.add('show-erro');
    document.getElementById('heightSubtitle').classList.add('show-subtitle');

  } else {

    document.querySelector("#msgHeight").textContent = '';
    document.getElementById('height').classList.remove('show-erro');
    document.getElementById('heightSubtitle').classList.remove('show-subtitle');

  }

  if (confirmName != '' && confirmWeight != '' && confirmHeight != '') {

    document.querySelector('#result').textContent = imc.calculateIMC(user.weight.value, user.height.value);

  }
}

/* Salvando o nome do usuario */
function saveName() {

  const nameSave = myName.value;
  localStorage.setItem('nameUser', nameSave);

}
