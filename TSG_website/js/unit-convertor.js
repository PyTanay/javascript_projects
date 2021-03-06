let units={};
var rawFile=new XMLHttpRequest();
function readCSV(){
	rawFile.open("GET","../data/unit-convertor.csv",true);
	rawFile.onreadystatechange=function(){
		if(rawFile.readyState==4){
			onLoad();
		}
	}
	function onLoad(){
		var csv=rawFile.responseText;
		processData(csv);
	}
	rawFile.send();
}
function processData(csv){
	let allTextLines=csv.split("\n");
	for(i=0;i<allTextLines.length-1;i++){
		if(i==0){continue;}
		let row=allTextLines[i].split(",");
		if(!units[row[0]]){
			units[row[0]]={"units":[],"conversion":[]}
		}
		units[row[0]]["units"].push(row[1]);
		units[row[0]]["conversion"].push(row[2]);
	}
	loadView();
	// Object.getOwnPropertyNames(units).forEach(function(x){
	// 	createTabs(x)
	// });
}


// console.log(units["area"]["units"].length,units["area"]["conversion"].length)
function populate(formname){
	var select=formname.parentNode.querySelectorAll("select");
	var d=document.createDocumentFragment();
	units[formname.parentNode.id.split("-").slice(2).join(" ")]["units"].forEach((x,index)=>{
		var options=document.createElement("option");
		options.innerText=x;
		options.value=units[formname.parentNode.id.split("-").slice(2).join(" ")]["conversion"][index];
		d.appendChild(options);
	});
	select.forEach((x)=>{
		x.appendChild(d.cloneNode(true));
		x.firstChild.selected=true;
	});
}
function calculate(var1){
	var doc1=var1.parentNode.parentNode.parentNode;
	var a=doc1.querySelector("#fromUnit").value;
	var selection1=doc1.querySelectorAll("select")[0].options[doc1.querySelectorAll("select")[0].selectedIndex].value;
	var selection2=doc1.querySelectorAll("select")[1].options[doc1.querySelectorAll("select")[1].selectedIndex].value;
	selection1=parseFloat(selection1);
	selection2=parseFloat(selection2);
	original=a*selection1;
	converted=a*selection1/selection2;
	doc1.querySelector("#toUnit").value=converted;
}
function swap(var1){
	var doc1=var1.parentNode.parentNode.parentNode;
	var select=doc1.querySelectorAll("select");
	var selection1=select[0].selectedIndex;
	var selection2=select[1].selectedIndex;
	select[0].options[selection1].selected=false;
	select[1].options[selection2].selected=false;
	select[0].options[selection2].selected=true;
	select[1].options[selection1].selected=true;
	calculate(doc1.querySelector("select"));
}


function createTabs(name){
	var unitConv=document.querySelector(`#main`);
	var navArea=document.querySelector("#nav-area").querySelector("div");
	var calculations=document.querySelector("#calculations").querySelector("div");
	var atag=document.createElement("a");
	atag.classList.add("nav-link");
	if(name==="mass"){
		atag.classList.add("active");
	}
	atag.id=name.split(" ").join("-");
	atag.href=`#v-pills-${atag.id}`;
	atag.setAttribute("role","tab");
	atag.setAttribute("data-toggle","pill");
	atag.innerText=name;
	// console.log(document);
	navArea.appendChild(atag);

	var unitConvertorForm=document.createElement("unit-convertor-form");
	unitConvertorForm.setAttribute("template","unit-convertor-form");
	var div=document.createElement("div");
	div.classList.add("tab-pane");
	div.classList.add("fade");
	if(name==="mass"){
		div.classList.add("show");
		div.classList.add("active");
	}
	div.id=`v-pills-${atag.id}`;
	div.setAttribute("role","tabpanel");
	div.appendChild(unitConvertorForm);
	// console.log(div);
	calculations.appendChild(div);
}
// createTabs("energy");
// console.log(document.querySelector("#main"));