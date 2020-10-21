import PubSub from "pubsub-js";

import deleteIcon from "./recycle-bin-line.svg";
import editIcon from "./edit-round-line.svg";

const displayController = (() => {
  // cacheDOM
  const newProjectBtn = document.querySelector("#new-project");
  const newToDoBtn = document.querySelector("#new-todo");
  const saveProjectBtn = document.querySelector("#save-project");
  const saveToDoBtn = document.querySelector("#save-todo");
  const navBarLinks = document.querySelector("#navbar-links");
  const projectForm = document.querySelector("#new-project-form");
  const toDoForm = document.querySelector("#new-todo-form");
  const projectDropdown = document.querySelector("#project-to-add-to");
  const toDoList = document.querySelector("#todo-list");
  const cancelBtns = document.querySelectorAll(".cancel");

  // utility functions
  function setActive(index) {
    const btnList = navBarLinks.getElementsByClassName("navbar-btn");
    const btnArray = [...btnList];
    const btnToActivate = btnArray[index];
    btnArray.forEach((btn) => btn.classList.remove("active"));
    btnToActivate.classList.add("active");
  }

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

  function createIconBtn(alt, source, dataIndex) {
    const btn = document.createElement("button");
    btn.setAttribute("data-index", `${dataIndex}`);
    btn.setAttribute("class", "icon-btn");
    const btnIcon = document.createElement("img");
    btnIcon.setAttribute("src", source);
    btnIcon.setAttribute("alt", alt);
    btnIcon.setAttribute("class", "icon");
    btn.appendChild(btnIcon);
    return btn;
  }

  // add listeners
  newProjectBtn.addEventListener("click", () => setVisible(projectForm));
  newToDoBtn.addEventListener("click", () => setVisible(toDoForm));
  saveProjectBtn.addEventListener("click", () => setInvisible(projectForm));
  saveToDoBtn.addEventListener("click", () => setInvisible(toDoForm));
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

      const editCell = document.createElement("td");
      const editBtn = createIconBtn("edit", editIcon, i);
      const EDIT_TODO_CLICKED = "edit-todo-clicked";
      editBtn.addEventListener("click", (e) => {
        PubSub.publish(
          EDIT_TODO_CLICKED,
          e.currentTarget.getAttribute("data-index")
        );
        setVisible(toDoForm);
      });
      editCell.appendChild(editBtn);

      const deleteCell = document.createElement("td");
      const deleteBtn = createIconBtn("delete", deleteIcon, i);
      const DELETE_TODO_CLICKED = "delete-todo-clicked";
      deleteBtn.addEventListener("click", (e) => {
        PubSub.publish(
          DELETE_TODO_CLICKED,
          e.currentTarget.getAttribute("data-index")
        );
      });
      deleteCell.appendChild(deleteBtn);

      newRow.appendChild(checkbox);
      newRow.appendChild(toDoName);
      newRow.appendChild(toDoDescr);
      newRow.appendChild(toDoDate);
      newRow.appendChild(toDoPriority);
      newRow.appendChild(editCell);
      newRow.appendChild(deleteCell);

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

      const editPRoj = createIconBtn("edit", editIcon, i);
      const EDIT_PROJECT_CLICKED = "edit-project-clicked";
      editPRoj.addEventListener("click", (e) => {
        PubSub.publish(
          EDIT_PROJECT_CLICKED,
          e.currentTarget.getAttribute("data-index")
        );
        setVisible(projectForm);
      });

      const deletePRoj = createIconBtn("delete", deleteIcon, i);
      const DELETE_PROJECT_CLICKED = "delete-project-clicked";
      deletePRoj.addEventListener("click", (e) => {
        PubSub.publish(
          DELETE_PROJECT_CLICKED,
          e.currentTarget.getAttribute("data-index")
        );
      });

      container.appendChild(btn);
      container.appendChild(editPRoj);
      container.appendChild(deletePRoj);

      navBarLinks.appendChild(container);

      // set the navbar btn for the active project active
      if (CURRENT_PROJECT.getStatus()) setActive(i);
    }
  }

  return {
    renderNavBar,
    renderProjectDropdown,
    renderToDoList,
    clearToDoList,
    setActive,
  };
})();

export default displayController;
