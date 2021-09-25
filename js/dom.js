const UNCOMPLETED_LIST_TODO_ID = "todos";
const COMPLETED_LIST_TODO_ID = "completed-todos"; 

function addTodo ()
{
	const uncompletedTODOList = document.getElementById(UNCOMPLETED_LIST_TODO_ID );
   const texttodo = document.getElementById("title").value;
   const timestamp = document.getElementById("date").value;

   console.log(texttodo);
   console.log(timestamp);

 
   
   	 const todo = makeTodo(texttodo,timestamp);
   	 uncompletedTODOList.append(todo);
	  

}

function makeTodo(data,timestamp)
{
   const textTitle = document.createElement("h2");
   textTitle.innerText = data;

   const textTimestamp = document.createElement("p");
   textTimestamp.innerText = timestamp;

   const textContainer = document.createElement("div");
   textContainer.classList.add("inner");
   textContainer.append(textTitle,textTimestamp);

   const container = document.createElement("div");
   container.classList.add("item","shadow");
   container.append(textContainer);
   container.append(createCheckButton());

   return container;


}

function createButton(buttonTypeClass,eventListener)
{

	const button = document.createElement("button");
	button.classList.add(buttonTypeClass);

	button.addEventListener("click", function(event){
        
     eventListener(event);
	});

	return button;
}

function addTaskToCompleted(taskElement) 
{
    const taskTitle = taskElement.querySelector(".inner > h2").innerText;
    const taskTimestamp = taskElement.querySelector(".inner > p").innerText;
 
    const newTodo = makeTodo(taskTitle, taskTimestamp);
    const listCompleted = document.getElementById(COMPLETED_LIST_TODO_ID);
    listCompleted.append(newTodo);
    taskElement.remove();
}

function createCheckButton()
{

	return createButton("check-button", function(){

		addTaskToCompleted(event.target.parentElement);
	});
}

function removeTaskFromCompleted(taskElement)
{

  taskElement.remove();
}

