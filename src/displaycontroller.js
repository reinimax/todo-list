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

  return { renderNavBar, renderProjectDropdown };
})();

export default displayController;
