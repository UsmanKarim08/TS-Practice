//In TypeScript, an Enum (short for "Enumeration") is a feature that allows you to define a set of named constants.
// This can make it easier to document intent, or create a set of distinct cases. 
//Enums are especially useful when you have a collection of related values that you want to manage in a structured and readable way
enum prac {
Admin,
Read_Only,
Exit
}
if('Admin' in prac){
    console.log('yes')
}

if(prac.Admin != undefined){
    console.log('Admin is present')
}