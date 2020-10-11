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

    deleteToDo(item) {
        //delete an item
    }
}