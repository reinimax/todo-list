import "./reset.css";
import "./style.css";

import PubSub from "pubsub-js";

import boardController from "./boardcontroller";
import displayController from "./displaycontroller";

(function coordinator() {
  let currentProject = boardController.findProject("default");

  // cacheDom
  const createProjectBtn = document.querySelector("#create-project");
  const createToDoBtn = document.querySelector("#create-todo");
  const newToDoBtn = document.querySelector("#new-todo");

  const newProjectName = document.querySelector("#project-name");
  const newToDoName = document.querySelector("#todo-name");
  const newToDoDescription = document.querySelector("#todo-descr");
  const newToDoDate = document.querySelector("#todo-date");
  const newToDoPriority = document.querySelector("#todo-priority");
  const projectToAddTo = document.querySelector("#project-to-add-to");

  // functions
  function deleteToDo(target) {
    currentProject.deleteToDo(target);
    displayController.renderToDoList(currentProject);
  }

  function createProject(name) {
    boardController.createProject(name);
    displayController.renderNavBar(boardController.getBoard());
  }

  function changeProject(project) {
    currentProject = project;
  }

  function createToDo(name, description, dueDate, priority, project) {
    boardController.createToDo(name, description, dueDate, priority, project);
    changeProject(boardController.findProject(project));
    displayController.renderToDoList(currentProject);
  }

  // Subscriptions
  const DELETE_CLICKED = "delete-clicked";
  PubSub.subscribe(DELETE_CLICKED, (_tag, target) => {
    deleteToDo(target);
  });

  const PROJECT_CHANGED = "project-changed";
  PubSub.subscribe(PROJECT_CHANGED, (_tag, proj) => {
    changeProject(proj);
  });

  // add listeners
  createProjectBtn.addEventListener("click", () =>
    createProject(newProjectName.value)
  );
  createToDoBtn.addEventListener("click", () =>
    createToDo(
      newToDoName.value,
      newToDoDescription.value,
      newToDoDate.value,
      newToDoPriority.value,
      projectToAddTo.value
    )
  );
  newToDoBtn.addEventListener("click", () =>
    displayController.renderProjectDropdown(boardController.getBoard())
  );

  // for testing
  boardController.createProject("default");
  boardController.createToDo(
    "Lets see",
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
