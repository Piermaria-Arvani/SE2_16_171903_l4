var employees = [
	new Employee(1, "Ambrogio", "Fusella", 5, 5670),
	new Employee(2, "Andrea", "Mantegna", 2, 1370),
	new Employee(3, "Luigi", "Pirandello", 7, 7890)
];

function Employee (id, name, surname, level, salary) {
	this.id = id;
	this.name = name;
	this.surname = surname;
	this.level = level;
	this.salary = salary;
}

function maxID() {
    var max = 0;
    var i;
    for (i = 0; i < employees.length; i++) {
        if (max < employees[i].id) {
            max = employees[i].id;
        }
    }
    return max;
}

function getEmployee(id) {
	var temp = new Employee("", "", "", "", "");
	if (id >= 0 && id !== 'undefined') {
		for (var i = 0; i < employees.length; i++){
			if(employees[i].id == id){
				temp = employees[i];
            }
		}
    }
    
	return temp;
}

function insertEmployee(e){
    var sovrascritto = false;
    for (var i = 0; i < employees.length; i++){
        if(employees[i].id == e.id){
            sovrascritto = true;
            employees[i].name = e.name;
            employees[i].surname = e.surname;
            employees[i].level = e.level;
            employees[i].salary = e.salary;
        }
    }
    if(!sovrascritto)
	   employees.push(e);
	return e;
}



function deleteEmployee(id){
	for(var i=0; i < employees.length; i++){
        if(employees[i].id == id){
            employees.splice(i, 1);
        }
    }
	
}


exports.Employee = Employee;
exports.maxID = maxID;
exports.getEmployee = getEmployee;
exports.insertEmployee = insertEmployee;
exports.deleteEmployee = deleteEmployee;

