// var template=document.createElement("template");
function execute(template2,_callback){
	var request=new XMLHttpRequest();
	var location="/templates/" + template2 + ".html";
	request.open("GET",location,true);
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
		var template1=DOM.getAttribute("template");
		var name=DOM.getAttribute("name");
		execute(template1,final);
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


class scrollingCards extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
			DOM.querySelector("#left-button").addEventListener("click",function(){event.preventDefault()});
			DOM.querySelector("#right-button").addEventListener("click",function(){event.preventDefault()});
		}
		execute(template1,final);
	}
}
window.customElements.define("scrolling-cards",scrollingCards);


class twoColumnSection extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var col1=DOM.getAttribute("col1");
		var col2=12-col1;
		var title=DOM.querySelector(".title").innerText;
		var imgname=DOM.getAttribute("imgname");
		var link="img/" + imgname + ".jpg";
		var content=DOM.querySelector(".content").innerHTML;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
			DOM.querySelector("h2").innerText=title;
			DOM.querySelector(".content").innerHTML=content;
			DOM.querySelector("img").src=link;
			DOM.querySelector("img").alt=imgname;
			DOM.querySelector("#col1").className=`col-lg-${col1}`;
			DOM.querySelector("#col2").className=`col-lg-${col2}`;
		}
		execute(template1,final);
	}
}
window.customElements.define("two-col-section",twoColumnSection);


class socialIcons extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
		}
		execute(template1,final);
	}
}
window.customElements.define("social-icons",socialIcons);


class customFooter extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
		}
		execute(template1,final);
	}
}
window.customElements.define("custom-footer",customFooter);


class imageCarousel extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
		}
		execute(template1,final);
	}
}
window.customElements.define("image-carousel",imageCarousel);


class customNav extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
		}
		execute(template1,final);
	}
}
window.customElements.define("custom-nav",customNav);


class sideNav extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
		}
		execute(template1,final);
	}
}
window.customElements.define("side-nav",sideNav);


class velocityCalc extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
		}
		execute(template1,final);
	}
}
window.customElements.define("velocity-calc",velocityCalc);


class calcForm extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1="unit-convertor-form";
		var formname=this;
		function final(){
			DOM.innerHTML=template;
			populate(formname);
		}
		execute(template1,final);
	}
}
window.customElements.define("unit-convertor-form",calcForm);


class unitConvertor extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
			loadTabs();
		}
		execute(template1,final);
	}
}
window.customElements.define("unit-convertor",unitConvertor);

class steamTableResult extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
			resultTableInsertValues();
		}
		execute(template1,final);
	}
}
window.customElements.define("steam-table-result",steamTableResult);

class steamTable extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
			steamTableInitialize();
			steamTableEventListener();
			supsatCheck();
		}
		execute(template1,final);
	}
}
window.customElements.define("steam-table",steamTable);

class steamTurbine extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
			steamTurbineInitialize();
		}
		execute(template1,final);
	}
}
window.customElements.define("steam-turbine",steamTurbine);

class steamFlashing extends HTMLElement{
	constructor(){
		super();
		var DOM=this;
		var template1=DOM.getAttribute("template");
		function final(){
			DOM.innerHTML=template;
			steamFlashInitialize();
		}
		execute(template1,final);
	}
}
window.customElements.define("steam-flash-calc",steamFlashing);