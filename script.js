//Const
const EN = '`1234567890-=qwertyuiop[]asdfghjkl;\'\\zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:"|ZXCVBNM<>?';
const RU = 'ё1234567890-=йцукенгшщзхъфывапролджэ\\ячсмитьбю.Ё!"№;%:?*()_+ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭ/ЯЧСМИТЬБЮ,';

//Creating objects
const inputSGTIN = document.querySelector('.input-sgtin');
const swapButton = document.querySelector('.swap-button')
const cutButton = document.querySelector('.cut-button');
const resultArea = document.querySelector('.result-area');

//Functions
const swap = () => {
  resultArea.value = '';
  for (let i = 0; i < inputSGTIN.value.length; i++) {
    resultArea.value = resultArea.value + EN[RU.indexOf(inputSGTIN.value[i])];
  }
  if (resultArea.value.includes('undefined')) {
    resultArea.value = 'ОШИБКА, введите корректный SGTIN';
  }
}

const cut = () => {
  resultArea.value = inputSGTIN.value.slice(2, 16) + inputSGTIN.value.slice(18,31)
}

//Listeners
cutButton.addEventListener('click', cut);
swapButton.addEventListener('click', swap);