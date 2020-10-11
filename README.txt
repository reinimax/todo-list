This is my take on a To-Do list app that lets the user create, edit and delete projects and associated To-Do items.

Work in progress.

So far, the logic for creating projects and to-do items is implemented. Projects and to-do's can also be deleted.
Added also a display-controller that renders the navbar (which lists all the projects of the user).

Next up functionality will be added to open/close the forms for making new projects/to-do's in the UI.
("display: none" should be added to a class called "popup-box" or so. Then add a class "visible" and implement
listeners to toggle it when the user clicks a button)