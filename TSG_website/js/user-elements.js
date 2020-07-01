// var template=document.createElement("template");
function execute(_callback){
	var request=new XMLHttpRequest();
	request.open("GET","/templates/team-card.html",true);
	request.send();
	request.onload=function(){
	template=request.responseText;
	_callback();
	}
}

class usercard extends HTMLElement{
	constructor(){
		super();
		// this.attachShadow({mode:"open"});
		var DOM=this;
		var description=DOM.innerText;
		var name=DOM.getAttribute("name");
		execute(final);
		function final(){
			DOM.innerHTML=template;
			DOM.querySelector("#name").innerText=name;
			DOM.querySelector("img").alt=name.split(" ")[0];
			DOM.querySelector("img").src=`img/${name.split(" ")[0].toLowerCase()}.jpg`;
			DOM.querySelector("p").innerText=description;
		}
	}
}
window.customElements.define("user-card",usercard);