export default class Project {
    constructor(name) {
        this.name = name;
        this.toDoList = [];
    }

    get name() {
        return this._name;
    }
    
    set name(newName) {
        this._name = newName;
    }

    addToDo(item) {
        this.toDoList.push(item);
    }

    findToDo(item) {
        return this.toDoList.find( (obj) => obj.name === item);
    }

    deleteToDo(item) {
        const indexToDelete = this.toDoList.indexOf(this.findToDo(item));
        this.toDoList.splice(indexToDelete, 1);
    }
}