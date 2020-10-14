import "./reset.css";
import "./style.css";

import boardController from "./boardcontroller";
import displayController from "./displaycontroller";

(function coordinator() {
  // functions
  function createProject(name) {
    boardController.createProject(name);
    displayController.renderNavBar(boardController.getBoard());
  }

  function createToDo(name, description, dueDate, priority, project) {
    boardController.createToDo(name, description, dueDate, priority, project);
    // add to DOM
    console.table(boardController.findProject("default").toDoList);
  }

  // cacheDom
  const createProjectBtn = document.querySelector("#create-project");
  const createToDoBtn = document.querySelector("#create-todo");

  const newProjectName = document.querySelector("#project-name").value;
  const newToDoName = document.querySelector("#todo-name").value;
  const newToDoDescription = document.querySelector("#todo-descr").value;
  const newToDoDate = document.querySelector("#todo-date").value;
  const newToDoPriority = document.querySelector("#todo-priority").value;
  const projectToAddTo = document.querySelector("#project-to-add-to").value;

  // add listeners
  createProjectBtn.addEventListener("click", () =>
    createProject(newProjectName)
  );
  createToDoBtn.addEventListener("click", () =>
    createToDo(
      newToDoName,
      newToDoDescription,
      newToDoDate,
      newToDoPriority,
      projectToAddTo
    )
  );

  // for testing
  boardController.createProject("default");
  boardController.createToDo(
    "Test",
    "This is a test",
    "anymtime",
    "no priority",
    "default"
  );

  console.table(boardController.findProject("default").toDoList);

  boardController.createToDo(
    "Test2",
    "This is a test",
    "anymtime",
    "no priority",
    "default"
  );

  console.table(boardController.findProject("default").toDoList);

  boardController.findProject("default").deleteToDo("Test2");

  console.table(boardController.findProject("default").toDoList);

  boardController.createProject("default2");

  console.table(boardController.getBoard());

  boardController.deleteProject("default2");

  console.table(boardController.getBoard());

  displayController.renderNavBar(boardController.getBoard());
})();
