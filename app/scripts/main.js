console.log('The Iron Yard Rocks');

var Todo = function (options) {
	options = options || {};
	this.completed = false;
	this.name ='';
	this.hidden = false;
	// this.todoList = [];
	// this.item = {};
	// this.addItem = function(){

	// };
  // this.color = options.color || 'brown';
  // this.status = 'grumpy';
  // this.pet = function () {
  //   this.status = 'happy';
  // };
};

var todoArray = [];


document.getElementById("addItem").onclick = function addItem(item){
console.log('clicking');
var name = document.getElementById('listInput').value;
console.log(name);
	// var item = new Todo;
	// item.name = document.getElementById("#listInput");
	// todoArray.push(item);
};

