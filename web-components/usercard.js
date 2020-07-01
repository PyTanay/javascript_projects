const template=document.createElement("template");
template.innerHTML=`
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<style>
h3{color:blue;}
.user-class{
	font-family:verdana;
	display:grid;
	background-color:#f3f3f3;
	grid-template-columns:1.2fr 5fr;
	margin-bottom:15px;
	border-bottom:darkorchid 5px solid;
}
.user-class img{
	width:100%;
}
</style>
<div class="user-class">
<img />
	<div class="container">
		<h3></h3>
		<div class="info">
			<p>Phone : <slot name="phone"/></p>
			<p>Email : <slot name="email"/></p>
		</div>
		<button id="toggle-info" class="btn btn-lg btn-success">Hide Me</button>
		<button id="pause" class="btn btn-lg btn-primary">Play</button>
	</div>
</div>
`;

class usercard extends HTMLElement{
	constructor(){
		super();
		this.showInfo=true;
		this.pause=false;
		this.count=1
		this.attachShadow({mode:"open"});
		this.shadowRoot.appendChild(template.content.cloneNode(true));
		this.shadowRoot.querySelector("h3").innerText="Hello " + this.getAttribute("name");
		this.shadowRoot.querySelector("img").src=this.getAttribute("avatar")+this.count+".jpg";
		var doc = this;
		var count1=1;
		this.dpchange=function(){
			var img1=doc.shadowRoot.querySelector("img");
			var attr1=doc.getAttribute("avatar");
			if(typeof(count1)=="undefined"){count1=1}
			img1.src=attr1+count1+".jpg";
			count1=count1+1;
			// console.log(i)
			if (count1==99){count1=1}
		};
	}
	


	toggleInfo(){
		var btn=this.shadowRoot.querySelector("#toggle-info");
		var info=this.shadowRoot.querySelector(".info");
		this.showInfo=!this.showInfo;
		if(this.showInfo){
			info.style.display="block";
			btn.innerText="Hide Info";
		}else{
			info.style.display="none";
			btn.innerText="Show Info";
		}
	}
	pause1(){
		// var start=window.setInterval(dpchange,300);
		var start;
		var btn=this.shadowRoot.querySelector("#pause");
		this.pause=!this.pause;
		var i=this.count;
		var j;
		if(this.pause){
			btn.innerText="That's Me";
			this.start=window.setInterval(this.dpchange,300);
		}else{
			btn.innerText="Play";
			// console.log(i)
			window.clearInterval(this.start);
		}
		var img1=this.shadowRoot.querySelector("img");
		var attr1=this.getAttribute("avatar");

		// function dpchange(){
		// 	console.log(i)
		// 	if(typeof(i)=="undefined"){i=1}
		// 	img1.src=attr1+i+".jpg";
		// 	i=i+1;
		// 	// console.log(i)
		// 	if (i==99){i=1}
		// }
	}


	connectedCallback(){
		this.shadowRoot.querySelector("#toggle-info").addEventListener("click",()=>this.toggleInfo());
		this.shadowRoot.querySelector("#pause").addEventListener("click",()=>this.pause1());
	}

	disconnectedCallback(){
		this.shadowRoot.querySelector("#toggle-info").removeEventListener();
		this.shadowRoot.querySelector("#pause").removeEventListener();
	}
}

window.customElements.define("user-cards",usercard);