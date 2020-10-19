This is my take on a To-Do list app that lets the user create, edit and delete projects and associated To-Do items.

Work in progress.

Update:
Now it's time to make things smoother and more comfortable.
I will add cancel-buttons to my forms. I think I will also rename the create-buttons to simply "Save". This is still
intuitive and I can re-use these forms later for editing projects/todo's.

--------------------------------------------------------------------------------------------------------------------

So far, the logic for creating projects and to-do items is implemented. Projects and to-do's can also be deleted.
Added also a display-controller that renders the navbar (which lists all the projects of the user).

New projects can be created via the button in the new project form. They are also displayed in the UI.
The current plan is to have a module displaycontroller, a module boardcontroller (which controls the logic/the array 
that saves the projects) and a module "coordinator" that calls on the two to create objects and modify the DOM.
If this works, this pattern should ensure that boardcontroller and displaycontroller are loosely coupled.

Probably I will move boardcontroller to it's own file, so that it is a proper module. 
boardcontroller should not access any DOM-elements. It needs only access to the classes To-Do and Project to create
objects. So the boardcontroller-file will import these. I shouldn't need them in any other file.

index.js should them import only displaycontroller and boardcontroller modules (and the css obviously).

displaycontroller should obviously only manipulate the DOM. Maybe the renderNavBar function is still too closely
coupled with boardcontroller (it expects an array that contains objects that have a property "name").

I'm also still not sure about the multiple eventlisteners on some buttons, but at this point it seems better to me
because it keeps things more separated though it creates some redundancy probably.
