/*const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const json = JSON.stringify(person);

console.log(json); // Should return: { id: 1, age: 25 }*/

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};


const json = JSON.parse(JSON.stringify(person, ['id', 'age']));

console.log(json); 