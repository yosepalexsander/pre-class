const names = document.getElementById('input-name').value;
const age = document.getElementById('input-age').value;
const summary = document.getElementById('input-summary').value;
const address = document.getElementById('input-address').value;

class User {
  constructor(name, age,summary, address) {
    this.name = name;
    this.age = age;
    this.summary = summary;
    this.address = address;
  }
}
let tasks = [];

class Task {
  constructor(id, desc) {
    this.id = id;
    this.desc = desc;
    this.isDone = false;
  }
}

const task = new Task(Date.now(), "mencuci");
tasks.push(task);

function display() {
  const user = new User(names, age, summary, address);
  
  document.getElementById('display-name').innerHTML = user.name
}