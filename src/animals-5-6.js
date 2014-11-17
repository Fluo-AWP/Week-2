/********************************
* This is for the questions 5-6
*********************************/

'use strict';
var Pet = (function () {
	var name;

    function construct (n) {
		name = n || '';
    };
    
    construct.prototype.getName = function () {
        return name;
    };

    return construct;
})();

var Dog = (function () {
    function construct(n) {
        Pet.call(this, n);
    }
    
    construct.prototype = Object.create(Pet.prototype);
    construct.prototype.sound = function() {
        return 'Wuf';
    };

	//Object.freeze(construct);
    return construct;
})()

var Cat = (function (n) {
	function construct(n) {
        Pet.call(this, n);
    }
    
    construct.prototype = Object.create(Pet.prototype);
    construct.prototype.sound = function() {
        return 'Meow';
    };

	//Object.freeze(construct);
    return construct;
})();