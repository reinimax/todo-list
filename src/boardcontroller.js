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

  function deleteProject(project) {
    const indexToDelete = board.indexOf(findProject(project));
    board.splice(indexToDelete, 1);
  }

  function createToDo(name, description, dueDate, priority, project) {
    findProject(project).addToDo(
      new ToDo(name, description, dueDate, priority)
    );
  }

  return { getBoard, createProject, findProject, deleteProject, createToDo };
})();

export default boardController;