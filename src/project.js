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

  findToDo(item) {
    return this.toDoList.find((obj) => obj.title === item);
  }

  deleteToDo(item) {
    const indexToDelete = this.toDoList.indexOf(this.findToDo(item));
    this.toDoList.splice(indexToDelete, 1);
  }
}
