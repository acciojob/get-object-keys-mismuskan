//your JS code here. If required.
const student={
	name:"muskan"
};
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

const keys = student.getKeys();
console.log(keys); 