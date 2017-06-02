let city:string = 'Karachi';

let test: string = 'Hello World';

//let test: number = 5;

//let test: boolean = true;

//let test: any = {};

//let test: string | number = 444;

let testArr : string[] = ['asdas','Two'];

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
