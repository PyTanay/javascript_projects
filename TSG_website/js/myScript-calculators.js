function loadView(){
	var main=document.querySelector(".calculator1");
	main.innerHTML=`<${sessionStorage.getItem("calculators_view")} template="${sessionStorage.getItem("calculators_view")}"></${sessionStorage.getItem("calculators_view")}>`;
	if(sessionStorage.getItem("calculators_view")=="unit-convertor"){
		Object.getOwnPropertyNames(units).forEach(function(x){
		createTabs(x)
	});
	}	
}
// document.onreadystatechange =function(){
// 	if(document.readyState=="complete"){
// 		rawFile.onreadystatechange=function(){
// 			console.log(rawFile.readyState);
// 			loadView();
// 		};
// 	}
// }