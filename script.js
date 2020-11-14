const data = { name: "chandra", age: 23 };
function printName(...args) {
  console.log(this.name, +" " + this.age + " " + args[0]);
}

printName.bind(data, [1])();
