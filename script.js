//your JS code here. If required.
const student{
	name:"muskan"
};
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Test the getKeys() method on the student object
const keys = student.getKeys();
console.log(keys); // Output: ["name"]