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

  // add listeners
  newProjectBtn.addEventListener("click", () => setVisible(newProjectForm));
  newToDoBtn.addEventListener("click", () => setVisible(newToDoForm));
  createProjectBtn.addEventListener("click", () =>
    setInvisible(newProjectForm)
  );
  createToDoBtn.addEventListener("click", () => setInvisible(newToDoForm));

  function renderNavBar(arrayToRender) {
    clearDisplayElement(navBarLinks);
    for (let i = 0; i < arrayToRender.length; i += 1) {
      const btn = document.createElement("button");
      btn.textContent = arrayToRender[i].name;
      btn.setAttribute("class", "navbar-btn");
      // add a listener
      navBarLinks.appendChild(btn);
    }
  }

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
    console.log(toDoList.firstElementChild);
    while (toDoList.firstElementChild.childNodes.length > 1) {
      toDoList.firstElementChild.lastChild.remove();
    }
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

  return { renderNavBar, renderProjectDropdown, renderToDoList };
})();

export default displayController;
