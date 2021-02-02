/* Função para cancelar o envio do form e conferir a validação dos inputs*/
function sendValidation(event) {
  event.preventDefault();
  validation.validate();
};

const user = {
  name: document.querySelector('#name'),
  weight: document.querySelector('#weight'),
  height: document.querySelector('#height')
};

const IMC_RESULTS = {
  THINNESS: 'Magro',
  NORMAL: 'Normal',
  OVERWEIGHT: 'Gordo',
  OBESITY: 'Obeso'
};

function getImcResult(result) {
  if (result <= 18.5) {
    return IMC_RESULTS.THINNESS;
  }
  if (result > 18.5 && result <= 24.9) {
    return IMC_RESULTS.NORMAL;
  }
  if (result > 24.9 && result <= 30) {
    return IMC_RESULTS.OVERWEIGHT;
  }
  if (result > 30) {
    return IMC_RESULTS.OBESITY;
  }
};

const imc = {
  calculateImc(weight, height) {

    return Math.ceil(weight / (height * height));

  },
  resultImc(result) {
    const imcResult = getImcResult(result);
    const nameUser = user.name.value;

    if (imcResult === IMC_RESULTS.THINNESS) {
      render.showResultMessage(nameUser, ' seu IMC ' + result + ' kg/m² você precisa ganhar peso.');
      render.showTipMessage('Para ganhar peso de forma saudável e sem ganhar barriga, você deve praticar atividade física, aumentar o volume das refeições e comer a cada 3 horas. Para isso, você deve aumentar o consumo de alimentos integrais e fontes de proteína, como carnes magras, peixes, ovos, arroz integral, feijão e aveia.');
    }
    if (imcResult === IMC_RESULTS.NORMAL) {
      render.showResultMessage(nameUser, ' seu IMC ' + result + ' kg/m² você está dentro do peso adequado!');
      render.showTipMessage('Continue tendo cuidado com a alimentação e praticando atividade física regularmente para manter o peso e prevenir doenças.');
    }
    if (imcResult === IMC_RESULTS.OVERWEIGHT) {
      render.showResultMessage(nameUser, ' seu IMC ' + result + ' kg/m² você está acima do peso.');
      render.showTipMessage('Você deve ainda falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer comendo bem, mas além da dieta é também importante fazer exercícios físicos');
    }
    if (imcResult === IMC_RESULTS.OBESITY) {
      render.showResultMessage(' seu IMC ' + result + ' kg/m² você está muito acima do peso.');
      render.showTipMessage('Você deve ainda falar com seu médico para fazer exames de sangue para saber se o seu colesterol e triglicerídeos estão bem. Um nutricionista também pode te ajudar a emagrecer comendo bem, mas além da dieta é também importante fazer exercícios físicos');
    }
  }
};

const render = {
  showResultMessage(name, msg) {
    return document.querySelector('#result').textContent = name + msg;
  },
  showTipMessage(msg) {
    return document.querySelector('#tip').textContent = msg;
  },
  showNameInvalid(string) {
    document.querySelector("#msgName").textContent = string;
  },
  showWeightInvalid(string) {
    document.querySelector("#msgWeight").textContent = string;
  },
  showHeightInvalid(string) {
    document.querySelector("#msgHeight").textContent = string;
  }
}

const paint = {
  paintName() {
    document.getElementById('name').classList.add('show-erro');
  },
  noPaintName() {
    document.getElementById('name').classList.remove('show-erro');
  },
  paintWeight() {
    document.getElementById('weight').classList.add('show-erro');
    document.getElementById('weightSubtitle').classList.add('show-subtitle');
  },
  noPaintWeight() {
    document.getElementById('weight').classList.remove('show-erro');
    document.getElementById('weightSubtitle').classList.remove('show-subtitle');
  },
  paintHeight() {
    document.getElementById('height').classList.add('show-erro');
    document.getElementById('heightSubtitle').classList.add('show-subtitle');
  },
  noPaintHeight() {
    document.getElementById('height').classList.remove('show-erro');
    document.getElementById('heightSubtitle').classList.remove('show-subtitle');
  },
  paintErro() {
    document.getElementById('erro').classList.add('msg-erro');
  },
  noPaintErro() {
    document.getElementById('erro').classList.remove('msg-erro');
  },
  hidenForm() {
    document.getElementById('form').classList.add('form-none');
    document.getElementById('btn').classList.add('show-btn');
    document.getElementById('resultGruop').classList.add('result-gruop');
  },
  showForm() {
    document.getElementById('form').classList.remove('form-none');
    document.getElementById('btn').classList.remove('show-btn');
    document.getElementById('resultGruop').classList.remove('result-gruop');
    render.showResultMessage('', '');
    render.showTipMessage('');
  }
};

/* Função de validação dos inputs */

const validation = {
  validateField(value) {
    if (value != '') {
      return true;
    } else {
      return false;
    }
  },
  validate() {
    const resultImcUser = imc.calculateImc(user.weight.value, user.height.value);

    const isValidName = this.validateField(user.name.value);
    const isValidWeight = this.validateField(user.weight.value);
    const isValidHeight = this.validateField(user.height.value);

    if (isValidName && isValidWeight && isValidHeight) {
      imc.resultImc(resultImcUser);
      paint.hidenForm();
    }

    if (isValidName) {
      render.showNameInvalid('');
      paint.noPaintName();
      paint.noPaintErro();

    } else {
      render.showNameInvalid('Nome invalido');
      paint.paintName();
      paint.paintErro();
    }

    if (isValidWeight) {
      render.showWeightInvalid('');
      paint.noPaintWeight();
      paint.noPaintErro();

    } else {
      render.showWeightInvalid('Peso invalido');
      paint.paintWeight();
      paint.paintErro();
    }

    if (isValidHeight) {
      render.showHeightInvalid('');
      paint.noPaintHeight();
      paint.noPaintErro();
    } else {
      render.showHeightInvalid('Altura invalida');
      paint.paintHeight();
      paint.paintErro();
    }

  }
}

const reset = {
  resetName() {
    return user.name.value = '';
  },
  resetWeight() {
    return user.weight.value = '';
  },
  resetHeight() {
    return user.height.value = '';
  }
}

/* Refazendo IMC */
function returnToForm() {
  paint.showForm();
  reset.resetName();
  reset.resetWeight();
  reset.resetHeight();
}