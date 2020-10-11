const displayController = (() => {
    //cacheDOM
    const newProjectBtn = document.querySelector("#new-project");
    const newToDoBtn = document.querySelector("#new-todo");
    const createProjectBtn = document.querySelector("#create-project");
    const createToDoBtn = document.querySelector("#create-todo");
    const navBarLinks = document.querySelector("#navbar-links");
    const newProjectForm = document.querySelector("#new-project-form");
    const newToDoForm = document.querySelector("#new-todo-form");
    
    //add listeners
    newProjectBtn.addEventListener("click", () => setVisible(newProjectForm) );
    newToDoBtn.addEventListener("click", () => setVisible(newToDoForm) );
    createProjectBtn.addEventListener("click", () => setInvisible(newProjectForm) );
    createToDoBtn.addEventListener("click", () => setInvisible(newToDoForm) );
    
    function setVisible(popupBox) {
        popupBox.classList.add("visible");
    }

    function setInvisible(popupBox) {
        popupBox.classList.remove("visible");
    }
    
    function renderNavBar(arrayToRender) {
        clearDisplayElement(navBarLinks);
        for (let i = 0; i < arrayToRender.length; i++) {
            let btn = document.createElement("button");
            btn.textContent = arrayToRender[i].name;
            //add a listener
            navBarLinks.appendChild(btn);
        }
    }

    function clearDisplayElement(displayElement) {
        for (let i = 0; i < displayElement.childNodes.length; i++) {
            displayElement.childNodes[i].remove();
        }
    }
    

    return {renderNavBar};
})();

export default displayController;