function steamTurbineInitialize(){
    var elem=document.querySelectorAll("form")[1]; //correct this index to 1 after adding it to main view...
    
    elem.addEventListener("submit",turbibeCalc);
}
function turbibeCalc(event){
    event.preventDefault();
    var t1=document.querySelector("#intemprature").value;
    var t2=document.querySelector("#outtemprature").value;
    var p1=document.querySelector("#inpressure").value;
    var p2=document.querySelector("#outpressure").value;
    var flow=document.querySelector("#flow").value;
    p1=pressConvertedValue1(p1,"in-press-select","in-press-select1");
    p2=pressConvertedValue1(p2,"out-press-select","out-press-select1");
    t1=tempConvertedValue1(t1,"in-temp-select");
    t2=tempConvertedValue1(t2,"out-temp-select");
    flow=flowConvertedValue1(flow,"flow-select");
    var result,inenth,outenth,diffenth,entr;
    result=solvept(p1,t1);
    inenth=result.h;
    entr=result.s;
    result=solvept(p2,t2);
    outenth=result.h;
    result=solveps(p2,entr);
    isentr_temp=result.t;
    isentr_enth=result.h;
    document.querySelector("#calcEnthalpyIn").value=round(inenth,2);
    document.querySelector("#calcEnthalpyOut").value=round(outenth,2);
    document.querySelector("#calcPower").value=round((inenth-outenth)*flow,2);
    document.querySelector("#isentrTemp").value=round((isentr_temp-273.15),2);
    document.querySelector("#caclEff").value=round((inenth-outenth)/(inenth-isentr_enth)*100,2);
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