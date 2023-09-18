var sinon = require('sinon');

var spy = sinon.spy();

//We can call a spy like a function
spy('Hello', 'World');

//Now we can get information about the call
console.log(spy.firstCall.args); //output: ['Hello', 'World']


var user = {
  //...
  setName: function(name){
    this.name = name;
  }
}

//Create a spy for the setName function
var setNameSpy = sinon.spy(user, 'setName');

//Now, any time we call the function, the spy logs information about it
user.setName('Darth Vader');

//Which we can see by looking at the spy object
console.log(setNameSpy.callCount); //output: 1

//Important final step - remove the spy
setNameSpy.restore();


