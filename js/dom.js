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

function makeTodo(data,waktu)
{
   const textTitle = document.createElement("h2");
   textTitle.innerText = data;

   const textTimesTamp = document.createElement("p");
   textTimesTamp.innerText = waktu;
   
   const textContainer = document.createElement("div");
   textContainer.classList.add("inner");

   textContainer.append(textTitle,textTimesTamp);

   const container = document.createElement("div");
   container.classList.add("item","shadown");

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

function addTaskTocomplete(taksElement)
{

  taksElement.remove();
}

function createCheckButton()
{

	return createButton("check-button", function(){

		addTaskTocomplete(event.target.parentElement);
	});
}

function addTaskToComplite(taskElement)
{
  const taskTitle = taskElement.querySelector(".inner > h2").innerText;
  const taskTimestamp = taskElement.querySelector(".inner > p").innerText;

  const newTodo = makeTodo(taskTitle,taskTimestamp);
  const listCompleted = document.getElementById(COMPLETED_LIST_TODO_ID);
  listCompleted.append(newTodo);
  taskElement.remove();

}