// Write your solution in this file!
const employee = {}
beforeEach(function () {
    for (const key in employee) {
        delete employee[key];
      }
employee.name = "Sam";
employee.streetAddress = "12 Broadway";
});
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
  }
function deleteFromEmployeeByKey(employee, key) {
    // Create a new object by spreading the original employee object
    const newEmployee = { ...employee };
  
    // Delete the specified key from the newEmployee object
    delete newEmployee[key];
  
    // Return the newEmployee object
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the employee object with the given key and value
    employee[key] = value;
  
    // Return the entire updated employee object
    return employee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the employee object
    delete employee[key];
  
    // Return the modified employee object
    return employee;
  }