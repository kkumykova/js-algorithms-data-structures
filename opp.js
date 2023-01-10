// Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.
let dog1 = {
    name: "Dog",
    numLegs: 4
  };

// Use Dot Notation to Access the Properties of an Object
let dog2 = {
    name: "Spot",
    numLegs: 4
  };
  // Only change code below this line

  console.log(dog2.name, dog2.numLegs)

  // Create a Method on an Object
  /*
  Objects can have a special type of property, called a method. Methods are properties that are functions. This adds different behavior to an object. 
  Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.
  */
  let dog3 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
  
  };
  dog3.sayLegs();

  // Make Code More Reusable with the this Keyword
  /*
  this refers to the object that the method is associated with. If the object's name is changed, it is not necessary to find all the references to that object in the code.
  It makes the code reusable and easier to read.
  Modify the dog.sayLegs method to remove any references to dog.
  */
  let dog4 = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  dog4.sayLegs();

  // Define a Constructor Function
  /*
  Constructors are functions that create new objects. They define properties and behaviours that will belong to the new object.
  Constructors can be seen as a blueprint for creation of new objects.
  Constrictors follow a few conventions:
  Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
  Constructors use the keywords this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
  Constructors define properties and behaviours instead of returning a value as other functions might.
  Create a constructor, Dog, with properties name, color, and numLegs that are set to a string, a string, and a number, respectively.
  */
  function Dog() {
    this.name = "Albert";
    this.color = "blue";
    this.numLegs = 3;
  }
