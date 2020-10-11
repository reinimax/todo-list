import ToDo from "./todo.js";
import Project from "./project.js";

let defaultProject = new Project("default");

function createToDo(name, description, dueDate, priority, project) {
    project.addToDo(new ToDo(name, description, dueDate, priority));
}

createToDo("Test", "This is a test", "anymtime", "no priority", defaultProject);

console.table(defaultProject.toDoList);