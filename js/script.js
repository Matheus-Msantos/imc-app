/* Função para cancelar o envio do form e conferir a validação dos inputs*/

function dontSend(event) {
    event.preventDefault();
    validate();
    saveName();
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
    /* 
    showTip() {
        const tipThinnes = document.querySelector('#tip').textContent = ' De acordo com a sua altura e peso deveria ser no mínimo 66 kg. Assim, para ganhar peso de forma saudável e sem ganhar barriga, você deve continuar praticando atividade física, aumentar o volume das refeições e comer a cada 3 horas. Para isso, você deve ingerir cerca de 3146 kcal por dia e aumentar o consumo de alimentos integrais e fontes de proteína, como carnes magras, peixes, ovos, arroz integral, feijão e aveia.';

        const tipNormal = document.querySelector('#tip').textContent = ' De acordo com a sua altura e peso pode variar entre 66 kg e 89 kg, por isso continue tendo cuidado com a alimentação e praticando atividade física regularmente para manter o peso e prevenir doenças.';

        const tipOverweight = document.querySelector('#tip').textContent = ' O seu peso ideal pode variar entre 66 kg e 89 kg por isso para emagrecer com saúde é importante comer mais frutas e verduras além de praticar exercício físico entre 2 e 3 vezes por semana, ingerindo 2904 calorias por dia. Você deve ainda falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer';

        const tipObesity = document.querySelector('#tip').textContent = ' O seu peso ideal pode variar entre 66 kg e 89 kg por isso para emagrecer com saúde é importante comer mais frutas e verduras além de praticar exercício físico entre 2 e 3 vezes por semana, ingerindo 3267 calorias por dia.Você deve ainda falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer';
    }
    */
}

/* Função de validação dos inputs */
const myName = document.querySelector('#name');

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