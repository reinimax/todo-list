const displayController = (() => {
    //cacheDOM
    const newProjectBtn = document.querySelector("#new-project");
    const newToDoBtn = document.querySelector("#new-todo");
    const navBarLinks = document.querySelector("#navbar-links");
    
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