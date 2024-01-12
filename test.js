// Your code here
const Employee = require("./employee");

const johnWick = new Employee('John Wick', 'Dog Lover');

// setTimeout(johnWick.sayName, 2000);

const johnSayName = johnWick.sayName.bind(johnWick);
setTimeout(johnSayName, 2000);

// setTimeout(johnWick.sayOccupation, 3000);

const johnSayJob = johnWick.sayOccupation.bind(johnWick);
setTimeout(johnSayJob, 3000);
