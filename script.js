//Const
const EN = '`1234567890-=qwertyuiop[]asdfghjkl;\'\\zxcvbnm,./~!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:"|ZXCVBNM<>?';
const RU = 'ё1234567890-=йцукенгшщзхъфывапролджэ\\ячсмитьбю.Ё!"№;%:?*()_+ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭ/ЯЧСМИТЬБЮ,';

//Creating objects
const inputSGTIN = document.querySelector('.input-sgtin');
const swapButton = document.querySelector('.swap-button')
const cutButton = document.querySelector('.cut-button');
const waterButton = document.querySelector('.water-button');
const resultArea = document.querySelector('.result-area');
const waterBarcodeImg = document.querySelector('.water-barcode-image')
const waterBarcodeSrcPrefix = 'https://barcode.tec-it.com/barcode.ashx?data=';
const waterBarcodeSrcSuffix = '&code=GS1DataMatrix&translate-esc=true&dataattributekey_2=&dataattributeval_2=&dataattributekey_3=&dataattributeval_3=&dataattributekey_4=&dataattributeval_4=&dataattributekey_5=&dataattributeval_5=&digitallink=&dmsize=Default&eclevel=L'
let waterBarcode = '';

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
  if (inputSGTIN.value[0] != '\\') {
    resultArea.value = inputSGTIN.value.slice(2, 16) + inputSGTIN.value.slice(18,31)
  } else {
    resultArea.value = inputSGTIN.value.slice(3, 17) + inputSGTIN.value.slice(19,32)
  }
}

const makeWaterBarcode = () => {
  waterBarcode = inputSGTIN.value;
  if (waterBarcode.length < 20) {
    waterBarcodeImg.src = waterBarcodeSrcPrefix + '010' + waterBarcode + '215PPRePSb0NHBJ93yNER' + waterBarcodeSrcSuffix;
  } else {
    waterBarcodeImg.src = waterBarcodeSrcPrefix + waterBarcode + waterBarcodeSrcSuffix;
  }
}

//Listeners
cutButton.addEventListener('click', cut);
swapButton.addEventListener('click', swap);
waterButton.addEventListener('click', makeWaterBarcode);