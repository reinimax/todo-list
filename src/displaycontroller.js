import PubSub from "pubsub-js";

import deleteIcon from "./recycle-bin-line.svg";

const displayController = (() => {
  // cacheDOM
  const newProjectBtn = document.querySelector("#new-project");
  const newToDoBtn = document.querySelector("#new-todo");
  const createProjectBtn = document.querySelector("#create-project");
  const createToDoBtn = document.querySelector("#create-todo");
  const navBarLinks = document.querySelector("#navbar-links");
  const newProjectForm = document.querySelector("#new-project-form");
  const newToDoForm = document.querySelector("#new-todo-form");
  const projectDropdown = document.querySelector("#project-to-add-to");
  const toDoList = document.querySelector("#todo-list");
  const cancelBtns = document.querySelectorAll(".cancel");

  // utility functions
  function setVisible(popupBox) {
    popupBox.classList.add("visible");
  }

  function setInvisible(popupBox) {
    popupBox.classList.remove("visible");
  }

  function clearDisplayElement(displayElement) {
    while (displayElement.childNodes.length > 0) {
      displayElement.lastChild.remove();
    }
  }

  function clearToDoList() {
    // firstElementChild === tbody
    while (toDoList.firstElementChild.childNodes.length > 1) {
      toDoList.firstElementChild.lastChild.remove();
    }
  }

  // add listeners
  newProjectBtn.addEventListener("click", () => setVisible(newProjectForm));
  newToDoBtn.addEventListener("click", () => setVisible(newToDoForm));
  createProjectBtn.addEventListener("click", () =>
    setInvisible(newProjectForm)
  );
  createToDoBtn.addEventListener("click", () => setInvisible(newToDoForm));
  cancelBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      setInvisible(e.currentTarget.parentNode.parentNode);
    })
  );

  // render

  function renderProjectDropdown(arrayToRender) {
    clearDisplayElement(projectDropdown);
    for (let i = 0; i < arrayToRender.length; i += 1) {
      const option = document.createElement("option");
      option.textContent = arrayToRender[i].name;
      option.value = arrayToRender[i].name;
      projectDropdown.appendChild(option);
    }
  }

  function renderToDoList(projectToRender) {
    clearToDoList();
    for (let i = 0; i < projectToRender.toDoList.length; i += 1) {
      const newRow = document.createElement("tr");

      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");

      const toDoName = document.createElement("td");
      toDoName.textContent = projectToRender.toDoList[i].title;

      const toDoDescr = document.createElement("td");
      toDoDescr.textContent = projectToRender.toDoList[i].description;

      const toDoDate = document.createElement("td");
      toDoDate.textContent = projectToRender.toDoList[i].dueDate;

      const toDoPriority = document.createElement("td");
      toDoPriority.textContent = projectToRender.toDoList[i].priority;

      const deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("data-index", `${i}`);
      deleteBtn.setAttribute("class", "delete-btn");
      const deleteBtnIcon = document.createElement("img");
      deleteBtnIcon.setAttribute("src", deleteIcon);
      deleteBtnIcon.setAttribute("alt", "delete");
      deleteBtnIcon.setAttribute("class", "delete-icon");
      deleteBtn.appendChild(deleteBtnIcon);
      const DELETE_CLICKED = "delete-clicked";
      deleteBtn.addEventListener("click", (e) => {
        PubSub.publish(
          DELETE_CLICKED,
          e.currentTarget.getAttribute("data-index")
        );
      });

      newRow.appendChild(checkbox);
      newRow.appendChild(toDoName);
      newRow.appendChild(toDoDescr);
      newRow.appendChild(toDoDate);
      newRow.appendChild(toDoPriority);
      newRow.appendChild(deleteBtn);

      // firstElementChild === tbody
      toDoList.firstElementChild.appendChild(newRow);
    }
  }

  function renderNavBar(arrayToRender) {
    clearDisplayElement(navBarLinks);
    for (let i = 0; i < arrayToRender.length; i += 1) {
      const CURRENT_PROJECT = arrayToRender[i];

      const container = document.createElement("div");

      const btn = document.createElement("button");
      btn.textContent = CURRENT_PROJECT.name;
      btn.setAttribute("class", "navbar-btn");
      btn.addEventListener("click", () => {
        const PROJECT_CHANGED = "project-changed";
        PubSub.publish(PROJECT_CHANGED, CURRENT_PROJECT);
        renderToDoList(CURRENT_PROJECT);
      });

      const deletePRoj = document.createElement("button");
      deletePRoj.setAttribute("data-index", `${i}`);
      deletePRoj.setAttribute("class", "delete-btn");
      const deleteBtnIcon = document.createElement("img");
      deleteBtnIcon.setAttribute("src", deleteIcon);
      deleteBtnIcon.setAttribute("alt", "delete");
      deleteBtnIcon.setAttribute("class", "delete-icon");
      deletePRoj.appendChild(deleteBtnIcon);
      const DELETE_PROJECT_CLICKED = "delete-project-clicked";
      deletePRoj.addEventListener("click", (e) => {
        PubSub.publish(
          DELETE_PROJECT_CLICKED,
          e.currentTarget.getAttribute("data-index")
        );
      });

      container.appendChild(btn);
      container.appendChild(deletePRoj);

      navBarLinks.appendChild(container);
    }
  }

  return { renderNavBar, renderProjectDropdown, renderToDoList, clearToDoList };
})();

export default displayController;
