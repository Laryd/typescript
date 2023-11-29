
let sales: number = 123_456_789  //number  the underscore makes code more readable, it's still just the same number
let course: string = 'TypeScript' //string
let is_published:boolean = true //boolean
let level  //it is a type of any if you don't initialize it. can represent any type of value

let things= [sales, course, is_published, level]

things.pop()

//arrays

let numbers = [1,2,3, 'h']  //in js any value can be in an array

let num: number[] = []
num.push(45)
numbers.pop()

// tuples
// Tuples are fixed length array where each element has a 
// particular type. Mostly useful when you have two values
// as illustrated below

let user: [number, string] = [1, 'Mosh']
user[0]

//enum

// const small =1
// const medium =2
// const large = 3
// instead using enums for the same
// We use enum to represent a list of related constants
//PascalCase --> first word uppercase
const enum Size {Small=1, Medium, Large}  //default values are 0,1,2 assigned automatically, unless you want to overwrite using =

let mySize =  Size.Medium
console.log(mySize)


// functions
//
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
// let employee: { id: number, name: string, retire: (date: Date) => void 
    // }= { id: 1, name: 'Mosh', retire:{date: Date} => {console.log(date)}
    
        
        // employee.name = 'Hillary'
       
        
//a better way to work with objects
//Advanced types
//type aliases
//DRY (don't repeat yourself)



type Employee = {  //here we have a single place to define the shape of our employee object
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
//combining types

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

//literal types { exact, specific}. 
 
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
log?.('a')  //will get executed only of log is referencing an actual function otherwise we'll get undefined

//Interfaces
//same as type by can extend from another interface. Note there is no use of colon as in type

interface IUser {
    username: string,
    email: string, 
    age: number
}

interface IEmployee extends IUser {
    employeeId: number
}

//applying it now

const emp : IEmployee = {
    username: "Hillary",
    email: "hillatheg@gmail.com",
    age: 27,
    employeeId: 2
}

//GENERICS

interface IAuthor{
    id: number,
    username: string
}

interface ICategory {
    id: number,
    title: string
}

interface IPost {
    id: number,
    title: string,
    desc: string,
    extra: IAuthor[] | ICategory[]
}

// a better way to do IPost is using generics as below

interface IPostBetter<T> {
     id: number,
    title: string,
    desc: string,
    extra: T[]
}

//application
const TestMe : IPostBetter<IAuthor> = {
    id: 1,
    title: "post title",
    desc: "post description",
    extra: [{id:1, username: "Hilla"}]
}
//
const TestMe1: IPostBetter<ICategory> = {
  id: 1,
  title: "post title",
  desc: "post description",
  extra: [{ id: 1, title: "ManUnited" }],
};