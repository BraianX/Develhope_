// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000
//function calculateSalary(role) {
//}...


/* const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);

function calculateSalary(role) {
  let result = 0;
  switch (role) {
    case 'ceo':
      result = 2200 + '€';
      break;
    case 'manager':
      result = 1800 + '€';
      break;
    case 'cto':
      result = 1800 + '€';
      break;
    case 'developer':
      result = 1500 + '€';
      break;

    default:
      result =  1000 + '€';
    
  }
  return result
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);*/








//esercizio 2

function nicknameMap(persone) {
  let nicknames = [];
  for (let i = 0; i < persone.length; i++) {
    nicknames.push(persone[i].name + '-' + persone[i].age);
  }
  return nicknames;
}

const persone = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const nicknames = nicknameMap(persone);
console.log(persone);
console.log(nicknames);
