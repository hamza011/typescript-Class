
let arrOfObj: any[]= [
    {name: 'Hamza', education: 'Intermediate'},
    {name: 'Ali', education: 'Graduation'},
    {name: 'Ahmed', education: 'Matriculate'},
];
// console.log('array of objects',arrOfObj);

let allUsers: any[] = [];
let arrOfString: any[]= [];

arrOfObj.forEach(function(obj){
    allUsers.push(obj.education,obj.name);   
    arrOfString.push(allUsers);
    allUsers=[];
});
    console.log('Array = ', arrOfString);