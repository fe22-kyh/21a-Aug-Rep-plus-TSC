/* base types */
/*let address: string;
let age: number;
let isAdult: boolean;

address = "Hey batman";

console.log(address);*/

const people: Person[] = [ // Array<Person> En generisk lista av Person
  {
    address: "Gretagatan 75",
    age: 32,
    isAdult: true,
    name: "Greta"
  },
  {
    address: "Gretagatan 75",
    age: 32,
    isAdult: true,
    name: "Greta",
    kids: 2
  },
  {
    address: "Batmansgatan 32",
    age: 67,
    isAdult: false
  }
];

const yvesPerson: Person = { // En object literal med explicit typning
  address: "Yvesgatan",
  isAdult: true,
  phone: "123 234 52",
  age: 13
}

people.push(yvesPerson);
