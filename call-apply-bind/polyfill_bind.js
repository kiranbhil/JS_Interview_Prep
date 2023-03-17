// create our own bind method
// Polyfill for bind method | Javascript Interview Questions

let name = {
    firstName : "Kiran",
    lastName : "Bhil"
}

let printName = function (city,state,coutnry) {
    console.log(this.firstName+" "+this.lastName+" "+city+" "+state+" "+coutnry)
}

let printMyName = printName.bind(name,"Bhavnagar","India");
printMyName("Gujarat")

Function.prototype.myBind = function(...args){
    let obj = this;
    let param = args.slice(1)
    return function (...args2){
        obj.apply(args[0],[...param,...args2])
    }
}

let printMyName2 = printName.myBind(name,"Bhavnagar","Gujarat");
printMyName2("Inida");