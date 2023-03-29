/* const person = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  }

  // Print values of person using Object.keys

  */

const person = {
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
}

Object.keys(person).forEach((keys) => {
    console.log(`${keys}: ${person[keys]}`)
});