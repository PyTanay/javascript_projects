//var h=document.createElement("h1");
//var myValue=document.createTextNode("Hello World!");
//h.appendChild(myValue);
//document.querySelector("h1").appendChild(h);

//var val=5;
//while(val>0){
//    console.log(val);
//    val--;
//}
var ul=document.getElementById("list");
var li;

var addButton=document.getElementById("add");
addButton.addEventListener("click",addItem);


var removeButton=document.getElementById("remove");
removeButton.addEventListener("click",removeItem);

function addItem(){
    var input=document.getElementById("input");
    var item=input.value;
    ul=document.getElementById("list");
    var textNode=document.createTextNode(item);
    if(item===""){
        return false;
        //add a p tag and assign a value of "Enter your todo"
    }else{
    li=document.createElement("li");
    var checkbox=document.createElement("input");
    checkbox.type="checkbox";
    checkbox.setAttribute("id","check");
    var label=document.createElement("label");
    label.setAttribute("for","item");

    //now add these elements on web

    ul.appendChild(li);
    li.appendChild(checkbox);
    label.appendChild(textNode);
    li.appendChild(label);
    ul.insertBefore(li,ul.childNodes[0]);
    setTimeout(()=>{
    li.className="visual";
    },50);

    input.value="";

    }
}

function removeItem(){
    var checked=document.querySelectorAll("#check");
    for(var i=0;i<checked.length;i++){
        if(checked[i].checked){
            var elem=checked[i].parentNode;
            console.log(elem.parentNode);
            elem.remove(i);
//            elem.style.display="none";
        }
    }
//    checked.forEach(x=>console.log(x.parentNode.style.);
}