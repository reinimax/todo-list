import PubSub from "pubsub-js";

import deleteIcon from "./recycle-bin-line.svg";
import editIcon from "./edit-round-line.svg";
import deleteIconWhite from "./recycle-bin-white.png";
import editIconWhite from "./edit-white.png";
import checkMarkIcon from "./check-mark-line.svg";

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

  // form fields
  const projectName = document.querySelector("#project-name");
  const toDoName = document.querySelector("#todo-name");
  const toDoDescription = document.querySelector("#todo-descr");
  const toDoDate = document.querySelector("#todo-date");
  const toDoPriority = document.querySelector("#todo-priority");

  // utility functions
  function disable(btn) {
    btn.setAttribute("disabled", "true");
  }

  function enable(btn) {
    btn.removeAttribute("disabled");
  }

  function resetProjectForm() {
    projectName.value = "";
    projectName.focus();
  }

  function resettToDoForm() {
    toDoName.value = "";
    toDoName.focus();
    toDoDescription.value = "";
    toDoDate.value = "";
    toDoPriority.value = "3";
  }

  function setActive(index) {
    const btnList = navBarLinks.getElementsByClassName("navbar-btn");
    const btnArray = [...btnList];
    const btnToActivate = btnArray[index];
    btnArray.forEach((btn) => btn.classList.remove("active"));
    btnToActivate.classList.add("active");

    // activate also the edit- and delete-buttons
    const iconBtnList = navBarLinks.getElementsByClassName("icon-btn");
    const iconBtnArray = [...iconBtnList];
    iconBtnArray.forEach((btn) => btn.classList.remove("active"));

    const iconBtnToActivate = navBarLinks.querySelectorAll(
      `[data-index="${index}"]`
    );
    iconBtnToActivate.forEach((iconBtn) => iconBtn.classList.add("active"));
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
    // children[2] === tbody
    while (toDoList.children[2].childNodes.length > 1) {
      toDoList.children[2].lastChild.remove();
    }
  }

  function changeToDoStatus(targetIndex) {
    const rowToChange = toDoList.children[2].children[targetIndex];
    for (let i = 1; i <= 4; i += 1) {
      rowToChange.children[i].toggleAttribute("data-checked");
    }
    // toggle checkmark on button
    rowToChange.firstElementChild.firstElementChild.firstElementChild.toggleAttribute(
      "data-display"
    );
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
  newProjectBtn.addEventListener("click", () => {
    setVisible(projectForm);
    resetProjectForm();
  });
  newToDoBtn.addEventListener("click", () => {
    setVisible(toDoForm);
    resettToDoForm();
  });
  saveProjectBtn.addEventListener("click", () => setInvisible(projectForm));
  saveToDoBtn.addEventListener("click", () => setInvisible(toDoForm));
  cancelBtns.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      setInvisible(e.currentTarget.parentNode.parentNode);
    })
  );

  // Subscriptions
  const BOARD_EMPTY = "board-empty";
  PubSub.subscribe(BOARD_EMPTY, () => disable(newToDoBtn));

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

      const checkbox = document.createElement("button");
      checkbox.setAttribute("class", "checkbox");
      checkbox.setAttribute("data-index", `${i}`);
      const checkIcon = document.createElement("img");
      checkIcon.setAttribute("src", checkMarkIcon);
      checkIcon.setAttribute("height", "10px");
      checkbox.appendChild(checkIcon);
      const CHECKBOX_CLICKED = "checkbox-clicked";
      checkbox.addEventListener("click", (e) => {
        changeToDoStatus(e.currentTarget.getAttribute("data-index"));
        PubSub.publish(
          CHECKBOX_CLICKED,
          e.currentTarget.getAttribute("data-index")
        );
      });
      const checkboxCell = document.createElement("td");
      checkboxCell.appendChild(checkbox);

      const name = document.createElement("td");
      name.textContent = projectToRender.toDoList[i].title;

      const descr = document.createElement("td");
      descr.textContent = projectToRender.toDoList[i].description;

      const date = document.createElement("td");
      date.textContent = projectToRender.toDoList[i].dueDate;

      const priority = document.createElement("td");
      let translatePriority;
      switch (projectToRender.toDoList[i].priority) {
        case "5":
          translatePriority = "Highest";
          break;
        case "4":
          translatePriority = "High";
          break;
        case "2":
          translatePriority = "Low";
          break;
        case "1":
          translatePriority = "Lowest";
          break;
        default:
          translatePriority = "Medium";
      }
      priority.textContent = translatePriority;

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

      newRow.appendChild(checkboxCell);
      newRow.appendChild(name);
      newRow.appendChild(descr);
      newRow.appendChild(date);
      newRow.appendChild(priority);
      newRow.appendChild(editCell);
      newRow.appendChild(deleteCell);

      // children[2] === tbody
      toDoList.children[2].appendChild(newRow);

      // mark checked if checked=true
      if (projectToRender.toDoList[i].checked) changeToDoStatus(i);
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

      const editPRoj = createIconBtn("edit", editIconWhite, i);
      const EDIT_PROJECT_CLICKED = "edit-project-clicked";
      editPRoj.addEventListener("click", (e) => {
        PubSub.publish(
          EDIT_PROJECT_CLICKED,
          e.currentTarget.getAttribute("data-index")
        );
        setVisible(projectForm);
      });

      const deletePRoj = createIconBtn("delete", deleteIconWhite, i);
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
    enable,
  };
})();

export default displayController;
