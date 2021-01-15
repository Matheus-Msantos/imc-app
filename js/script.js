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
      document.querySelector('#tip').textContent = 'Para ganhar peso de forma saudável e sem ganhar barriga, você deve praticar atividade física, aumentar o volume das refeições e comer a cada 3 horas. Para isso, você deve aumentar o consumo de alimentos integrais e fontes de proteína, como carnes magras, peixes, ovos, arroz integral, feijão e aveia.';

      return ' seu IMC ' + account + ' kg/m² você precisa ganhar peso.';

    } else if (normal) {
      document.querySelector('#tip').textContent = 'Continue tendo cuidado com a alimentação e praticando atividade física regularmente para manter o peso e prevenir doenças.';

      return ' seu IMC ' + account + ' kg/m² você está dentro do peso adequado!';

    } else if (overweight) {
      document.querySelector('#tip').textContent = 'Você deve ainda falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer comendo bem, mas além da dieta é também importante fazer exercícios físicos'

      return ' seu IMC ' + account + ' kg/m² você está acima do peso.';

    } else if (obesity) {
      document.querySelector('#tip').textContent = 'Você deve ainda falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer comendo bem, mas além da dieta é também importante fazer exercícios físicos'

      return ' seu IMC ' + account + ' kg/m² você está muito acima do peso.';

    }

  }
}

/* Função de validação dos inputs */
const myName = document.querySelector('#name');

function validate() {
  const resultImcUser = imc.calculateIMC(user.weight.value, user.height.value);

  const confirmName = myName.value;
  const confirmWeight = user.weight.value;
  const confirmHeight = user.height.value;


  if (confirmName != '' && confirmWeight != '' && confirmHeight != '') {
    document.querySelector('#nameUser').textContent = user.name;
    document.querySelector('#result').textContent = resultImcUser;

    if (confirmName == '') {
      document.querySelector("#msgName").textContent = 'Nome invalido';
      document.getElementById('name').classList.add('show-erro');
      document.getElementById('erro').classList.add('msg-erro');
    } else {
      document.querySelector("#msgName").textContent = '';
      document.getElementById('name').classList.remove('show-erro');
      document.getElementById('erro').classList.remove('msg-erro');
    }

    if (confirmWeight == '') {
      document.querySelector('#msgWeight').textContent = 'Peso invalido';
      document.getElementById('weight').classList.add('show-erro');
      document.getElementById('weightSubtitle').classList.add('show-subtitle');
      document.getElementById('erro').classList.add('msg-erro');
    } else {
      document.querySelector("#msgWeight").textContent = '';
      document.getElementById('weight').classList.remove('show-erro');
      document.getElementById('weightSubtitle').classList.remove('show-subtitle');
      document.getElementById('erro').classList.remove('msg-erro');
    }

    if (confirmHeight == '') {
      document.querySelector('#msgHeight').textContent = 'Altura invalida';
      document.getElementById('height').classList.add('show-erro');
      document.getElementById('heightSubtitle').classList.add('show-subtitle');
      document.getElementById('erro').classList.add('msg-erro');
    } else {
      document.querySelector("#msgHeight").textContent = '';
      document.getElementById('height').classList.remove('show-erro');
      document.getElementById('heightSubtitle').classList.remove('show-subtitle');
      document.getElementById('erro').classList.remove('msg-erro');
    }

  }
}
/* Salvando o nome do usuario */
function saveName() {
  const nameSave = myName.value;
  localStorage.setItem('nameUser', nameSave);
}