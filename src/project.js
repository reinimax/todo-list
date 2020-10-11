export default class Project {
    constructor(name) {
        this.name = name;
        this.toDoList = [];
    }

    set name(newName) {
        this.name = newName;
    }

    addToDo(item) {
        this.toDoList.push(item);
    }

    deleteToDo(item) {
        //delete an item
    }
}