/* global describe, it */

(function () {
  'use strict';

var todo;

// it('should have default array todoList', function (){
    // 	expect(todo.todoList).to.eql([]);
    // });

describe('Todo Constructor', function () {

  // Test creation of instance
  describe('Creating todoList from Constructor', function () {

    beforeEach(function(){
      todo = new Todo();
    });

	    it('should be an instance of Todo', function () {
	      expect(todo).to.be.an.instanceof(Todo);
	    });

		    it('should have a boolean for complete or not', function(){
		    	expect(todo.completed).to.equal(false);
		    });

		    it('should have a name that is a string', function(){
		    	expect(todo).to.have.property('name');	
		    });

		    it('should have a boolean for hidden or not', function(){
		    	expect(todo.hidden).to.equal(false);
		    });

    // it('item should be an object', function () {
    //   expect(todo.item).to.eql({});
    // });

  // 	it('create default array for todoList', function(){
		// expect(todoList.items).to.eql([]);
		// });

    // it('should have a status that is a string', function () {
    //   expect(cat).to.have.property('status');
    // });

    // it('should be grumpy by default', function () {
    //   expect(cat.status).to.equal('grumpy');
    // });

    // it('function to take object and add to array', function () {
    //   expect(todo.item).to.eql({});
    //   todo.addItem();
    //   expect(todo.todoList).to.eql(todo.todoList);
    // });

  });


});
	describe('field should not be empty when hitting submit', function(){
		it('test to be sure field not empty', function(){
			expect(document.getElementById('listInput').value).is.not.equal('');
		});
	});


  describe('add item to array', function () {
  	it('create item and add to array', function(){
  		todoArray.push(todo);
			expect(todoArray).to.have.length(1);
		});
  });

  // It "i can add one to array"
  // todoArray.push(item);
  // expect(todoArray).to.have.length(1);




})();
