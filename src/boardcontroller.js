import ToDo from "./todo";
import Project from "./project";

const boardController = (() => {
  const board = [];

  function getBoard() {
    return board;
  }

  function createProject(name) {
    board.push(new Project(name));
  }

  function findProject(project) {
    return board.find((obj) => obj.getName() === project);
  }

  function findIndexOfProject(projectname) {
    return board.findIndex((obj) => obj.getName() === projectname);
  }

  function findActiveProject() {
    return board.find((obj) => obj.getStatus() === true);
  }

  function deleteProject(index) {
    board.splice(index, 1);
  }

  function createToDo(name, description, dueDate, priority, checked, project) {
    findProject(project).addToDo(
      new ToDo(name, description, dueDate, priority, checked)
    );
  }

  function restoreProject(projectArray) {
    // Remove the last element which is always an empty string
    projectArray.pop();

    // The first two elements are name and status of the project
    const projectName = projectArray.shift();
    const projectStatus = projectArray.shift();

    createProject(projectName);
    if (projectStatus === "true") findProject(projectName).activate();

    let i = 0;
    while (i < projectArray.length) {
      const title = projectArray[i];
      i += 1; // 1
      const descr = projectArray[i];
      i += 1; // 2
      const date = projectArray[i];
      i += 1; // 3
      const priority = projectArray[i];
      i += 1; // 4
      const checked = projectArray[i] === "true";
      i += 1; // 5
      createToDo(
        title,
        descr,
        date,
        priority,
        checked,
        findProject(projectName).getName()
      );
    }
  }

  return {
    getBoard,
    createProject,
    findProject,
    findIndexOfProject,
    deleteProject,
    createToDo,
    restoreProject,
    findActiveProject,
  };
})();

export default boardController;
