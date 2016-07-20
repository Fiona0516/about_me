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
  alert('Wrong. She doesn\t know how to speak Japanese');
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
if (answer4 === 'yes' || answer4 === 'y'){
  alert('Correct. She loves seafood!');
} else if (answer5 === 'no' || answer5 === 'n'){
  alert('Wrong. She goes to oysters happy hour every week.');
} else {
  alert('That\s not an answer!');
}
