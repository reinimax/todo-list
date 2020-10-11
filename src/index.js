import ToDo from "./todo.js";
import Project from "./project.js";

let board = [];

function createProject(name) {
    board.push(new Project(name));
}

function createToDo(name, description, dueDate, priority, project) {
    findProject(project).addToDo(new ToDo(name, description, dueDate, priority));
}

function findProject(project) {
    return board.find( (obj) => obj.name === project);
}

//for testing
createProject("default");
createToDo("Test", "This is a test", "anymtime", "no priority", "default");

console.table(findProject("default").toDoList);