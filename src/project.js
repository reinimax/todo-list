import ToDo from "./todo";

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

  findToDoIndex(title) {
    return this.toDoList.findIndex((item) => item.title === title);
  }

  deleteToDo(index) {
    this.toDoList.splice(index, 1);
  }
}
