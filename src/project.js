export default class Project {
  constructor(name) {
    this.name = name;
    this.toDoList = [];
    this.active = false;
  }

  activate() {
    this.active = true;
  }

  deactivate() {
    this.active = false;
  }

  getStatus() {
    return this.active;
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

  findToDo(index) {
    return this.toDoList[index];
  }

  findToDoIndex(title) {
    return this.toDoList.findIndex((item) => item.title === title);
  }

  deleteToDo(index) {
    this.toDoList.splice(index, 1);
  }
}
