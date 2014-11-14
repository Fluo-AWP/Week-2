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
		return 'wuf';
	};	
};

var Cat = function (n) {
	Pet.call(this, n);
	this.sound = function () {
		return 'meow';
	};
}

var myDog = new Dog('Vuffi');
print(myDog.getName() +' says: '+ myDog.sound());

var myCat = new Cat('Misser');
print(myCat.getName() +' says: '+ myCat.sound());

var pet = new Pet('Should not work');
print(pet.name);