import ToDo from "./todo.js";
import Project from "./project.js";
import displayController from "./displaycontroller.js"

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

function deleteProject(project) {
    const indexToDelete = board.indexOf(findProject(project));
    board.splice(indexToDelete, 1);
}

//for testing
createProject("default");
createToDo("Test", "This is a test", "anymtime", "no priority", "default");

console.table(findProject("default").toDoList);

createToDo("Test2", "This is a test", "anymtime", "no priority", "default");

console.table(findProject("default").toDoList);

findProject("default").deleteToDo("Test2");

console.table(findProject("default").toDoList);

createProject("default2");

console.table(board);

deleteProject("default2");

console.table(board);

displayController.renderNavBar(board);