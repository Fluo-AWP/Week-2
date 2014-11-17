/********************************
* This is for the questions 1-4
*********************************/

'use strict';
var Pet = function (n) {
	var name = n || '';
	
	this.getName = function () {
		return name;
	};
};

var Dog = function (n) {
	Pet.call(this, n);
	this.sound = function () {
		return 'Wuf';
	};
	this.prototype = new Pet;
};

var Cat = function (n) {
	Pet.call(this, n);
	this.sound = function () {
		return 'Meow';
	};
	this.prototype = new Pet;
}