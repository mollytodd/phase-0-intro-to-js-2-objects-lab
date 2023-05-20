const employee =  {
    name: "Molly Todd",
    address: "378 Paseo Marguerita",
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    return obj;
}
function deleteFromEmployeeByKey (obj, key) {
  
const newObj = { ...obj };
delete newObj[key];
return newObj;
}
function destructivelyDeleteFromEmployeeByKey (obj, key) {
    delete obj[key];
    return obj;
}