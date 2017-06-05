var arrOfObj = [
    { name: 'Hamza', education: 'Intermediate' },
    { name: 'Ali', education: 'Graduation' },
    { name: 'Ahmed', education: 'Matriculate' },
];
// console.log('array of objects',arrOfObj);
var allUsers = [];
var arrOfString = [];
arrOfObj.forEach(function (obj) {
    allUsers.push(obj.education, obj.name);
    arrOfString.push(allUsers);
    allUsers = [];
});
console.log('Array = ', arrOfString);
//# sourceMappingURL=objects.js.map