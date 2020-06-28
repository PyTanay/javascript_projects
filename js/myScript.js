document.getElementById("left-button").addEventListener("click",function(){
	event.preventDefault()
})
document.getElementById("right-button").addEventListener("click",function(){
	event.preventDefault()
})

function leftscroll(){
	var element=document.getElementById("team1");
	element.scrollLeft=element.scrollLeft+300;
}

function rightscroll(){
	var element=document.getElementById("team1");
	element.scrollLeft=element.scrollLeft-300;
}
console.log(document.getElementsByClassName("right-arrow")[0].style.left)
window.addEventListener("resize",function(){
	// console.log(document.getElementById("right-button").getBoundingClientRect().left)
	// console.log(window.innerWidth)
	var pos=window.innerWidth-166;
	console.log(`"` +pos +`px"`)

	document.getElementsByClassName("right-arrow")[0].style.left=pos+'px';
	console.log(document.getElementsByClassName("right-arrow")[0].style.offsetLeft)

});