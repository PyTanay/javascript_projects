//const myPElements=document.querySelector('p');
//myPElements.textContent="This is being changed using java script."
//console.log(myPElements.textContent);
//const myPElements=document.querySelectorAll('p');
//for(let i=0;i<myPElements.length;i++){
//    console.log(myPElements[i].textContent);
//    let str=myPElements[i].textContent;
//    myPElements[i].textContent=str.toUpperCase();
//}
//const myPElements=document.querySelectorAll('p');
//myPElements.forEach(function(p){p.remove()});
//document.querySelectorAll("p").forEach(x=>x.textContent=x.textContent.toUpperCase());
//const myTitleTag=document.querySelector("title");
//console.log(myTitleTag.textContent);
//console.log(document.title);
//document.title="My new something";
//console.log(document.getElementById("idone"));
//let htmlElementList1;
//htmlElementList1=document.getElementsByClassName("para para1");
//console.log(htmlElementList1[0]);
//const myElement=document.querySelectorAll("#idone");
//console.log(myElement);
//const myElement1=document.querySelectorAll(".para1");
//console.log(myElement1);
//console.log(typeof document.getElementsByClassName("para para1"));

//track input form

//const myForm1=document.querySelector("#myform");
//console.log(myForm1);
//document.querySelector("#myform").addEventListener('input',(event)=>console.log(event.target.value));


//validation

//alert("Hello");
//console.log(document.querySelector("#myform"));
//console.log(document.getElementById("myform"));
function myValidation(){
    let myValue=document.getElementById("myform").value;
    if(isNaN(myValue) || myValue<1 || myValue>20){
        document.querySelector("#idone").textContent=`${myValue} is not a valid input`;
    }else{
        document.querySelector("#idone").textContent=`${myValue} is acceptable`;
    }
}


//form validation

let myValue=document.querySelector(".myform1").addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.firstname.value);
    event.target.username.value="";
    event.target.firstname.value="";
    });