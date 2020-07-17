function leftscroll(){
	var element=document.getElementById("team1");
	element.scrollLeft=element.scrollLeft+300;
}

function rightscroll(){
	var element=document.getElementById("team1");
	element.scrollLeft=element.scrollLeft-300;
}
if(window.location.href.includes('index.html')){
	sessionStorage.setItem("calculators_view", "velocity-calc");
}

// Following code I initially wrote to position right scroll button dynamically with screen resize.
// But then I achieved same with bootstrap layout.


// console.log(document.getElementsByClassName("right-arrow")[0].style.left)
// window.addEventListener("resize",function(){
// 	var pos=window.innerWidth-166;
// 	document.getElementsByClassName("right-arrow")[0].style.left=pos+'px';
// 	console.log(document.getElementsByClassName("right-arrow")[0].style.offsetLeft)
// });


// var calculators_view;
function velocityCalcView(){
	sessionStorage.setItem("calculators_view", "velocity-calc");
	commonLoadView();
}
function safetyValveCalcView(){
	sessionStorage.setItem("calculators_view", "safety-valve-calc");
	commonLoadView();
}
function unitConvertorView(){
	sessionStorage.setItem("calculators_view", "unit-convertor");
	commonLoadView();
}
function steamTableView(){
	sessionStorage.setItem("calculators_view", "steam-table");
	commonLoadView();
}
function steamTurbineView(){
	sessionStorage.setItem("calculators_view", "steam-turbine");
	commonLoadView();
}
function steamFlashingView(){
	sessionStorage.setItem("calculators_view", "steam-flash-calc");
	commonLoadView();
}
function commonLoadView(){
	if(!document.location.href.includes("calculators")){
		document.location.href='calculators.html';
	}
	if(document.location.href.includes('calculators.html') && (document.readyState=="complete")){
		loadView();
	}
}


// function display(){
// 	// var elem=document.createElement("velocity-calc");
// 	// elem.setAttribute("template","velocity-calc");
// 	// console.log()
// 	console.log(location.href)
// 	if(location.href=="http://localhost:3000/calculators.html"){
// 		var main=document.querySelector("#main");
// 		console.log(main);
// 		// console.log(html_view)
// 		main.innerHTML=`<velocity-calc template="velocity-calc"></velocity-calc>`;
// 		console.log(localStorage.getItem("html_view"));
// 	}
// }
// document.addEventListener("DOMContentLoaded", display);

function scrollToTargetAdjusted(){
    var element = document.querySelector('scrolling-cards');
    var headerOffset = 45;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
}