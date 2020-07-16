function steamFlashInitialize(){
	var elem=document.getElementsByName("exampleRadios");
	elem.forEach(x=>{
		x.addEventListener('change',condselect);
	});
	
	
	document.querySelectorAll("form")[1].addEventListener('submit',flashCalc);
}
function condselect(){
	var elem=document.querySelector("#sat");
	var elem1=document.querySelector("#vapfracInput");
	var elem2=document.querySelector("#intemprature");
	var elem3=document.querySelector("#inpressure");
	if(elem.checked){
		var elem1=document.querySelector("#vapfracInput");
		elem1.classList.remove('d-none');
		elem2.addEventListener('input',fortempchange1);
		elem3.addEventListener('input',forpresschange1);
		elem1.addEventListener('input',inputValidation);
	}else{
		var elem1=document.querySelector("#vapfracInput");
		elem1.classList.add('d-none');
		elem2.removeEventListener('input',fortempchange1);
		elem3.removeEventListener('input',forpresschange1);
		elem1.removeEventListener('input',inputValidation);
	}
}
function inputValidation(){
	if((document.querySelector("#vapfrac").value<=1) && (document.querySelector("#vapfrac").value>=0)){
		document.querySelector('#vapfracWarning').classList.add('d-none');
	}else{
		document.querySelector('#vapfracWarning').classList.remove('d-none');
	}
	
}
function forpresschange1(){
	let press=document.querySelector("#inpressure");
	let temp=document.querySelector("#intemprature");
	document.querySelector("#in-temp-select").value=1;
	temp.value=r4_P_Tsat(pressConvertedValue1(press.value,"in-press-select","in-press-select1"))-273.15;
}
function fortempchange1(){
	let press=document.querySelector("#inpressure");
	let temp=document.querySelector("#intemprature");
	document.querySelector("#in-press-select").value=1;
	document.querySelector("#in-press-select1").value=1;
	press.value=r4_T_Psat(tempConvertedValue1(temp.value,"in-temp-select"))*10;
}
function flashCalc(event){
	event.preventDefault();
	var flow=document.querySelector('#flow').value;
	var t1=document.querySelector('#intemprature').value;
	var p1=document.querySelector("#inpressure").value;
	var p2=document.querySelector("#outpressure").value;
	var x=document.querySelector('#vapfrac').value;
	var result,result1,result2,totenth,t2;
	flow=flowConvertedValue1(flow,"flow-select");
	t1=tempConvertedValue1(t1,"in-temp-select");
	p1=pressConvertedValue1(p1,"in-press-select","in-press-select1");
	p2=pressConvertedValue1(p2,"out-press-select","out-press-select1");
	if(document.querySelector("#sat").checked){
		var sattemp1=r4_P_Tsat(p1);
		var sattemp2=r4_P_Tsat(p2);
		result1=solvept(p1,t1);
		if(result1.rho>300){
			result1=solvept(p1,t1+0.000001);
			result2=solvept(p1,t1);
		}else{
			result2=solvept(p1,t1-0.000001);
		}
		totenth=x*result1.h+(1-x)*result2.h;
		result1=solvept(p2,sattemp2);
		if(result1.rho>300){
			result1=solvept(p2,sattemp2+0.000001);
			result2=solvept(p2,sattemp2);
		}else{
			result2=solvept(p2,sattemp2-0.000001);
		}
		x=(result2.h-totenth)/(result2.h-result1.h);
		t2=sattemp2;
		if(x>1){
			x=1;
			result=solveph(p2,totenth);
			t2=result.t;
		}
	}else{
		var sattemp1=r4_P_Tsat(p1);
		var sattemp2=r4_P_Tsat(p2);
		if(t1>sattemp2){
			result=solvept(p1,t1);
			result1=solvept(p2,sattemp2);
			if(result1.rho>300){
				result1=solvept(p2,sattemp2+0.000001);
				result2=solvept(p2,sattemp2);
			}else{
				result2=solvept(p2,sattemp2-0.000001);
			}
			x=(result.h-result2.h)/(result1.h-result2.h);
			t2=sattemp2;
			if(x>1){
				x=1;
				result=solveph(p2,result.h);
				t2=result.t;
			}
		}else{
			x=0;
			t2=t1;
		}
	}
document.querySelector("#isenthTemp").value=round(t2-273.15,2);
document.querySelector("#vf").value=round(x,4);
document.querySelector("#liqflow").value=round(flow*3600*(1-x),2);
document.querySelector("#vapflow").value=round(flow*3600*x,2);
}