//loose Equality ("==") - only checks the value
let x = 1
console.log("Printing value of x :",x)
//("===") strict equality checks for datype as well.
if(x==='1'){

console.log("Printing Strict equality condition for x :",typeof x)
}
//Checking for loose equality ("==")
if(x=='1'){
console.log("PRinting loose equality condition for x ", x)
}

//Pre-Increament("+=") and post increment(++)
var z=5;
console.log("PReincrement check", z+=5) //increments and then prints
let y=6;
console.log("Post increment check", y++) // should print and then increment.
console.log("Printing the post incremented value of x", y)

//note that datatype also gets converted for original value if we use loose equality.

let m=1, n=true
console.log("Printing m value before loose equality check :", m)
if(m=n){
    console.log("Printing value of m after loose equality :", typeof m) // here m value is boolean and gets printed
}

let test3 = "Playwright"
//console.log('the length of test3 is', test3.length)
console.log(the length ${test3.length})