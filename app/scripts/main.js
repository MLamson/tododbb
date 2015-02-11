console.log('The Iron Yard Rocks');

var todoArray = [];
var todoTemplate;
var todoTemplateFunc;



todoTemplate = $('#text').html(),
todoTemplateFunc = _.template(todoTemplate);

//create instance of todo.
var Todo = function (itemName){
	this.status = "incomplete";
	this.item = itemName || "";

};



$('#inputClick').on('click', function(event){
	event.preventDefault();
	console.log('click');
// todoForm.on('submit', function (event) {
//     event.preventDefault();

    // Grab text from my input
    //taskname = $('#.text').document.getElementById.val();
    var taskname = document.getElementById('text').value;
    console.log(taskname);
    // Create a new Todo
    taskinstance = new Todo(taskname);

    // Run the function addTodo
    addTodo(taskinstance);

    // Clear the form
    //taskname.reset();
    $("#itemInput")[0].reset();
  });






      addTodo = function (item) {
      	console.log(item);
    todoArray.push(item);
    $('#addList').prepend(todoTemplateFunc(item));
  };