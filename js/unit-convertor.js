let units = {};
units = {
  mass: {
    units: [
      "kilogram (kg)",
      "gram",
      "milligram",
      "microgram",
      "tonne/metric ton",
      "long ton/British ton",
      "short ton/US ton",
      "long hundredweight",
      "short hundredweight",
      "long quarter",
      "short quarter",
      "stone",
      "pound",
      "ounce",
      "grain",
      "carat",
    ],
    conversion: [
      "1\r",
      "0.001\r",
      "1.00E-06\r",
      "1.00E-09\r",
      "1000\r",
      "1016.05\r",
      "907.185\r",
      "51\r",
      "45\r",
      "13\r",
      "11\r",
      "6.4\r",
      "0.453592\r",
      "0.0283495\r",
      "6.50E-05\r",
      "0.0002\r",
    ],
  },
  distance: {
    units: [
      "kilometre (km)",
      "metre (m)",
      "centimetre (cm)",
      "millimetre (mm)",
      "micrometre (um)",
      "nanometre (nm)",
      "Angstrom (A)",
      "mile",
      "furlong",
      "chain",
      "rod/pole/perch",
      "fathom",
      "yard",
      "foot (ft)",
      "inch (in)",
      "nautical mile",
      "parsec",
      "light-year",
      "astronomical unit",
      "gigametre",
      "megametre",
      "hectometre",
      "decametre",
      "decimetre",
    ],
    conversion: [
      "1.00E+03\r",
      "1\r",
      "0.01\r",
      "1.00E-03\r",
      "1.00E-06\r",
      "1.00E-09\r",
      "1.00E-10\r",
      "1609.344\r",
      "201.168\r",
      "20.1168\r",
      "5.0292\r",
      "1.8288\r",
      "0.9144\r",
      "0.3048\r",
      "0.0254\r",
      "1852\r",
      "3.09E+16\r",
      "9.46E+15\r",
      "1.50E+11\r",
      "1.00E+09\r",
      "1.00E+06\r",
      "100\r",
      "10\r",
      "0.1\r",
    ],
  },
  area: {
    units: [
      "square kilometre (km2)",
      "square metre (m2)",
      "square centimetre (cm2)",
      "square millimetre (mm2)",
      "hectare",
      "square mile (mile2)",
      "acre",
      "square yard (yard2)",
      "square foot (foot2)",
      "square inch (in2)",
      "square nautical mile",
    ],
    conversion: [
      "1.00E+06\r",
      "1\r",
      "1.00E-04\r",
      "1.00E-06\r",
      "1.00E+04\r",
      "2.59E+06\r",
      "4046.9\r",
      "0.83612736\r",
      "0.09290304\r",
      "0.00064516\r",
      "3429904\r",
    ],
  },
  volume: {
    units: [
      "cubic metre (m3)(SI unit)",
      "barrel (petroleum)",
      "Cubic centimeter (cm3 = ml)",
      "litre (=dm3)",
      "cubic foot (ft3)",
      "cubic inch (in3)",
      "ounce (fluid imperial)",
      "ounce (fluid US customary)",
      "ounce (fluid US food nutrition)",
      "gallon (imperial)",
      "gallon (US dry)",
      "gallon (beer)",
      "gallon (US fluid; Wine)",
      "acre-foot",
      "acre-inch",
      "barrel (imperial)",
      "barrel (US dry)",
      "barrel (US fluid)",
      "cubic fathom",
      "cubic mile",
      "cubic yard",
      "pint (imperial)",
      "pint (US dry)",
      "pint (US fluid)",
      "quart (imperial)",
      "quart (US dry)",
      "quart (US fluid)",
      "tablespoon (imperial)",
      "tablespoon (metric)",
    ],
    conversion: [
      "1\r",
      "0.158987295\r",
      "1.00E-06\r",
      "0.001\r",
      "0.028316847\r",
      "1.64E-05\r",
      "2.84E-05\r",
      "2.96E-05\r",
      "0.00003\r",
      "0.00454609\r",
      "0.004404884\r",
      "0.004621152\r",
      "0.003785412\r",
      "1233.481838\r",
      "1.03E+02\r",
      "0.16365924\r",
      "0.115628199\r",
      "0.119240471\r",
      "6.116438864\r",
      "4.17E+09\r",
      "0.764554858\r",
      "0.000568261\r",
      "0.00055061\r",
      "0.000473176\r",
      "0.001136523\r",
      "0.001101221\r",
      "0.000946353\r",
      "1.78E-05\r",
      "0.000015\r",
    ],
  },
  Density: {
    units: [
      "gram per millilitre (g/ml)",
      "gram per litre (g/liter)",
      "kg/m3 (SI unit)",
      "kg/L (= g/cm3)",
      "ounce per cubic foot",
      "ounce per cubic inch",
      "ounce per gallon (imperial)",
      "ounce per gallon (US fluid)",
      "pound per cubic foot (lb/ft3)",
      "pound per cubic inch (lb/in3)",
      "pound per gallon (imperial)",
      "pound per gallon (US fluid)",
      "slug per cubic foot (slug/ft3)",
      "SG (H2O 60 F)",
    ],
    conversion: [
      "1000\r",
      "1\r",
      "1\r",
      "1000\r",
      "1.001153961\r",
      "1729.994044\r",
      "6.236023291\r",
      "7.489151707\r",
      "16.01846337\r",
      "27679.90471\r",
      "99.77637266\r",
      "119.8264273\r",
      "515.3788184\r",
      "999.04\r",
    ],
  },
  Energy: {
    units: [
      "Kilojoule (KJ)",
      "British thermal unit (BTU)",
      "calorie (cal)",
      "centigrade heat unit (CHU)",
      "erg (cgs unit)",
      "foot-pound force",
      "horsepower-hour",
      "joule (SI unit)",
      "kilocalorie (kcal)",
      "kgf.m",
      "kilowatt-hour (kW.h)",
      "N.m",
      "barrel of oil equivalent",
      "BTU (ISO)",
      "BTU (mean)",
      "BTU (thermochemical)",
      "BTU (39 F)",
      "BTU (59 F)",
      "BTU (60 F)",
      "BTU (63 F)",
      "calorie (thermochemical)",
      "Calorie (US; FDA)",
      "calorie (3.98 C)",
      "calorie (15 C)",
      "calorie (20 C)",
      "electronvolt",
      "gallon-atmosphere (imperial)",
      "gallon-atmosphere (US)",
      "inch-pound force",
      "litre-atmosphere",
      "tonne of coal equivalent",
      "tonne of oil equivalent",
      "ton of TNT",
      "watt hour",
      "watt second",
    ],
    conversion: [
      "1000\r",
      "1055.055853\r",
      "4.1868\r",
      "1899.1\r",
      "0.0000001\r",
      "1.355817948\r",
      "2684519.538\r",
      "1\r",
      "4186.8\r",
      "9.80665\r",
      "3600000\r",
      "1\r",
      "6120000000\r",
      "1054.5\r",
      "1055.87\r",
      "1054.35\r",
      "1059.67\r",
      "1054.804\r",
      "1054.68\r",
      "1054.6\r",
      "4.184\r",
      "4184\r",
      "4.2045\r",
      "4.1855\r",
      "4.1819\r",
      "1.60E-19\r",
      "460.6325693\r",
      "383.556849\r",
      "0.112984829\r",
      "101.325\r",
      "29288000000\r",
      "41868000000\r",
      "4184000000\r",
      "3600\r",
      "1\r",
    ],
  },
  Power: {
    units: [
      "watt (=J/s)(SI unit)",
      "kiloWatt (kW)",
      "BTU/h",
      "BTU/min",
      "BTU/s",
      "cal/s",
      "kcal/h",
      "kgf.m/s",
      "Chu/h",
      "erg/s",
      "ft.lbf/h",
      "ft.lbf/min",
      "ft.lbf/s",
      "atm.cm3/min",
      "atm.cm3/s",
      "atm.ft3/h",
      "atm.ft3/min",
      "atm.ft3/s",
      "hp (British)(mechanical)",
      "hp (metric)",
      "hp (boiler)",
      "hp (European electrical)",
      "hp (electrical)",
      "litre.atm/min",
      "litre.atm/s",
      "ton of refrigeration (International)",
      "ton of air conditioning",
      "ton of refrigeration (imperial)",
    ],
    conversion: [
      "1\r",
      "1000\r",
      "0.293071\r",
      "17.584264\r",
      "1055.055853\r",
      "4.1868\r",
      "1.163\r",
      "9.80665\r",
      "0.527528\r",
      "0.0000001\r",
      "0.000376616\r",
      "0.022596966\r",
      "1.355817948\r",
      "0.00168875\r",
      "0.101325\r",
      "0.797001247\r",
      "47.82007468\r",
      "2869.204481\r",
      "745.6998716\r",
      "735.49875\r",
      "9809.5\r",
      "736\r",
      "746\r",
      "1.68875\r",
      "101.325\r",
      "3516.853\r",
      "3504\r",
      "3938.875\r",
    ],
  },
  Enthalpy: {
    units: ["kJ/kg", "BTU/lb", "cal/g", "Chu/lb", "erg/g", "ft.lbf/lb", "J/g", "kcal/kg", "kgf.m/kg", "MJ/kg", "MJ/tonne"],
    conversion: [
      "1\r",
      "2.326\r",
      "4.1868\r",
      "4.1868\r",
      "1.00E-07\r",
      "0.00298907\r",
      "1\r",
      "4.1868\r",
      "0.00980665\r",
      "1000\r",
      "1\r",
    ],
  },
  Entropy: {
    units: ["kJ/kg.K", "Btu/lb.F", "cal/g.C", "Chu/lb.C", "ft.lbf/lb.F", "J/g.C", "kcal/kg.C", "kgf.m/kg.C"],
    conversion: ["1\r", "4.1868\r", "4.1868\r", "4.1868\r", "0.00538032\r", "1\r", "4.1868\r", "0.00980665\r"],
  },
  "Heat Transfer Coefficient": {
    units: [
      "W/m2.K",
      "Btu/ft2.h.F",
      "Btu/ft2.s.F",
      "cal/cm2.s.C",
      "Chu/ft2.h.C",
      "kcal/ft2.h.C",
      "kcal/m2.h.C",
      "kJ/m2.h.C",
      "kW/m2.K",
      "pcu/ft2.h.C",
      "W/cm2.K",
      "W/m2.K",
      "Btu/ft2.h.F",
      "Btu/ft2.s.F",
      "cal/cm2.s.C",
      "Chu/ft2.h.C",
      "kcal/ft2.h.C",
      "kcal/m2.h.C",
      "kJ/m2.h.C",
      "kW/m2.K",
      "pcu/ft2.h.C",
      "W/cm2.K",
    ],
    conversion: [
      "1\r",
      "5.67826\r",
      "20441.7\r",
      "41868\r",
      "5.67826\r",
      "12.5184\r",
      "1.163\r",
      "0.277778\r",
      "1000\r",
      "5.67826\r",
      "10000\r",
      "1\r",
      "5.67826\r",
      "20441.7\r",
      "41868\r",
      "5.67826\r",
      "12.5184\r",
      "1.163\r",
      "0.277778\r",
      "1000\r",
      "5.67826\r",
      "10000\r",
    ],
  },
  Pressure: {
    units: [
      "kPa",
      "atm",
      "bar",
      "foot H2O",
      "inch H2O",
      "inch Hg",
      "kgf/cm2",
      "lbf/ft2",
      "mbar",
      "meter H2O",
      "mm H2O",
      "mm Hg (=torr)",
      "MPa",
      "Pa",
      "PSI (=lbf/in2)",
    ],
    conversion: [
      "0.01\r",
      "1.01325\r",
      "1\r",
      "0.0298907\r",
      "0.00249089\r",
      "0.0338638\r",
      "0.980665\r",
      "0.000478803\r",
      "0.001\r",
      "0.0980665\r",
      "9.81E-05\r",
      "0.00133322\r",
      "10\r",
      "1.00E-05\r",
      "0.0689476\r",
    ],
  },
  "Viscosity Dynamic": {
    units: [
      "Pa.s",
      "centipoise (cP)",
      "dyne.s/cm2",
      "kg/m.h",
      "kg/m.s",
      "kgf.s/m2",
      "lb/ft.h",
      "lb/ft.s",
      "lb/in.s",
      "lbf.s/ft2",
      "lbf.s/in2",
      "micropoise",
      "N.s/m2",
      "poise (=g/cm.s)",
      "reyn",
    ],
    conversion: [
      "1000\r",
      "1\r",
      "100\r",
      "0.277778\r",
      "1000\r",
      "9806.65\r",
      "0.413379\r",
      "1488.16\r",
      "17858\r",
      "47880.3\r",
      "6.89E+06\r",
      "0.0001\r",
      "1000\r",
      "100\r",
      "6.89E+06\r",
    ],
  },
  "Viscosity Kinematic": {
    units: ["m2/s", "centistokes", "cm2/s (=stokes)", "ft2/h", "ft2/s", "in2/h", "in2/s", "m2/h", "mm2/h", "mm2/s"],
    conversion: ["1.00E+06\r", "1\r", "100\r", "25.8064\r", "92903\r", "0.179211\r", "645.16\r", "277.778\r", "0.000277778\r", "1\r"],
  },
  Angle: {
    units: ["degree", "grade", "minute", "radian", "revolution", "right angle", "second"],
    conversion: ["1\r", "0.9\r", "0.0166667\r", "57.2958\r", "360\r", "90\r", "0.000277778\r"],
  },
  Force: {
    units: [
      "newton",
      "dyne",
      "gram force",
      "kg force",
      "kilonewton",
      "kilopond",
      "kip",
      "long ton force",
      "millinewton",
      "ounce force",
      "pound force",
      "poundal",
      "short ton force",
      "tonne force",
    ],
    conversion: [
      "1\r",
      "1.00E-05\r",
      "0.00980665\r",
      "9.80665\r",
      "1000\r",
      "9.80665\r",
      "4448.22\r",
      "9964.02\r",
      "0.001\r",
      "0.278014\r",
      "4.44822\r",
      "0.138255\r",
      "8896.44\r",
      "9806.65\r",
    ],
  },
  "Fouling Factor": {
    units: [
      "m2.K/W",
      "cm2.K/W",
      "cm2.s.C/cal",
      "ft2.h.C/Chu",
      "ft2.h.C/kcal",
      "ft2.h.C/pcu",
      "ft2.h.F/Btu",
      "ft2.s.F/Btu",
      "m2.h.C/kcal",
      "m2.h.C/kJ",
      "m2.K/kW",
    ],
    conversion: [
      "1\r",
      "0.0001\r",
      "2.39E-05\r",
      "0.17611\r",
      "0.0798822\r",
      "0.17611\r",
      "0.17611\r",
      "4.89E-05\r",
      "0.859845\r",
      "3.6\r",
      "0.001\r",
    ],
  },
  "Heat Capacity": {
    units: ["kJ/kg.K", "Btu/lb.F", "cal/g.C", "Chu/lb.C", "ft.lbf/lb.F", "J/g.C", "kcal/kg.C", "kgf.m/kg.C"],
    conversion: ["1\r", "4.1868\r", "4.1868\r", "4.1868\r", "0.00538032\r", "1\r", "4.1868\r", "0.00980665\r"],
  },
  "Valve Sizing Coefficient": {
    units: ["Kv (m3/h bar)", "Cv (USgpm PSI)", "Cv (UKgpm PSI)"],
    conversion: ["1.1561\r", "1\r", "1.20095\r"],
  },
};

// var rawFile = new XMLHttpRequest();
function readCSV() {
  //   rawFile.open("GET", "../data/unit-convertor.csv", true);
  //   rawFile.onreadystatechange = function () {
  //     if (rawFile.readyState == 4) {
  //       onLoad();
  //     }
  //   };
  //   function onLoad() {
  //     var csv = rawFile.responseText;
  processData();

  //   }
  //   rawFile.send();
}
function processData() {
  //   let allTextLines = csv.split("\n");
  //   for (i = 0; i < allTextLines.length - 1; i++) {
  //     if (i == 0) {
  //       continue;
  //     }
  //     let row = allTextLines[i].split(",");
  //     if (!units[row[0]]) {
  //       units[row[0]] = { units: [], conversion: [] };
  //     }
  //     units[row[0]]["units"].push(row[1]);
  //     units[row[0]]["conversion"].push(row[2]);
  //   }
  loadView();
  // Object.getOwnPropertyNames(units).forEach(function(x){
  // 	createTabs(x)
  // });
}

// console.log(units["area"]["units"].length,units["area"]["conversion"].length)
function populate(formname) {
  var select = formname.querySelectorAll("select");
  var d = document.createDocumentFragment();
  units[formname.parentNode.id.split("-").slice(2).join(" ")]["units"].forEach((x, index) => {
    var options = document.createElement("option");
    options.innerText = x;
    options.value = units[formname.parentNode.id.split("-").slice(2).join(" ")]["conversion"][index];
    d.appendChild(options);
  });
  select.forEach((x) => {
    x.appendChild(d.cloneNode(true));
    x.firstChild.selected = true;
  });
}
function calculate(var1) {
  var doc1 = var1.parentNode.parentNode.parentNode;
  var a = doc1.querySelector("#fromUnit").value;
  var selection1 = doc1.querySelectorAll("select")[0].options[doc1.querySelectorAll("select")[0].selectedIndex].value;
  var selection2 = doc1.querySelectorAll("select")[1].options[doc1.querySelectorAll("select")[1].selectedIndex].value;
  selection1 = parseFloat(selection1);
  selection2 = parseFloat(selection2);
  original = a * selection1;
  converted = (a * selection1) / selection2;
  doc1.querySelector("#toUnit").value = converted;
}
function swap(var1) {
  var doc1 = var1.parentNode.parentNode.parentNode;
  var select = doc1.querySelectorAll("select");
  var selection1 = select[0].selectedIndex;
  var selection2 = select[1].selectedIndex;
  select[0].options[selection1].selected = false;
  select[1].options[selection2].selected = false;
  select[0].options[selection2].selected = true;
  select[1].options[selection1].selected = true;
  calculate(doc1.querySelector("select"));
}

function createTabs(name) {
  var unitConv = document.querySelector(`#main`);
  var navArea = document.querySelector("#nav-area").querySelector("div");
  var calculations = document.querySelector("#calculations").querySelector("div");
  var atag = document.createElement("a");
  atag.classList.add("nav-link");
  if (name === "mass") {
    atag.classList.add("active");
  }
  atag.id = name.split(" ").join("-");
  atag.href = `#v-pills-${atag.id}`;
  atag.setAttribute("role", "tab");
  atag.setAttribute("data-toggle", "pill");
  atag.innerText = name;
  // console.log(document);
  navArea.appendChild(atag);

  var unitConvertorForm = document.createElement("unit-convertor-form");
  unitConvertorForm.setAttribute("template", "unit-convertor-form");
  var div = document.createElement("div");
  div.classList.add("tab-pane");
  div.classList.add("fade");
  if (name === "mass") {
    div.classList.add("show");
    div.classList.add("active");
  }
  div.id = `v-pills-${atag.id}`;
  div.setAttribute("role", "tabpanel");
  div.appendChild(unitConvertorForm);
  // console.log(div);
  calculations.appendChild(div);
}
// createTabs("energy");
// console.log(document.querySelector("#main"));
