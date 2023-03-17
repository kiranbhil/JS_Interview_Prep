// call
// The call method binds the this value to the function and executes the function. 
// It takes the this value and a list of arguments as parameters. Then, 
// it returns the value returned by the function, which is called using the call method.

let name = {
    firstname:"kiran",
    lastname:"bhil",
    printFullName: function(){
        console.log(this.firstname+" "+this.lastname);

    }
}
name.printFullName()
let name1 = {
    firstname:"Vishal",
    lastname:"Bhil"
}

name.printFullName.call(name1);

// function borrowing

let printFullName1 = function(city,state){
    console.log(this.firstname+" "+this.lastname+ " "+city+" "+state);

}
printFullName1.call(name,"bvn","guj");

// apply method 

printFullName1.apply(name1,["abc","xyz"]);

// bind method 

let printMyName = printFullName1.bind(name1,"abc","xyz")
console.log(printMyName)
printMyName()