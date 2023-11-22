//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// Leaving "print" statements to show how I follow my statements while still learning


function favoriteFoods(object) {
    for (let key in object) {
        if (Array.isArray(object[key])) {   // Array.isArray only works when written like this. It returns True if the object is an array. credit W3 schools
            // console.log("-----IF-----");
            object[key].forEach(value => {  // calls a function for each element in array, does not perform on empty arrays. credit W3 schools
                if (typeof value === 'object') {
                    console.log("-----Inner IF-----");
                    for (let secondary in value) { // I just used secondary as the new value called. In my head it works better than another letter other than I or the parameter name
                        console.log(value[secondary]);
                    }
                    console.log("-----Inner If Done-----");
                } else {
                    console.log(value);
                }
            });
            // console.log("-----If Done-----");
        } else if (typeof object[key] === 'object') {
            // console.log('-----Else If-----');
            for (let secondary in object[key]) {    // this is pulled and reused from the code starting at line 31
                console.log(object[key][secondary]);
            }
            // console.log("-----Else If Done-----");
        } else {
            // console.log('-----Else-----');
            console.log(object[key]);   // if it isn't an array or an object, print it/
            // console.log("-----Else Done-----");
        }
    }
}

favoriteFoods(person3);
/* Post Exercise: This one was more difficult than I was giving it credit for. I spent most of my time on W3 schools doing the Try me's. The parcing and indexing 
that is used is from what I thought I would have to do in python. For me and JS, I think about python first and try to copy that and rework it into JS */


/* Post Homework: Excercise 1 is what took me the longest. It kept printing out the object object for shakes. So I double my print statements to pinpoint exactly where it was running
and began to decode why it was happening. That is what led me to the Inner If (what I called in the print statements.) */

//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/

// Create our Person Class
class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }

    
    // Use an arrow to create the printInfo method
    // Be semi inspiring
    printInfo = () => `${this.name} is ${this.age} years old! Keep smiling! Another day is another chance to be you.`
    
    // Create another arrow function for the addAge method that takes a single parameter
    // Semi inspiring because we about to get old!
    addAge = () => this.age+=1
}
// Adding to the age 
const Daniel = new Person("Daniel", 27) // actual name and age
console.log(Daniel.printInfo())
const Blaine = new Person("Blaine", 36) // middle name and random number
console.log(Blaine.printInfo())

// called addAge to increment this.age
Daniel.addAge()
Blaine.addAge()

// proving I'm older
console.log(Daniel.printInfo())
console.log(Blaine.printInfo())

// showing you how old I feel while doing a boot camp and having a 3 month old, well, 3 months in two days
Daniel.addAge()
Daniel.addAge()
Daniel.addAge()
console.log(Daniel.printInfo())


// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

// going to try and use async/await. seems more comfortable

const driverStandings = async () => {
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json') // still figuring out which api's need .json and which don't.
    const data = await response.json() // await (to me) is saying we are going to pause here and wait for the pieces to centralize so we can put them together.
    console.log(data)
}

driverStandings()
// Not to myself. Forgot this for about five minutes and didn't know why it wasn't logging. Now I know...