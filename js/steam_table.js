function steamTableInitialize(){
	var elem=document.querySelectorAll("form")[1];
	elem.removeEventListener("submit",ptEventListener);
	elem.addEventListener("submit",ptEventListener);
}
function ptEventListener(event){
		event.preventDefault();
		calculatept();
	}
function phEventListener(event){
		event.preventDefault();
		calculateph();
	}
function psEventListener(event){
		event.preventDefault();
		calculateps();
	}
function hsEventListener(event){
		event.preventDefault();
		calculatehs();
	}
// extended round function
function round(value, precision) {
  if (Number.isInteger(precision)) {
    var shift = Math.pow(10, precision);
    // Limited preventing decimal issue
    return (Math.round( value * shift + 0.00000000000001 ) / shift);
  } else {
    return Math.round(value);
  }
} 
function steamTableEventListener(){
	var elem=document.querySelector("#func-select");
	var elem1=document.querySelector("#p-input-group");
	var elem2=document.querySelector("#t-input-group");
	var elem3=document.querySelector("#h-input-group");
	var elem4=document.querySelector("#s-input-group");
	var elem5=document.querySelector("#p-input-group1");
	var ele1=document.querySelector("#pressure");
	var ele2=document.querySelector("#temprature");
	var ele3=document.querySelector("#enthalpy");
	var ele4=document.querySelector("#entropy");
	var form=document.querySelectorAll("form")[1];
	elem.addEventListener("change",(event)=>{
		elem1.classList.remove("d-none");
		elem2.classList.remove("d-none");
		elem3.classList.remove("d-none");
		elem4.classList.remove("d-none");
		elem5.classList.remove("d-none");
		ele1.required=false;
		ele2.required=false;
		ele3.required=false;
		ele4.required=false;
		form.removeEventListener("submit",ptEventListener);
		form.removeEventListener("submit",phEventListener);
		form.removeEventListener("submit",psEventListener);
		form.removeEventListener("submit",hsEventListener);
		switch(elem.value){
			case "1":
				elem3.classList.add("d-none");
				elem4.classList.add("d-none");
				ele1.required=true;
				ele2.required=true;
				form.addEventListener("submit",ptEventListener);
				break;
			case "2":
				elem2.classList.add("d-none");
				elem4.classList.add("d-none");
				ele1.required=true;
				ele3.required=true;
				form.addEventListener("submit",phEventListener);
				break;
			case "3":
				elem2.classList.add("d-none");
				elem3.classList.add("d-none");
				ele1.required=true;
				ele4.required=true;
				form.addEventListener("submit",psEventListener);
				break;
			case "4":
				elem1.classList.add("d-none");
				elem2.classList.add("d-none");
				elem5.classList.add("d-none");
				ele3.required=true;
				ele4.required=true;
				form.addEventListener("submit",hsEventListener);
				break;
		};
	});
}

// form validation
window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');

                // Get all form-groups in need of validation
                var validateGroup = document.getElementsByClassName('validate-me');

                // Loop over them and prevent submission
                var validation = Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }

                        //Added validation class to all form-groups in need of validation
                        for (var i = 0; i < validateGroup.length; i++) {
                            validateGroup[i].classList.add('was-validated');
                        }
                    }, false);
                });
            }, false);
var result;
function calculatept(){
	var temp1=document.querySelector("#temprature").value;
	var pres1=document.querySelector("#pressure").value;
	pres1=pressConvertedValue(pres1);
	temp1=tempConvertedValue(temp1);
	result=solvept(pres1,temp1);
	var anstable=document.querySelector("#ans-table");
	if(!(anstable.querySelector("table")==null)){
		resultTableInsertValues();
	}else{
		anstable.innerHTML=`<steam-table-result template="steam-table-result"></steam-table-result>`;
	};	
}
function calculateph(){
	var enth1=document.querySelector("#enthalpy").value;
	var pres1=document.querySelector("#pressure").value;
	pres1=pressConvertedValue(pres1);
	enth1=enConvertedValue(enth1);
	result=solveph(pres1,enth1);
	var anstable=document.querySelector("#ans-table");
	if(!(anstable.querySelector("table")==null)){
		resultTableInsertValues();
	}else{
		anstable.innerHTML=`<steam-table-result template="steam-table-result"></steam-table-result>`;
	};	
}
function calculateps(){
	var entr1=document.querySelector("#entropy").value;
	var pres1=document.querySelector("#pressure").value;
	pres1=pressConvertedValue(pres1);
	entr1=enConvertedValue(entr1);
	result=solveps(pres1,entr1);
	var anstable=document.querySelector("#ans-table");
	if(!(anstable.querySelector("table")==null)){
		resultTableInsertValues();
	}else{
		anstable.innerHTML=`<steam-table-result template="steam-table-result"></steam-table-result>`;
	};	
}
function calculatehs(){
	var entr1=document.querySelector("#entropy").value;
	var enth1=document.querySelector("#enthalpy").value;
	enth1=enConvertedValue(enth1);
	entr1=enConvertedValue(entr1);
	result=solvehs(enth1,entr1);
	var anstable=document.querySelector("#ans-table");
	if(!(anstable.querySelector("table")==null)){
		resultTableInsertValues();
	}else{
		anstable.innerHTML=`<steam-table-result template="steam-table-result"></steam-table-result>`;
	};	
}
function resultTableInsertValues(){
		document.querySelectorAll("tr")[1].childNodes[3].innerHTML=round(result.p,5);
		document.querySelectorAll("tr")[2].childNodes[3].innerHTML=round(result.t,2);
		document.querySelectorAll("tr")[3].childNodes[3].innerHTML=round(result.v,5);
		document.querySelectorAll("tr")[4].childNodes[3].innerHTML=round(result.rho,2);
		document.querySelectorAll("tr")[5].childNodes[3].innerHTML=round(result.u,2);
		document.querySelectorAll("tr")[6].childNodes[3].innerHTML=round(result.s,3);
		document.querySelectorAll("tr")[7].childNodes[3].innerHTML=round(result.h,2);
		document.querySelectorAll("tr")[8].childNodes[3].innerHTML=round(result.cp,3);
		document.querySelectorAll("tr")[9].childNodes[3].innerHTML=round(result.cv,3);
		document.querySelectorAll("tr")[10].childNodes[3].innerHTML=round(result.w,2);
		document.querySelectorAll("tr")[11].childNodes[3].innerHTML=round(result.mu,5);
		document.querySelectorAll("tr")[12].childNodes[3].innerHTML=round(result.k,3);
		document.querySelectorAll("tr")[13].childNodes[3].innerHTML=round(result.epsilon,3);
	} 
function pressConvertedValue(press){
	press=parseFloat(press);
	var absg=document.querySelector("#press-select1").value;
	var pres1unit=document.querySelector("#press-select").value;
	if(absg==1){
		switch(pres1unit){
			case "1":return press/10;break;
			case "2":return press*0.0980665;break;
			case "3":return press/1000;break;
		}
	}else{
		switch(pres1unit){
			case "1":return (press/10+1.01325/10);break;
			case "2":return (press*0.0980665+1.03323*0.0980665);break;
			case "3":return (press/1000+101.32524976612/1000);break;
		}
	}
}
function tempConvertedValue(temp){
	temp=parseFloat(temp);
	var temp1unit=document.querySelector("#temp-select").value;
	switch(temp1unit){
		case "1":return (temp+273.15);break;
		case "2":return temp;break;
		case "3":return (temp-32)*5/9+273.15;break;
		case "4":return (temp*5/9);break;
	}
}
function enConvertedValue(temp){
	temp=parseFloat(temp);
	var temp1unit=document.querySelector("#temp-select").value;
	switch(temp1unit){
		case "1":return temp;break;
		case "2":return temp*0.23884589662749592;break;
		case "3":return temp*0.4299226139294927;break;
		case "4":return temp*0.23884589662749592;break;
	}
}

var constants = {
			// Critical and Gas Constants
			'R' : 0.461526,					// kJ/kg.K
			//'Tc' : 647.096,					// K
			'Pc' : 22.064,					// Mpa
			//'Rhoc' : 322,					// kg/m3

			// Temperature and Pressure region limits
			'MIN_P' : 0.000611213,			// MPa
			'MAX_P' : 100.0,				// MPa
			'MAX_T' : 2273.15,				// K
			'MIN_T' : 273.15,				// K
			'MIN_S' : -0.000154549592045,	// kJ/kg
			'MIN_H' : -0.041587825659104,	// kJ/kg.K

			'R2_MIN_T' : 623.15,			// K
			'R2_MAX_T' : 1073.15,			// K
			'R2_CRT_S' : 5.85,				// kJ/kg.K
			'R2_CRT_P' : 4.0,				// MPa

			'B23_MIN_P' : 16.5292,			// MPa (The region 2-3 boundary pressure at R2_MIN_T)
			'B23_MAX_T' : 863.15,			// K   (The region 2-3 boundary temperature at MAX_P)

			'R5_MIN_T' : 1073.15,			// K
			'R5_MAX_P' : 50,				// Mpa
			'R5_MAX_T' : 2273.15,			// K

			'R3_MIN_T' : 623.15,			// K
			'R3_CRT_S' : 4.41202148223476,	// kJ/kg.K

			'B23_S_MIN' : 5.048096828,
			'B23_S_MAX' : 5.260578707,

			'B23_H_MIN' : 2563.592004,
			'B23_H_MAX' : 2812.942061,
		};
var R=CONST("R");
var NS = {
			SteamResult : SteamResult,
			Exception : Exception,
			CONST : CONST
			// viscosity : aux_Viscosity,
			// thermal_conductivity : aux_Thermal_Conductivity,
			// surface_tension : aux_Surface_Tension,
			// dielectric_constant : aux_Dielectric_Constant,
			// ionization_constant : aux_Ionization_Constant,

		};
function CONST(name)
	{
		if (constants.hasOwnProperty(name))
		{
			return constants[name];
		}

		return null;
	}
function generateResult(r)
	{
		return new NS.SteamResult(r);
	}
function SteamResult(initValue)
	{
		var self = this;

		// Pressure, P, Mpa
		self.p = initValue.p;
		// Temperature, T, K
		self.t = initValue.t;
		// Specific volume, v, m^3/kg
		self.v = initValue.v;
		// Density, rho, kg/m^3
		self.rho = 1/initValue.v;
		// Specific internal energy, u, kJ/kg
		self.u = initValue.u;
		// Specific entropy, s, kJ/kg
		self.s = initValue.s;
		// Specific enthalpy, h, kJ/kg.K
		self.h = initValue.h;
		// Specific isobaric heat capacity, Cp kJ/kg.K
		self.cp = initValue.cp;
		// Specific isochoric heat capacity, Cv
		self.cv = initValue.cv;
		// Speed of Sound, w, m/s
		self.w = initValue.w;


		// Activate these after auxillary functions for other properties***************
		// Viscosity cP,
		self.mu = aux_Viscosity(initValue.t, self.rho)/1000;
		// Thermal Conductivity W/m.K
		self.k = aux_Thermal_Conductivity(initValue.t, self.rho)/1000;
		// Surface Tension mN/m
		// self.sig = aux_Surface_Tension(initValue.t);
		// Dielectric constant
		self.epsilon = aux_Dielectric_Constant(initValue.t, self.rho);
		// Ionisation constant
		// self.ic = aux_Ionization_Constant(initValue.t, self.rho);
	}

// // Exception
function Exception(message)
	{
		var anstable=document.querySelector("#ans-table");
		anstable.innerHTML=`<p class="lead text-danger">The current input values are out of range for the IAWPS correlations</p>`;
		this.name = 'thermo.IAWPS Exception';
		this.message = message || 'The current input values are out of range for the IAWPS correlations';
	}