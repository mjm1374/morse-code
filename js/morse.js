var abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
var morsecode =[
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..', '&nbsp; &nbsp; &nbsp; '
  ];
var morseArray = new Array();
var englishArray = new Array();

var length = abc.length;

for(var i = 0;i < length;i++){
    morseArray[morsecode[i]] = abc[i];
    englishArray[abc[i]] = morsecode[i];
}

function english2morse(value){
  let inputText = value;
  let inputLength = inputText.length;
  inputText = inputText.toUpperCase();
  let outputText = "";

  for (var i = 0; i < inputLength; i++) {
    console.log(englishArray[inputText[i]]);
    outputText = outputText + " " + englishArray[inputText[i]];
  }

  $('#morse').html(outputText);

  
}
//console.log(morseArray['-...']);
//console.log(englishArray['B']);