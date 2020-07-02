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