Explanation of exercise 1
======

1. Updates the title of the webpage with the current date and timestamp, and updates the information every secound.
2. Firstly an object is created with the name `foo` and attribute `bar` set to `CWP`. Then a variable `bar` is set a string containing the word `bar`. In the case of `foo` returning undefinded, the reult is set to be equal to the value of the the object `foo` at the index of the variable `bar`. Lastly there is an attempt to acces an undefined index on `foo` (`foo[foo.bar.baz]`), which result in the output `CWP` as this is what foo.undefinded was set to (`foo[bar = "bar"]`).
3. A function (object definition) is created, which takes a message as a parameter, and sets a local valiable (`msg`) to that message, and a local variable `number` to be the prototype of the Msg class' counter + 1. After this the prototypes counter is set to 0 in order to have a known starting point. The show function of the Msg class is then defined. Then 2 object of the Msg class is defined and shown. This counter of the prototype is then printed (from the variable x, which shows that the Msg objects share the same counter value).
4. First a function (object definiton) is defines as a `Person` which set a local variable `name` to the parameter `n` or the string "???" if no paramethers is given. The `Person`s prototype counter is then set to 0. A new function `Student` is then defined, which takes a name, and a student id as paramethers. Here a local variable `base` is set to the function Person, and a new function is created with the parameter `n` (name set from the `Student` arguments). The variable `base` is then deleted (OBS: but the person object is not), and another local variable `studentid` is set. Then code is executed, that creates a new person without any parameters (creates a person with the name "???"), and sets the Student prototype the the new person and the counter goes to 1. Then a new student is created with a name and an id. Lastly the count variable from the new student is returned (which is 2) as `Student.prototype` was set to be the same as `Person`.
