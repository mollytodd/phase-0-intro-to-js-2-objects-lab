const employee = {
  name: "Molly",
  streetAddress: "378 Paseo Marguerita",
};

console.log(employee);

function updateEmployeeWithKeyAndValue(employee, key, value) {


  const newArray = {
   ...employee,
   [key]: value,
  };
  return newArray;
}

console.log(updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway"));


// this is working in the console but i'm not sure I am understanding the read my correctly
//updated and fixed! line 12 needed to have the paremeters from the function, not a const!!

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee
}

destructivelyUpdateEmployeeWithKeyAndValue(
  employee,
  "streetAddress",
  "12 Broadway"
);
console.log(employee)

function deleteFromEmployeeByKey(employee,key){
    const clonedEmployee = {...employee}
    delete clonedEmployee[key];
    return clonedEmployee;
}
const updatedEmployee = deleteFromEmployeeByKey("Molly", "StreetAddress")

console.log(updatedEmployee)
console.log(employee)

function destructivelyDeleteFromEmployeeByKey(employee,key){
delete employee[key];
return employee
}
destructivelyDeleteFromEmployeeByKey(employee, "streetAddress")
console.log(employee)
