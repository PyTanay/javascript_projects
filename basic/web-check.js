let userEmail="lco123dsfs";
let password="1234";

let userChecker= function(myString){
    if(myString.includes(123) && myString.length>6){
        return true;
    }else{
        return false;
    }
}
console.log(userChecker(userEmail));