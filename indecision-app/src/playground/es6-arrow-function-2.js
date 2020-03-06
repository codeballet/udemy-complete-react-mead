// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments)
  return a + b
}
console.log(add(55, 1, 999))


// this keyword - no longer bound

const user = {
  name: 'Johan',
  cities: ['London', 'Stockholm', 'Beijing'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city)
    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city)
    // })
  }
}
console.log(user.printPlacesLived())

// Challenge area

const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy)
  }
}

console.log(multiplier.multiply())