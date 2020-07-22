function steamTurbineInitialize(){
    var elem=document.querySelectorAll("form")[1]; //correct this index to 1 after adding it to main view...
    document.getElementsByName('powereff').forEach(x=>x.addEventListener('change',powereffChange));
    document.getElementsByName('presstemp').forEach(x=>x.addEventListener('change',outTempPressChange));
    document.getElementsByName('supsat1').forEach(x=>x.addEventListener('change',insupsatChange));
    document.getElementsByName('supsat2').forEach(x=>x.addEventListener('change',outsupsatChange));
    elem.addEventListener("submit",turbibeCalc);
}
function insupsatChange(){
    if(this.value==2){
        document.querySelector('#inVapFrac').classList.remove('d-none');
        document.querySelector('#vapfrac1').required=true;
        document.querySelector('#vapfrac1').addEventListener('input',inputValidation1);
        document.querySelector('#inpressure').addEventListener('input',forInPressChange1);
        document.querySelector('#intemprature').addEventListener('input',forInTempChange1);
    }else{
        document.querySelector('#inVapFrac').classList.add('d-none');
        document.querySelector('#vapfrac1').required=false;
        document.querySelector('#vapfrac1').removeEventListener('input',inputValidation1);
        document.querySelector('#inpressure').removeEventListener('input',forInPressChange1);
        document.querySelector('#intemprature').removeEventListener('input',forInTempChange1);
    }
}
function outsupsatChange(){
    if(this.value==2){
        document.querySelector('#outVapFrac').classList.remove('d-none');
        document.querySelector('#vapfrac2').required=true;
        document.querySelector('#vapfrac2').addEventListener('input',inputValidation2);
        document.querySelector('#outpressure').addEventListener('input',forInPressChange2);
        document.querySelector('#outtemprature').addEventListener('input',forInTempChange2);
    }else{
        document.querySelector('#outVapFrac').classList.add('d-none');
        document.querySelector('#vapfrac2').required=false;
        document.querySelector('#vapfrac2').removeEventListener('input',inputValidation2);
        document.querySelector('#outpressure').removeEventListener('input',forInPressChange2);
        document.querySelector('#outtemprature').removeEventListener('input',forInTempChange2);
    }
}
function forInPressChange1(){
    let press=document.querySelector("#inpressure");
    let temp=document.querySelector("#intemprature");
    document.querySelector("#in-temp-select").value=1;
    temp.value=r4_P_Tsat(pressConvertedValue1(press.value,"in-press-select","in-press-select1"))-273.15;
}
function forInTempChange1(){
    let press=document.querySelector("#inpressure");
    let temp=document.querySelector("#intemprature");
    document.querySelector("#in-press-select").value=1;
    document.querySelector("#in-press-select1").value=1;
    press.value=r4_T_Psat(tempConvertedValue1(temp.value,"in-temp-select"))*10;
}
function forInPressChange2(){
    let press=document.querySelector("#outpressure");
    let temp=document.querySelector("#outtemprature");
    document.querySelector("#out-temp-select").value=1;
    temp.value=r4_P_Tsat(pressConvertedValue1(press.value,"out-press-select","out-press-select1"))-273.15;
}
function forInTempChange2(){
    let press=document.querySelector("#outpressure");
    let temp=document.querySelector("#outtemprature");
    document.querySelector("#out-press-select").value=1;
    document.querySelector("#out-press-select1").value=1;
    press.value=r4_T_Psat(tempConvertedValue1(temp.value,"out-temp-select"))*10;
}
function inputValidation1(){
    if((document.querySelector("#vapfrac1").value<=1) && (document.querySelector("#vapfrac1").value>=0)){
        document.querySelector('#vapfracWarning1').classList.add('d-none');
    }else{
        document.querySelector('#vapfracWarning1').classList.remove('d-none');
    }
}
function inputValidation2(){
    if((document.querySelector("#vapfrac2").value<=1) && (document.querySelector("#vapfrac2").value>=0)){
        document.querySelector('#vapfracWarning2').classList.add('d-none');
    }else{
        document.querySelector('#vapfracWarning2').classList.remove('d-none');
    }
    
}
function powereffChange(){
    if(this.value==2){
        document.querySelector('#outcond').classList.add('d-none');
        document.querySelector('#outpresstemp').classList.remove('d-none');
        document.querySelector('#eff').classList.remove('d-none');
        document.querySelector('#efficiency').required=true;
        outTempPressChange();
        document.getElementsByName('presstemp').forEach(x=>x.addEventListener('change',outTempPressChange));
    }else{
        document.querySelector('#outcond').classList.remove('d-none');
        document.querySelector('#outpresstemp').classList.add('d-none');
        document.querySelector('#eff').classList.add('d-none');
        document.querySelector('#efficiency').required=false;
        document.getElementsByName('presstemp').forEach(x=>x.removeEventListener('change',outTempPressChange));
        document.querySelector('#outletpress').classList.remove('d-none');
        document.querySelector('#outpressure').required=true;
        document.querySelector('#p-input-group2').classList.remove('d-none');
        document.querySelector('#outlettemp').classList.remove('d-none');
        document.querySelector('#outtemprature').required=true;
    }
}
function outTempPressChange(){
    if(document.querySelector('#press2').checked){
            document.querySelector('#outletpress').classList.remove('d-none');
            document.querySelector('#outpressure').required=true;
            document.querySelector('#p-input-group2').classList.remove('d-none');
            document.querySelector('#outlettemp').classList.add('d-none');
            document.querySelector('#outtemprature').required=false;
        }else{
            document.querySelector('#outletpress').classList.add('d-none');
            document.querySelector('#outpressure').required=false;
            document.querySelector('#p-input-group2').classList.add('d-none');
            document.querySelector('#outlettemp').classList.remove('d-none');
            document.querySelector('#outtemprature').required=true;
        }
}
function turbibeCalc(event){
    event.preventDefault();
    var t1=document.querySelector("#intemprature").value;
    var t2=document.querySelector("#outtemprature").value;
    var p1=document.querySelector("#inpressure").value;
    var p2=document.querySelector("#outpressure").value;
    var flow=document.querySelector("#flow").value;
    var infrac=document.querySelector('#vapfrac1').value;
    var outfrac=document.querySelector('#vapfrac2').value;
    var eff=document.querySelector('#efficiency').value;
    p1=pressConvertedValue1(p1,"in-press-select","in-press-select1");
    p2=pressConvertedValue1(p2,"out-press-select","out-press-select1");
    t1=tempConvertedValue1(t1,"in-temp-select");
    t2=tempConvertedValue1(t2,"out-temp-select");
    flow=flowConvertedValue1(flow,"flow-select");
    eff=eff/100;
    var result,inenth,outenth,diffenth,entr;
    if(document.querySelector('#PowerCalc').checked){
        if(document.querySelector('#sup1').checked){
            if(document.querySelector('#sup2').checked){
                result=solvept(p1,t1);
                Tsat_in=r4_P_Tsat(p1);
                Tsat_out=r4_P_Tsat(p2);
                inenth=result.h;
                entr=result.s;
                result=solvept(p2,t2);
                outenth=result.h;
                result=solveps(p2,entr);
                isentr_temp=result.t;
                isentr_enth=result.h;
                eff=(inenth-outenth)/(inenth-isentr_enth)*100;
                if(eff>100 || eff<=1){
                    document.querySelector('#turbine-results').classList.add('d-none');
                    document.querySelector('#error').classList.remove('d-none');
                }else{
                    document.querySelector('#turbine-results').classList.remove('d-none');
                    document.querySelector('#error').classList.add('d-none');
                }
            }else{
                result=solvept(p1,t1);
                Tsat_in=r4_P_Tsat(p1);
                Tsat_out=r4_P_Tsat(p2);
                inenth=result.h;
                entr=result.s;
                liqentr=solvept(p2,Tsat_out-.00001).h;
                vapentr=solvept(p2,Tsat_out+.00001).h;
            }
        }else{
            if(document.querySelector('#sup2').checked){

            }else{
                
            }
        }
    }else{
        if(document.querySelector('#sup1').checked){
            if(document.querySelector('#press2').checked){

            }else{

            }
        }else{
            if(document.querySelector('#press2').checked){

            }else{

            }
        }
    }
    
    
    document.querySelector("#calcEnthalpyIn").value=round(inenth,2);
    document.querySelector("#calcEnthalpyOut").value=round(outenth,2);
    document.querySelector("#calcPower").value=round((inenth-outenth)*flow,2);
    document.querySelector("#isentrTemp").value=round((isentr_temp-273.15),2);
    document.querySelector("#caclEff").value=round(eff,2);
    document.querySelector("#outpress").value=round(p2*10,2);
    document.querySelector("#outtemp").value=round(t2-273.15,2);
    document.querySelector("#outfrac").value=round(outfrac,2);
    
}
function pressConvertedValue1(press,pressSelect,pressSelect1){
    press=parseFloat(press);
    var absg=document.querySelector(`#${pressSelect1}`).value;
    var pres1unit=document.querySelector(`#${pressSelect}`).value;
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
function tempConvertedValue1(temp,tempSelect){
    temp=parseFloat(temp);
    var temp1unit=document.querySelector(`#${tempSelect}`).value;
    switch(temp1unit){
        case "1":return (temp+273.15);break;
        case "2":return temp;break;
        case "3":return (temp-32)*5/9+273.15;break;
        case "4":return (temp*5/9);break;
    }
}
function flowConvertedValue1(flow,flowSelect){
    flow=parseFloat(flow);
    var flow1unit=document.querySelector(`#${flowSelect}`).value;
    switch(flow1unit){
        case "1":return (flow/3600);break;
        case "2":return flow;break;
        case "3":return (flow*0.000125998);break;
        case "4":return (flow*0.00755987);break;
    }
}