/********************************
* This is for the questions 5-6
*********************************/

'use strict';
var Pet = (function (n) {
	var name = n || '';
	
	this.getName = function () {
		return name;
	};
});

var Dog = function (n) {
	Pet.call(this, n);
	this.sound = function () {
		return 'Wuf';
	};
	Object.freeze(this)
};
Dog.prototype = new Pet;

var Cat = function (n) {
	Pet.call(this, n);
	this.sound = function () {
		return 'Meow';
	};
	Object.freeze(this);
}
Cat.prototype = new Pet;