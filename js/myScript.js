function leftscroll(){
	var element=document.getElementById("team1");
	element.scrollLeft=element.scrollLeft+300;
}

function rightscroll(){
	var element=document.getElementById("team1");
	element.scrollLeft=element.scrollLeft-300;
}


// Following code I initially wrote to position right scroll button dynamically with screen resize.
// But then I achieved same with bootstrap layout.


// console.log(document.getElementsByClassName("right-arrow")[0].style.left)
// window.addEventListener("resize",function(){
// 	var pos=window.innerWidth-166;
// 	document.getElementsByClassName("right-arrow")[0].style.left=pos+'px';
// 	console.log(document.getElementsByClassName("right-arrow")[0].style.offsetLeft)
// });

function velocitycalc(){
	location.href='calculators.html';

	// localStorage.setItem("html_view", `<velocity-calc template="velocity-calc"></velocity-calc>`);
	// window.on
}
function display(){
	// var elem=document.createElement("velocity-calc");
	// elem.setAttribute("template","velocity-calc");
	// console.log()
	console.log(location.href)
	if(location.href=="http://localhost:3000/calculators.html"){
		var main=document.querySelector("#main");
		console.log(main);
		// console.log(html_view)
		main.innerHTML=`<velocity-calc template="velocity-calc"></velocity-calc>`;
		console.log(localStorage.getItem("html_view"));
	}
}
document.addEventListener("DOMContentLoaded", display);