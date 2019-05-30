class User {
  fullName: string
  firstName: string
  lastName: string

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + '' + lastName
  }
}

interface Person {
  firstName: string
  lastName: string
}

function greeter(person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`
}

let user = new User('Hang', 'Gao')

console.log(greeter(user))

let foo: [string, number]
foo = ['12', 12]
foo[0].substr(1)
