'use strict';
var answer1 = prompt('Does Fiona have a cat?').toLowerCase();
if (answer1 === 'yes' || answer1 === 'y') {
  alert('Wrong! Fiona actually does not have a pet!');
} else if (answer1 === 'no' || answer1 === 'n'){
  alert('Right. She really wants to have one.');
} else {
  alert('That\s not an answer!');
};
var answer2 = prompt('Can she speak Japanese?').toLowerCase();
if (answer2 === 'yes' || answer2 === 'y'){
  alert('Wrong. She does not know how to speak Japanese');
} else if (answer2 === 'no' || answer2 === 'n'){
  alert('Right. But she can read some characters because they are similar to Chinese characters!');
} else {
  alert('Tha\s not an answer!');
};
var answer3 = prompt('Does she play Pokemon Go?').toLowerCase();
if (answer3 === 'yes' || answer3 === 'y') {
  alert('Right.It\s fun...');
} else if (answer3 === 'no' || answer3 === 'n'){
  alert('Wrong. She is addicted to it recently.');
} else {
  alert('That\s not an answer.');
};
var answer4 = prompt('She plays guitar?').toLowerCase();
if (answer4 === 'yes' || answer4 === 'y'){
  alert('Incorrect! She doesn\t play.');
} else if (answer4 === 'no' || answer2 === 'n'){
  alert('Right. She actually plays piano.');
} else{
  alert('That\s not an answer.');
}
var answer5 = prompt('Does she love seafood?').toLowerCase();
if (answer5 === 'yes' || answer5 === 'y'){
  alert('Correct. She loves seafood!');
} else if (answer5 === 'no' || answer5 === 'n'){
  alert('Wrong. She goes to oysters happy hour every week.');
} else {
  alert('That\s not an answer!');
}
var i = 0;
while (answer6 !== 6 && i < 4){
  var answer6 = parseInt(prompt('What is her lucky number? '));
  if (answer6 % 1 != 0){
    alert('Please enter an integer.');
  } else if (parseInt(answer6) < 6 ) {
    alert('Too low!');
  } else if (parseInt(answer6) > 6 ) {
    alert ('Too high!');
  } else if (answer6 === 6){
    alert ('Correct!');
    break;
  }
  i++;
};
if (i >= 3){
  alert ('Too many tries');
}
var possibleColors = ['blue','black','gold','pink','purple'];
var i = 0;
while (i < 6 ){
  var answer7 = prompt('What is her favorite color?').toLowerCase();
  if (possibleColors.indexOf(answer7) === -1){
    alert('Try again.');
  } else{
    alert('That\s right!');
    break;
  }
  i++;
};

if (i >= 5) {
  alert('Too many tries. Her favorite colors include blue, black, gold, pink, and purple.');
}
var tally = 0;
if( answer1.toLowerCase === 'no' || answer1 === 'n'){
  tally = tally + 1;
}
if( answer2.toLowerCase === 'no' || answer2 === 'n'){
  tally = tally + 1;
}
if( answer3.toLowerCase === 'yes' || answer3 === 'y'){
  tally = tally + 1;
}
if( answer4.toLowerCase === 'no' || answer4 === 'n'){
  tally = tally + 1;
}
if( answer5.toLowerCase === 'yes' || answer5 === 'y'){
  tally = tally + 1;
}
if( answer6 === 6){
  tally = tally + 1;
}
if( possibleColors.indexOf(answer7) !== -1){
  tally = tally + 1;
}
alert('You got ' + tally + 'out of 7 questions correct! Better luck next time!');
