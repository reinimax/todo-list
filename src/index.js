import "./reset.css";
import "./style.css";

import PubSub from "pubsub-js";

import boardController from "./boardcontroller";
import displayController from "./displaycontroller";

(function coordinator() {
  // cacheDom
  const saveProjectBtn = document.querySelector("#save-project");
  const saveToDoBtn = document.querySelector("#save-todo");
  const newProjectBtn = document.querySelector("#new-project");
  const newToDoBtn = document.querySelector("#new-todo");

  const projectName = document.querySelector("#project-name");
  const toDoName = document.querySelector("#todo-name");
  const toDoDescription = document.querySelector("#todo-descr");
  const toDoDate = document.querySelector("#todo-date");
  const toDoPriority = document.querySelector("#todo-priority");
  const projectToAddTo = document.querySelector("#project-to-add-to");

  // variables
  let currentProject;
  let isNewOrEdit;

  // functions
  function changeCurrentProject(project) {
    if (currentProject !== undefined) currentProject.deactivate();
    currentProject = project;
    currentProject.activate();
    displayController.setActive(
      boardController.findIndexOfProject(currentProject.getName())
    );
  }

  function createProject(name) {
    boardController.createProject(name);
    displayController.renderNavBar(boardController.getBoard());
  }

  let projectToEdit;
  function updateProjectName(index) {
    const board = boardController.getBoard();
    projectToEdit = board[index];
    projectName.value = projectToEdit.getName();
  }

  function editProject() {
    projectToEdit.setName(projectName.value);
    displayController.renderNavBar(boardController.getBoard());
  }

  function deleteProject(index) {
    const board = boardController.getBoard();
    const projectToDelete = board[index];

    boardController.deleteProject(index);

    if (projectToDelete === currentProject) {
      // if the current project is deleted, make the first project in the list the current one
      if (board.length > 0) {
        changeCurrentProject(board[0]);
        displayController.renderToDoList(currentProject);
      } else {
        displayController.clearToDoList();
      }
    }

    displayController.renderNavBar(boardController.getBoard());
  }

  function createToDo(name, description, dueDate, priority, project) {
    boardController.createToDo(name, description, dueDate, priority, project);
    changeCurrentProject(boardController.findProject(project));
    displayController.renderToDoList(currentProject);
  }

  function deleteToDo(target) {
    currentProject.deleteToDo(target);
    displayController.renderToDoList(currentProject);
  }

  let toDoToEdit;
  function updateToDo(index) {
    toDoToEdit = currentProject.toDoList[index];
    toDoName.value = toDoToEdit.title;
    toDoDescription.value = toDoToEdit.description;
    toDoDate.value = toDoToEdit.dueDate;
    toDoPriority.value = toDoToEdit.priority;
    projectToAddTo.value = currentProject.getName();
  }

  function editToDo() {
    toDoToEdit.title = toDoName.value;
    toDoToEdit.description = toDoDescription.value;
    toDoToEdit.dueDate = toDoDate.value;
    toDoToEdit.priority = toDoPriority.value;

    // if the user changed the project
    if (projectToAddTo.value !== currentProject.getName()) {
      // delete the todo from the old project
      deleteToDo(currentProject.findToDoIndex(toDoToEdit));
      // save the todo in the new project
      createToDo(
        toDoToEdit.title,
        toDoToEdit.description,
        toDoToEdit.dueDate,
        toDoToEdit.priority,
        projectToAddTo.value
      );
    }
  }

  // Subscriptions
  const DELETE_PROJECT_CLICKED = "delete-project-clicked";
  PubSub.subscribe(DELETE_PROJECT_CLICKED, (_tag, index) => {
    deleteProject(index);
  });

  const DELETE_TODO_CLICKED = "delete-todo-clicked";
  PubSub.subscribe(DELETE_TODO_CLICKED, (_tag, target) => {
    deleteToDo(target);
  });

  const PROJECT_CHANGED = "project-changed";
  PubSub.subscribe(PROJECT_CHANGED, (_tag, proj) => {
    changeCurrentProject(proj);
  });

  const EDIT_PROJECT_CLICKED = "edit-project-clicked";
  PubSub.subscribe(EDIT_PROJECT_CLICKED, (tag, proj) => {
    updateProjectName(proj);
    isNewOrEdit = tag;
  });

  const EDIT_TODO_CLICKED = "edit-todo-clicked";
  PubSub.subscribe(EDIT_TODO_CLICKED, (tag, proj) => {
    updateToDo(proj);
    isNewOrEdit = tag;
  });

  // add listeners
  saveProjectBtn.addEventListener("click", () => {
    if (isNewOrEdit === "new-project-clicked") {
      createProject(projectName.value);
    } else if (isNewOrEdit === "edit-project-clicked") {
      editProject();
    }
  });
  saveToDoBtn.addEventListener("click", () => {
    if (isNewOrEdit === "new-todo-clicked") {
      createToDo(
        toDoName.value,
        toDoDescription.value,
        toDoDate.value,
        toDoPriority.value,
        projectToAddTo.value
      );
    } else if (isNewOrEdit === "edit-todo-clicked") {
      editToDo();
    }
  });
  newProjectBtn.addEventListener("click", () => {
    isNewOrEdit = "new-project-clicked";
  });
  newToDoBtn.addEventListener("click", () => {
    displayController.renderProjectDropdown(boardController.getBoard());
    isNewOrEdit = "new-todo-clicked";
  });

  // init
  boardController.createProject("default");
  displayController.renderNavBar(boardController.getBoard());
  changeCurrentProject(boardController.findProject("default"));

  boardController.createToDo(
    "Test",
    "This is a test",
    "2020-10-31",
    "3",
    "default"
  );

  displayController.renderToDoList(currentProject);
})();
