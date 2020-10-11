import "./reset.css";
import "./style.css";

import ToDo from "./todo.js";
import Project from "./project.js";
import displayController from "./displaycontroller.js"

const boardController = (() => {
    let board = [];

    function getBoard() {
        return board;
    }

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

    return {getBoard, createProject, createToDo, findProject, deleteProject};
})();

//this will become the coordinator for the whole thing
const createProjectBtn = document.querySelector("#create-project");
const createToDoBtn = document.querySelector("#create-todo");

const newProjectName = document.querySelector("#project-name");

createProjectBtn.addEventListener("click", () => createProject(newProjectName.value) );
createToDoBtn.addEventListener("click", () => createToDo(name, description, dueDate, priority, project) );

function createProject(name) {
    boardController.createProject(name);
    displayController.renderNavBar(boardController.getBoard());
}

function createToDo(name, description, dueDate, priority, project) {
    //not yet implemented
}

//for testing
boardController.createProject("default");
boardController.createToDo("Test", "This is a test", "anymtime", "no priority", "default");

console.table(boardController.findProject("default").toDoList);

boardController.createToDo("Test2", "This is a test", "anymtime", "no priority", "default");

console.table(boardController.findProject("default").toDoList);

boardController.findProject("default").deleteToDo("Test2");

console.table(boardController.findProject("default").toDoList);

boardController.createProject("default2");

console.table(boardController.getBoard());

boardController.deleteProject("default2");

console.table(boardController.getBoard());

displayController.renderNavBar(boardController.getBoard());