export default class Project {
  constructor(name) {
    this.name = name;
    this.toDoList = [];
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    this.name = newName;
  }

  addToDo(item) {
    this.toDoList.push(item);
  }

  deleteToDo(index) {
    this.toDoList.splice(index, 1);
  }
}
