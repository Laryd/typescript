
let sales = 123_456_789  //number
let course = 'TypeScript' //string
let is_published:boolean = true //boolean
let level  //any if you don't initialize it
let things = [sales, course, is_published, level]

things.pop()

//arrays

let numbers = [1,2,3, 'h']  //in js any value can be in an array

let num: number[] = []
num.push(45)
numbers.pop()

// tuples
// Tuples are fixed lenght array where each element has a 
// particular type. Mostly useful when you have two values
// as illustrated below

let user: [number, string] = [1, 'Mosh']
user[0]

//enum

// const small =1
// const medium =2
// const large = 3
// instead using enums for the same

//PascalCase
const enum Size {Small=1, Medium, Large}  //default values are 0,1,2

let mySize =  Size.Medium
console.log(mySize)


// functions

function  calculateTax(income: number, taxYear: number): number{
    if (taxYear<2022)
         return income * 1.2
    return income *1.3
}

console.log(calculateTax(10_000, 2022).toExponential)

//objects
// name?: string 
//a question mark makes it optional
// retire: (date: Date) => void how a method is initialized as an object
// let employee: {
    // }= { id: 1, name: 'Mosh', 
    // retire: (date: Date) => {
        //     console.log(date)
        // }}
        
        // employee.name = 'Hillary'
        
//Advanced types

//type aliases

type Employee = {  //here we have a single place to define the shape or our employee object
    //can be reused in multiple places
    readonly id: number,  //read only makes it not changeable
    name: string, 
    retire: (date: Date) => void  
}


let employee: Employee = {
    id: 1,
    name: 'Mosh',
    retire: (date: Date) =>{
        console.log(date)
    }
}

//union types
// We can give a function a paremeter more than one type

function kgToLbs(weight: number| string): number {
    //narrowing
    if (typeof weight === 'number') {
        return weight * 2.2
    } else{
        return parseInt(weight) * 2.2
    }
}

//intersection types

type Draggable = {
    drag: () => void
}

type Resizable = {
    resize: () => void
}

type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
    drag: () => {}, 
    resize: () => {}
}

//literal types { exact, specific}
type Quantity = 50|100
let quantity: Quantity = 100  //can only be 50 or 100

//nullable types

function greet(name: string|null|undefined) {
    if(name)
    console.log(name.toLocaleLowerCase())
    else
    console.log("Hola!")
}

greet(null)


//optional chaining

type Customer = {
    birthday?: Date,

}


function getCustomer(id: number): Customer | null {
    return id === 0 ? null : { birthday: new Date()}
}

let customer = getCustomer(0)
//optional property access operator
console.log(customer?.birthday?.getFullYear())


//optional element access operator

//customers?.[0]

//optional call

let log: any = null;
log?.('a')  //will get executed only of log is referencing an acual function otherwise we'll get undefined