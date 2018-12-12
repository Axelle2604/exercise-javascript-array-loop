// Map training

const floatNumbers = [5.5, -2.6, 7.7, -4.8, 9.9];

floatNumbers.map(function(num) {
  return console.log('Nombre sans virgule : ' + Math.floor(num));
});

floatNumbers.map(function(num) {
  return console.log('Nombre absolu : ' + Math.abs(num));
});

// Filter training

floatNumbers.filter(function(num) {
  if (num < 0 && num > -5) {
    return console.log('Nombre négatif supérieurs à -5 : ' + num);
  }
});

// Find training

const userNames = ['Roger', 'Joe', 'Bertrand', 'Georges', 'Bernard'];

userNames.find(function(name) {
  if (name[0] === 'B' && name[1] === 'e') {
    return console.log('Noms commençant par "Be" : ' + name);
  }
});

// Reduce training

const biggestNumber = floatNumbers.reduce(function(acc, num) {
  if (acc < num) {
    return num;
  }
  return acc;
}, floatNumbers[0]);

console.log('Le plus grand nombre est : ' + biggestNumber);

// Reduce advanced

const newTab = [1, 1, 1, 1, 26, 1, 1];

function nbOccurence(nb, tab) {
  return tab.filter(function(mot) {
    return mot === nb;
  }).length;
}

console.log(nbOccurence(0, newTab));

/*
const differentNb = newTab.reduce(function(acc, num) {
  if (nbOccurence(num, newTab) === 1) {
    return num;
  }
  return acc;
}, null);
*/

const differentNb = newTab.find(function(nb) {
  return nbOccurence(nb, newTab) === 1;
});

console.log(differentNb);
