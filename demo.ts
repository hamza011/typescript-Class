let city:string = 'Karachi';

let test: string = 'Hello World';

//let test: number = 5;

//let test: boolean = true;

//let test: any = {};

//let test: string | number = 444;

let testArr : string[] = ['asdas','Two']; // an array

let testArr2 : [string, number] = ['asdas', 30]; //these are called tuples for usage of multiple data types

const days : string[] =['Monday', 'Tuesday', 'Wednesday'];

//let testObj : string[] = new Array()



function add(numOne: number, numTwo: number) : void {

     numOne + numTwo

}
function subtract(numOne: number, numTwo: number) : number {

     return numOne - numTwo
}

console.log(city);

console.log(`${test}`);

console.log(test.length);

console.log(typeof test);

console.log(add(5, 5));
console.log(subtract(10, 6));
console.log(testArr);
console.log(testArr2);
console.log('days : ', days);
console.log('days : ', days[2]);


//git init
// git status
// git add . --- git add FILENAME
//git commit -m (-m means message)
//git remote add origin https://_________.git
//git push origin master