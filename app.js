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
  alert('Wrong. She doesn\t know how');
} else if (answer2 === 'no' || answer2 === 'n'){
  alert('Right. But she can read some characters because they are similar to Chinese characters!');
} else {
  alert('Tha\s not an answer!');
};
