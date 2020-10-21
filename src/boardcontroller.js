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

  function deleteProject(index) {
    board.splice(index, 1);
  }

  function createToDo(name, description, dueDate, priority, project) {
    findProject(project).addToDo(
      new ToDo(name, description, dueDate, priority)
    );
  }

  return {
    getBoard,
    createProject,
    findProject,
    findIndexOfProject,
    deleteProject,
    createToDo,
  };
})();

export default boardController;
