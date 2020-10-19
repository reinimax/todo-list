import "./reset.css";
import "./style.css";

import PubSub from "pubsub-js";

import boardController from "./boardcontroller";
import displayController from "./displaycontroller";

(function coordinator() {
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

  let currentProject;

  // functions
  function createProject(name) {
    boardController.createProject(name);
    displayController.renderNavBar(boardController.getBoard());
  }

  function changeProject(project) {
    currentProject = project;
  }

  function deleteProject(index) {
    const temp = boardController.getBoard();
    const projectToDelete = temp[index];

    if (projectToDelete === currentProject) {
      displayController.clearToDoList();
    }

    boardController.deleteProject(index);
    displayController.renderNavBar(boardController.getBoard());
  }

  function createToDo(name, description, dueDate, priority, project) {
    boardController.createToDo(name, description, dueDate, priority, project);
    changeProject(boardController.findProject(project));
    displayController.renderToDoList(currentProject);
  }

  function deleteToDo(target) {
    currentProject.deleteToDo(target);
    displayController.renderToDoList(currentProject);
  }

  // Subscriptions
  const DELETE_PROJECT_CLICKED = "delete-project-clicked";
  PubSub.subscribe(DELETE_PROJECT_CLICKED, (_tag, index) => {
    deleteProject(index);
  });

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

  // for testing/init
  boardController.createProject("default");
  changeProject(boardController.findProject("default"));

  boardController.createToDo(
    "Lets see",
    "This is a test",
    "anymtime",
    "no priority",
    "default"
  );

  boardController.createToDo(
    "Test2",
    "This is a test",
    "anymtime",
    "no priority",
    "default"
  );

  displayController.renderNavBar(boardController.getBoard());
  displayController.renderToDoList(currentProject);
})();
