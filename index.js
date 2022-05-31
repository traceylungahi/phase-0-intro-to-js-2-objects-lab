const employee = {
    name: 'Sam',
    streetAddress: '11 Broadway',
}
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    }
};
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
};
function deleteFromEmployeeByKey(obj, key, value) {
    const newEmployee = {...obj};
    delete newEmployee[key];
    return newEmployee; 
}
function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    delete obj[key];
    return obj;
}
