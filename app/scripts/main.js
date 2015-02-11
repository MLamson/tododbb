console.log('The Iron Yard Rocks');

var todoTemplateFunc,
		todoTemplate;

	todoTemplate = $('#todoNext').html();
	//console.log(todoTemplate);
  todoTemplateFunc = _.template(todoTemplate);

var Todo = function (options) {
	options = options || {};
	this.status = 'incomplete';
	this.name ='';
	this.hidden = false;
};

var todoArray = [];

$('#inputForm').on('submit', function(event){
  	event.preventDefault();

  	var oneTodo = new Todo(name);

  	console.log('clicked');
  	var name = $(this).find('#text').val();
  	console.log(name);

  	

  	addTodo(oneTodo);

// clear the form.
  	this.reset();

  });

addTodo = function(task){
  	// add the task to array
  	todoArray.push(task);
  	$('itemAppend').prepend(todoTemplateFunc(task));
  	// send to the page

  	//$.post(todoURL, JSON.stringify(task));

  };

//document.getElementById("addItem").onclick = function addItem(item){
	//var todo = new Todo();
	//var name = document.getElementById('listInput').value;
	//todo.name = name;
	//todoArray.push(todo);
	// console.log(name);

	// $('.itemAppend').append(name);
	// $("#inputForm")[0].reset();
	//$('listInput')[0].reset();
		// var item = new Todo;
		// item.name = document.getElementById("#listInput");
		// todoArray.push(item);
	// $('inputForm').append(todo);


