function loadView(){
	var main=document.querySelector(".calculator1");
	main.innerHTML=`<${sessionStorage.getItem("calculators_view")} template="${sessionStorage.getItem("calculators_view")}"></${sessionStorage.getItem("calculators_view")}>`;
	if(sessionStorage.getItem("calculators_view")=="unit-convertor"){
		// console.log(main);
		// console.log(document.querySelector("unit-convertor").innerHTML);
		// loadTabs();
	}	
}
function loadTabs(){
	Object.getOwnPropertyNames(units).forEach(function(x){
		createTabs(x)
	});
}
// document.onreadystatechange =function(){
// 	if(document.readyState=="complete") && (sessionStorage.getItem("calculators_view")=="unit-convertor"){
// 		rawFile.onreadystatechange=function(){
// 			console.log(rawFile.readyState);
// 			loadView();
// 		};
// 	}
// }
