

function Programmer(name, position, age, lanuage) {
	this.name = name;
	this.position = position;
	this.age = age;
	this.lanuage = lanuage;

	this.printInfo = function() {
		console.log("Name:" ++ "\nPosition: " + this.position +
		"\"nAge: " + this.age + "\nLanguages: " + this.lanuage);
	};
}
	var bob = new Programmer("Bob Smith", "Supreme CodeMaster", 33, "JavaScript");
	bob.printInfo();

