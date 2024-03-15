//1
const person = {
    name:'John',
    age:'30',
};
console.log(person);
console.log(Object.prototype);

//2
 person.name = {
    firstName: 'Ivan',
    lastName: 'Duglas'
  };
console.log('First Name:', person.name.firstName);
console.log('Last Name:', person.name.lastName);
console.log('Age:', person.age);

//3
person.bio = function() {
console.log(`${this.name.firstName} ${this.name.lastName} is ${this.age} years old.`);
  }
person.bio();

//4
person.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name.firstName}.`);
  };
  person.introduceSelf();

//5

function createPerson(name) {

    return {
    name:name,
    introduceSelf: function() {
    console.log(`Hi! I'm ${this.name}.`);
    }
  };
    
    }
    const Person1 = createPerson('Person1');
    const Person2 = createPerson('Person2');

    Person1.introduceSelf();
    Person2.introduceSelf();

//6
function Person(name) {
    this.name = name;
  this.introduceSelf = function() {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }
  let mary = new Person('Mary');
  let tom = new Person('Tom');
  mary.introduceSelf();
  tom.introduceSelf();

 mary.hasOwnProperty("prop");
  console.log(`Does mary have the property 'prop'? ${mary.hasOwnProperty("prop")}`);

  //7
//   ingredients:
//   6 fluid ounces gin,
//   1 dash dry vermouth,(1 мл, 10 крапель або 1/5 чайної ложки.)
//   1 fluid ounce brine from olive jar,
//   4 stuffed green olives;
  
let DirtyMartini = {
    english_please: function() {
      console.log(`ingredients:
        6 fluid ounces gin
        1 dash dry vermouth (0.0351951ml) 
        1 fluid ounce brine from olive jar
        4 stuffed green olives`);
    },
    excuse_my_french: function() {
      console.log(`ingrédients:
        170.4786 ml de gin
        1 trait de vermouth sec (0.0351951ml) 
        28.4131 ml de saumure du pot d'olive
        4 olives vertes farcies`);
    }
  };
  DirtyMartini.english_please();
  DirtyMartini.excuse_my_french();
  
 