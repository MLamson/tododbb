console.log('The Iron Yard Rocks');

var todoArray = [];
var todoTemplate;
var todoTemplateFunc;

//to disable enter key until fix issue
$(document).keypress(
    function(event){
     if (event.which == '13') {
        event.preventDefault();
      }
});


todoTemplate = $('#todoTemp').html(),
todoTemplateFunc = _.template(todoTemplate);

//create instance of todo.
var Todo = function (itemName){
	this.id = _.random(0, 9999);
	this.status = "incomplete";
	// this.status = "incomplete";
	this.item = itemName || "";
	this.toggleStatus = function(){
    if (this.status === 'incomplete') {
        this.status = 'complete';
      } else {
        this.status = 'incomplete';
      }
      console.log(status + ' oh man!');
};//end toggle


};//end Todo 


// Create click event for toggleing todos
  $('#addList').on('click', 'li', function (event) {
    event.preventDefault();

    var thisTask = event.target;
    var thisTaskID = Number(thisTask.id);

    var thisTaskInstance = _.findWhere(todoArray, { id: thisTaskID });

    thisTaskInstance.toggleStatus();

    $(thisTask).removeClass().addClass(thisTaskInstance.status);


  });


$('#inputClick').on('click', function(event){
	event.preventDefault();
	console.log('click');
// todoForm.on('submit', function (event) {
//     event.preventDefault();

    // Grab text from my input
    //taskname = $('#.text').document.getElementById.val();
    var taskname = document.getElementById('text').value;
    
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