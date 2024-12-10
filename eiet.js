class MyClass {
  #privateField;

  constructor(value) {
    this.#privateField = value;
  }

  setPrivateField(value) {
    this.#privateField = value;
  }

  getPrivateField() {
    return this.#privateField;
  }
}

const myObject = new MyClass(42);
console.log(myObject.getPrivateField()); // Outputs: 42
myObject.setPrivateField(100);
console.log(myObject.getPrivateField()); // Outputs: 100
