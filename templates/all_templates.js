export var templatesText = {
  "image-carousel": `<div id="slides" class="carousel slide" data-ride="carousel">
	<ul class="carousel-indicators">
		<li data-target="#slides" data-slide-to="0" class="active"></li>
		<li data-target="#slides" data-slide-to="1"></li>
		<li data-target="#slides" data-slide-to="2"></li>
	</ul>
	<div class="carousel-inner">
		<div class="carousel-item active">
			<img src="img/1.jpg" alt="Slide-1" class="img-fluid">
			<div class="carousel-caption">
				<!-- <blockquote class="blockquote text-center">
				  	<p class="mb-0"><h4>“Calculations, simulations, modifications shape our arch,</h4></p>
				  	<p class="mb-0"><h4>To support our role as GNFC’s Technical Services Branch.”</h4></p>
				  	<footer class="blockquote-footer" style="background-color: rgba(0,0,0,0);"> <cite title="Hooman">Hooman</cite></footer>
				</blockquote> -->
			</div>
		</div>
		<div class="carousel-item">
			<img src="img/3.jpg" alt="Slide-2" class="img-fluid">
			<div class="carousel-caption">
				<h1>Critical Equipment Monitoring</h1>
				<p class="lead">Performance evaluation of some handpicked critical equipments is done by TSG on regular basis and the
					result reposts for those eqipments can be accessed here.</p>
				<!-- <button class="btn btn-outline-light btn-lg">View Demo</button> -->
				<button class="btn btn-primary btn-lg">View Reports</button>
			</div>
		</div>
		<div class="carousel-item">
			<img src="img/group-1.jpg" alt="Slide-3" class="img-fluid">
		</div>
	</div>
</div>`,
  "custom-footer": `<footer>
	<div class="container-fluid padding">
		<div class="row text-center padding">
			<div class="col-md-4" id="footer2">
				<hr class="light">
				<h5>Our HOD</h5>
				<hr class="light">
				<p>Mr.M N Tekchandani</p>
				<p>AGM,Tech Services</p>
				<p>mntekchandani@gnfc.in</p>
			</div>
			<div class="col-md-4">
				<a href="#navbar1">
					<img src="img/logo-image1.png" alt="GNFC" class="img-fluid bottom-logo">
				</a>
				<hr class="light">
				<p>Common Hall : 2931</p>
				<p>tsg@gnfc.in</p>
				<p>GM wing-top floor</p>
				<p>Bharuch,Gujarat-392015</p>
			</div>
			<div class="col-md-4" id="footer3">
				<hr class="light">
				<h5>Groups :</h5>
				<hr class="light">
				<p>Ammonia / Nitro Group</p>
				<p>IP Group</p>
				<p>TDI / Formic Group</p>
				<p>Urea Group</p>
			</div>
			<div class="col-12">
				<hr class="light-100">
				<h5>&copy; TJD</h5>
			</div>
		</div>
	</div>
</footer>`,
  "custom-nav": `<nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
	<div class="container-fluid">
		<div class="row" id="navbar1">
			<div class="col-12 mx-auto">
				<div class="container-fluid">
					<div class="row" id="improw">
						<div class="col-sm-2 col-md-2 col-xs-12 my-auto mx-auto" id="id1">
							<a href="index.html" class="navbar-brand">
								<img src="img/logo-image1.png" alt="GNFC Logo" class="img-fluid">
							</a>
						</div>
						<div class="col-sm-10 col-md-10 col-xs-12 my-auto" id="site-title">
							<h1 class="display-3"><strong>TSG Website</strong></h1>
						</div>
					</div>
				</div>
			</div>
			<div class="col-12 text-center" id="navbar2">
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarContent">
					<ul class="navbar-nav">
						<li class="nav-item"><a href="#" class="nav-link">Home</a></li>
						<li class="nav-item dropdown">
							<a href="#" class="nav-link dropdown-toggle" role="button" id="navbarDropdown" data-toggle="dropdown"
								aria-haspopup="true" aria-expanded="true"><span class="nav-label">Reports</span> <span
									class="caret"></span></a>
							<ul class="dropdown-menu bg-dark">
								<li class="dropdown-submenu">
									<a href="#" class="nav-link dropdown-item dropdown-toggle" data-toggle="dropdown" role="button"
										id="navbarSubDropdown1" aria-haspopup="true" aria-expanded="false">Monthly Reports</a>
									<ul class="dropdown-menu bg-dark">
										<li><a href="#" class="nav-link dropdown-item">2020</a></li>
										<li><a href="#" class="nav-link dropdown-item">2019</a></li>
										<li><a href="#" class="nav-link dropdown-item">2018</a></li>
										<li><a href="#" class="nav-link dropdown-item">2017</a></li>
									</ul>
								</li>
								<li class="dropdown-submenu">
									<a href="#" class="nav-link dropdown-item dropdown-toggle" data-toggle="dropdown" role="button"
										id="navbarSubDropdown2" aria-haspopup="true" aria-expanded="false">Annual Reports</a>
									<ul class="dropdown-menu bg-dark">
										<li><a href="#" class="nav-link dropdown-item">2020</a></li>
										<li><a href="#" class="nav-link dropdown-item">2019</a></li>
										<li><a href="#" class="nav-link dropdown-item">2018</a></li>
										<li><a href="#" class="nav-link dropdown-item">2017</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<!-- <li class="nav-item"><a href="#" class="nav-link">Schemes</a></li>
						<li class="nav-item"><a href="#" class="nav-link">Assignments</a></li> -->
						<li class="nav-item dropdown">
							<a href='#' class="nav-link dropdown-toggle" role="button" id="navbarDropdown1"
								data-toggle="dropdown"><span class="nav-label"
									onclick="location.href='calculators.html'">Calculators</span></a>
							<ul class="dropdown-menu bg-dark">
								<li class="nav-item">
									<a class="nav-link dropdown-item">Process Calc</a>
								</li>
								<li class="nav-item">
									<a class="nav-link dropdown-item disabled">Mechanical Calc</a>
								</li>
							</ul>
						</li>
						<li class="nav-item"><a href="#about" class="nav-link">About</a></li>
					</ul>
					<form class="form-inline my-1 ml-auto">
						<input class="form-control mr-2 my-2 my-sm-0" type="search" placeholder="Search">
						<button class="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</nav>`,
  "custom-nav1": `<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <a href="index.html" class="navbar-brand">
    <img src="img/logo-image1.png" alt="GNFC Logo" class="img-fluid" style="width: 50px;">
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarContent">
    <ul class="navbar-nav">
      <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
      <!-- <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" role="button" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true"
          aria-expanded="true"><span class="nav-label">Reports</span> <span class="caret"></span></a>
        <ul class="dropdown-menu bg-dark">
          <li class="nav-item"><a href="#" class="nav-link">Monthly Reports</a></li>
          <li class="nav-item"><a href="#" class="nav-link">Annual Reports</a></li>
        </ul>
      </li> -->
      <!-- <li class="nav-item"><a href="#" class="nav-link">Schemes</a></li>
      <li class="nav-item"><a href="#" class="nav-link">Assignments</a></li> -->
      <li class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" role="button" id="navbarDropdown1" data-toggle="dropdown"><span class="nav-label"
            onclick="steamTableView();">Calculators</span></a>
        <ul class="dropdown-menu bg-dark">
          <!-- <li class="nav-item">
        			<a class="nav-link dropdown-item" href="#" onclick="velocityCalcView();">Process Calc</a> 
        		</li>
        		<li class="nav-item">
        			<a class="nav-link dropdown-item" href="#" onclick="safetyValveCalcView();">Mechanical Calc</a>
        		</li> -->
          <li class="nav-item">
            <a class="nav-link dropdown-item" href="#" onclick="unitConvertorView();">Unit Convertor</a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-item" href="#" onclick="steamTableView();">Steam Tables</a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-item" href="#" onclick="steamTurbineView();">Turbine calcs</a>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown-item" href="#" onclick="steamFlashingView();">Steam Flash</a>
          </li>
        </ul>
      </li>
      <li class="nav-item"><a href="#" onclick="scrollToTargetAdjusted();" class="nav-link">About</a></li>
    </ul>
    <form class="form-inline my-1 ml-auto">
      <input class="form-control mr-2 my-2 my-sm-0" type="search" placeholder="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>`,
  "custom-sidebar": `<div class="container-fluid">
	<div class="row">
		<nav class="col-auto d-sm-block bg-light sidebar">
			<div class="sidebar-sticky">
				<ul class="nav flex-column" id="sidebar-list">
					<!-- <li class="nav-item">
                		<a class="nav-link active" href="#" onclick="velocityCalcView();">
                  		<i class="far fa-edit fa-lg"></i><span class="intext">Process Calculations</span><span class="sr-only">(current)</span></a>
		            </li> -->
					<li class="nav-item">
						<a class="nav-link" href="#" onclick="steamTurbineView();">
							<i class="fa fa-cogs fa-lg"></i><span class="intext">Steam Turbine</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" onclick="steamFlashingView();">
							<i class="fa fa-rss fa-lg"></i><span class="intext">Steam Flashing</span></a>
					</li>
					<!-- <li class="nav-item">
						<a class="nav-link" href="#" onclick="safetyValveCalcView();">
							<i class="fab fa-codepen fa-lg"></i><span class="intext">Mechanical Calculations</span></a>
					</li> -->
					<li class="nav-item">
						<a class="nav-link" href="#" onclick="unitConvertorView();">
							<i class="fas fa-microchip fa-lg"></i><span class="intext">Unit Convertor</span></a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#" onclick="steamTableView();">
							<i class="fas fa-cloud fa-lg"></i><span class="intext">Steam Properties</span></a>
					</li>
				</ul>
			</div>
		</nav>
		<div class="col">
			<div id="main">
				<div class="calculator1">
					<!-- <unit-convertor template="unit-convertor"></unit-convertor> -->
					<!-- <velocity-calc template="velocity-calc"></velocity-calc> -->
				</div>
			</div>
		</div>
	</div>
</div>`,
  "social-icons": `<div class="container-fluid padding">
	<div class="row text-center">
		<div class="col-12">
			<h2>Connect</h2>
		</div>
		<div class="col-12 social padding">
			<a href="#"><i class="fab fa-facebook"></i></a>
			<a href="#"><i class="fab fa-twitter"></i></a>
			<a href="#"><i class="fab fa-google-plus-g"></i></a>
			<a href="#"><i class="fab fa-instagram"></i></a>
			<a href="#"><i class="fab fa-youtube"></i></a>
		</div>
	</div>
</div>`,
  "steam-flash-calc": `<div class="container bg-light" id="steam-turbine-template">
		<div class="row justify-content-center">
			<div class="col">
				<div class="display-4 text-center"><strong>Steam Flashing</strong></div>
				<div class="mt-4">
					<label for=""><strong>Inlet Condition: </strong></label>
					<div class="form-check form-check-inline">
					  	<input class="form-check-input" type="radio" name="exampleRadios" id="sup" value="option1" checked>
					  	<label class="form-check-label" for="sup">
					    Superheated/Subcooled
					  	</label>
					</div>
					<div class="form-check form-check-inline">
					  	<input class="form-check-input" type="radio" name="exampleRadios" id="sat" value="option2">
					  	<label class="form-check-label" for="sat">
					    Saturated
					  </label>
					</div>
				</div>
			</div>
		</div>
		<form class="needs-validation" action="">
			<div class="form-row">
				<div class="col-9">
					<div class="input-group pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="intemp" class="input-group-text">Flow:</label>
						</div>
						<input type="text" class="form-control" id="flow" placeholder="Flow" autocomplete="off" required>
						<div class="input-group-append">
							<select class="form-control input-group-append" id="flow-select">
						        <option value="1">kg/hr</option>
						        <option value="2">kg/s</option>
						        <option value="3">lb/hr</option>
						        <option value="4">lb/min</option>
						    </select>
						</div>
					</div>
				</div>
				<div class="col-9 d-none" id="vapfracInput">
					<div class="input-group pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="intemp" class="input-group-text">Vapour Fraction:</label>
						</div>
						<input type="text" class="form-control" id="vapfrac" placeholder="Vapour Fraction" autocomplete="off" value=1 required>
					</div>
					<small id="vapfracWarning" class="form-text text-danger d-none">Please enter vapour fraction between 0-1.</small>
				</div>
				<div class="col-9">
					<div class="input-group pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="intemp" class="input-group-text">Inlet Temperature:</label>
						</div>
						<input type="text" class="form-control" id="intemprature" placeholder="Inlet Temperature" autocomplete="off" required>
						<div class="input-group-append">
							<select class="form-control input-group-append" id="in-temp-select">
						        <option value="1">°C</option>
						        <option value="2">K</option>
						        <option value="3">F</option>
						        <option value="4">R</option>
						    </select>
						</div>
					</div>
				</div>
				<div class="col-9">
					<div class="input-group pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="intemp" class="input-group-text">Inlet Pressure:</label>
						</div>
						<input type="text" class="form-control" id="inpressure" placeholder="Inlet Pressure" autocomplete="off" required>
						<div class="input-group-append">
							<select class="form-control input-group-append" id="in-press-select">
						        <option value=1>bar</option>
						        <option value=2>kg/cm2</option>
						        <option value=3>kPa</option>
						    </select>
						</div>
					</div>
				</div>
				<div class="col-3" id="p-input-group1">
					<div class="input-group-append">
						<select class="form-control mt-2" id="in-press-select1">
					        <option value=1>Absolute</option>
					        <option value=2>Guage</option>
					    </select>
					</div>
				</div>
				<div class="col-12 pt-3">
					<label for=""><strong>Flashing Conditions:</strong></label>
				</div>
				<div class="col-9">
					<div class="input-group pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="intemp" class="input-group-text">Flashing Pressure:</label>
						</div>
						<input type="text" class="form-control" id="outpressure" placeholder="Flashing Pressure" autocomplete="off" required>
						<div class="input-group-append">
							<select class="form-control input-group-append" id="out-press-select">
						        <option value=1>bar</option>
						        <option value=2>kg/cm2</option>
						        <option value=3>kPa</option>
						    </select>
						</div>
					</div>
				</div>
				<div class="col-3" id="p-input-group1">
					<div class="input-group-append">
						<select class="form-control mt-2" id="out-press-select1">
					        <option value=1>Absolute</option>
					        <option value=2>Guage</option>
					    </select>
					</div>
				</div>
				<div class="col-9">
					<div class="input-group d-none pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="intemp" class="input-group-text">Efficiency:</label>
						</div>
						<input type="text" class="form-control" id="efficiency" placeholder="Efficiency" autocomplete="off">
						<div class="input-group-append">
							<label for="intemp" class="input-group-text">%</label>
						</div>
					</div>
				</div>
				<div class="col-12 mt-2 mb-4">
					<button class="btn btn-primary" id="steam-table-submit" type="submit">Calculate</button>
				</div>
			</div>
		</form>
		<div class="form-group row pb-4">
			<label class="col-12" for=""><strong>Results after Flashing:</strong></label>
			<label for="isenthTemp" class="col-sm-4 col-form-label">Temp:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="isenthTemp" value="-">
		    </div>
		    <label for="isenthTemp" class="col-sm-6 col-form-label">°C</label>
		    <label for="vf" class="col-sm-4 col-form-label">Vapour Fraction:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="vf" value="-">
		    </div>
		    <label for="vf" class="col-sm-6 col-form-label"></label>
		    <label for="liqflow" class="col-sm-4 col-form-label">Liquid Flowrate:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="liqflow" value="-">
		    </div>
		    <label for="liqflow" class="col-sm-6 col-form-label">kg/hr</label>
		    <label for="vapflow" class="col-sm-4 col-form-label">Vapour Flowrate:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="vapflow" value="-">
		    </div>
		    <label for="vapflow" class="col-sm-6 col-form-label">kg/hr</label>
		</div>
    </div>`,
  "steam-table-result": `<table class="table">
	<tr>
		<th style="width:50%;">Property</th>
		<th style="width:20%;">Value</th>
		<th>Unit</th>
	</tr>
	<tr>
		<td>Pressure</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>MPa</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Temprature</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>K</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Specific Volume</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>m3/kg</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Density</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>kg/m3</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Specific Internal Energy</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>kJ/kg</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Specific Entropy</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>kJ/kg °C</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Specific Enthalpy</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>kJ/kg</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Specific Heat Capacity (Isobaric) Cp</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>kJ/kg °C</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Specific Heat Capacity (Isochoric) Cv</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>kJ/kg °C</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Speed of Sound</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>m/s</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Viscosity</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>cP</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Thermal Conductivity</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>W/m °C</option>
			</select>
		</td>
	</tr>
	<tr>
		<td>Di-electric Constant</td>
		<td></td>
		<td>
			<select class="form-control">
				<option>-</option>
			</select>
		</td>
	</tr>
</table>`,
  "steam-table": `<div class="container bg-light" id="steam-table-template">
		<div class="row justify-content-center">
			<div class="col ">
				<div class="display-4 text-center"><strong>Steam Properties</strong></div>
				<div class="text-center mt-3">
					<div class="form-check form-check-inline">
					  	<input class="form-check-input" type="radio" name="Supsat" id="superheatedCalc" value="option3" checked>
					  	<label class="form-check-label" for="superheatedCalc">
					    Superheated/Subcooled
					  	</label>
					</div>
					<div class="form-check form-check-inline">
					  	<input class="form-check-input" type="radio" name="Supsat" id="saturatedCalc" value="option4">
					  	<label class="form-check-label" for="saturatedCalc">
					    Saturated
					  	</label>
					</div>
				</div>
				<div class="form-group mt-4">
					<label for="func-select">Please select the function:</label>
					<select class="form-control" id="func-select">
				        <option value=1>1. Function (P,T)</option>
				        <option value=2>2. Function (P,h)</option>
				        <option value=3>3. Function (P,s)</option>
				        <option value=4>4. Function (h,s)</option>
				    </select>
				</div>
				<div class="text-center mt-3 d-none" id="liqvap">
					<div class="form-check form-check-inline">
					  	<input class="form-check-input" type="radio" name="liqvap" id="liquid" value="option1" checked>
					  	<label class="form-check-label" for="liquid">
					    Liquid
					  	</label>
					</div>
					<div class="form-check form-check-inline">
					  	<input class="form-check-input" type="radio" name="liqvap" id="vapour" value="option2">
					  	<label class="form-check-label" for="vapour">
					    Vapour
					  	</label>
					</div>
				</div>
			</div>
		</div>
		<form class="needs-validation">
			<div class="form-row">
				<div class="col-9">
					<div class="input-group mt-2" id="p-input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">Pressure</div>
						</div>
						<input type="text" class="form-control" id="pressure" placeholder="Pressure" autocomplete="off" required>
						<div class="input-group-append">
							<select class="form-control input-group-append" id="press-select">
						        <option value=1>bar</option>
						        <option value=2>kg/cm2</option>
						        <option value=3>kPa</option>
						    </select>
						</div>
						<div class="invalid-feedback">
				          	Please Enter pressure.
				        </div>
					</div>
				</div>
				<div class="col-3" id="p-input-group1">
					<div class="input-group-append">
						<select class="form-control mt-2" id="press-select1">
					        <option value=1>Absolute</option>
					        <option value=2>Guage</option>
					    </select>
					</div>
				</div>
				<div class="col-9">
					<div class="input-group mb-2 mt-2" id="t-input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">Temperature</div>
						</div>
						<input type="text" class="form-control" id="temperature" placeholder="Temperature" autocomplete="off" required>
						<div class="input-group-append">
							<select class="form-control input-group-append" id="temp-select">
						        <option value="1">°C</option>
						        <option value="2">K</option>
						        <option value="3">F</option>
						        <option value="4">R</option>
						    </select>
						</div>
					    <div class="invalid-feedback">
				          	Please Enter Temperature.
				        </div>
					</div>
					<div class="input-group mb-2 mt-2 d-none" id="h-input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">Enthalpy</div>
						</div>
						<input type="text" class="form-control" id="enthalpy" placeholder="Enthalpy" autocomplete="off">
						<div class="input-group-append">
							<select class="form-control input-group-append" id="enth-select">
						        <option value="1">kJ/kg</option>
						        <option value="2">kcal/kg</option>
						        <option value="3">BTU/Pound</option>
						        <option value="4">BTU/Pound</option>
						    </select>
						</div>
					    <div class="invalid-feedback">
				          	Please Enter Enthalpy.
				        </div>
					</div>
					<div class="input-group mb-2 mt-2 d-none" id="s-input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">Entropy</div>
						</div>
						<input type="text" class="form-control" id="entropy" placeholder="Entropy" autocomplete="off">
						<div class="input-group-append">
							<select class="form-control input-group-append" id="entr-select">
						        <option value="1">kJ/kg.K</option>
						        <option value="2">kcal/kg.K</option>
						        <option value="3">BTU/Pound.K</option>
						        <option value="4">BTU/Pound.F</option>
						    </select>
						</div>
					    <div class="invalid-feedback">
				          	Please Enter Entropy.
				        </div>
					</div>
				</div>
				<div class="col-12 mt-2 mb-4">
					<button class="btn btn-primary" id="steam-table-submit" type="submit">Calculate</button>
				</div>
			</div>
		</form>
		<div class="container-fluid pb-4" id="ans-table"></div>
    </div>`,
  "steam-turbine": `<div class="container bg-light" id="steam-turbine-template">
		<div class="row justify-content-center">
			<div class="col">
				<div class="display-4 text-center"><strong>Steam Turbine</strong></div>
				<div class="text-center mt-3">
					<div class="form-check form-check-inline">
					  	<input class="form-check-input" type="radio" name="powereff" id="PowerCalc" value="1"  checked>
					  	<label class="form-check-label" for="PowerCalc">
					    Power/Efficiency Calculations
					  	</label>
					</div>
					<div class="form-check form-check-inline">
					  	<input class="form-check-input" type="radio" name="powereff" id="EffCalc" value="2">
					  	<label class="form-check-label" for="EffCalc">
					    Outlet conditons Calculations
					  </label>
					</div>
				</div>
			</div>
		</div>
		<form class="needs-validation" action="">
			<div class="form-row">
				<div class="col-9">
					<div class="input-group pb-2 pt-4">
						<div class="input-group-prepend">
							<label for="flow" class="input-group-text">Flow:</label>
						</div>
						<input type="text" class="form-control" id="flow" placeholder="Flow" autocomplete="off" required>
						<div class="input-group-append">
							<select class="form-control input-group-append" id="flow-select">
						        <option value="1">kg/hr</option>
						        <option value="2">kg/s</option>
						        <option value="3">lb/hr</option>
						        <option value="4">lb/min</option>
						    </select>
						</div>
					</div>
				</div>
				<div class="col-12">
					<div class="mt-3 ">
						<label><strong>Inlet Condition:</strong></label>
						<div class="form-check form-check-inline">
						  	<input class="form-check-input" type="radio" name="supsat1" id="sup1" value="1" checked>
						  	<label class="form-check-label" for="sup1">
						    Superheated/Subcooled
						  </label>
						</div>
						<div class="form-check form-check-inline">
						  	<input class="form-check-input" type="radio" name="supsat1" id="sat1" value="2">
						  	<label class="form-check-label" for="sat1">
						    Saturated
						  	</label>
						</div>
					</div>
				</div>
				<div class="col-9">
					<div class="input-group pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="intemprature" class="input-group-text">Inlet Temperature:</label>
						</div>
						<input type="text" class="form-control" id="intemprature" placeholder="Inlet Temperature" autocomplete="off" required>
						<div class="input-group-append">
							<select class="form-control input-group-append" id="in-temp-select">
						        <option value="1">°C</option>
						        <option value="2">K</option>
						        <option value="3">F</option>
						        <option value="4">R</option>
						    </select>
						</div>
					</div>
				</div>
				<div class="col-9">
					<div class="input-group pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="inpressure" class="input-group-text">Inlet Pressure:</label>
						</div>
						<input type="text" class="form-control" id="inpressure" placeholder="Inlet Pressure" autocomplete="off" required>
						<div class="input-group-append">
							<select class="form-control input-group-append" id="in-press-select">
						        <option value=1>bar</option>
						        <option value=2>kg/cm2</option>
						        <option value=3>kPa</option>
						    </select>
						</div>
					</div>
				</div>
				<div class="col-3" id="p-input-group1">
					<div class="input-group-append">
						<select class="form-control mt-2" id="in-press-select1">
					        <option value=1>Absolute</option>
					        <option value=2>Guage</option>
					    </select>
					</div>
				</div>
				<div class="col-9 d-none" id="inVapFrac">
					<div class="input-group pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="vapfrac1" class="input-group-text">Vapour Fraction:</label>
						</div>
						<input type="text" class="form-control" id="vapfrac1" placeholder="Vapour Fraction" value=1 autocomplete="off" required>
					</div>
					<small id="vapfracWarning1" class="form-text text-danger d-none">Please enter vapour fraction between 0-1.</small>
				</div>
				<div class="col-12" id="outcond">
					<div class="mt-3 ">
						<label><strong>Outlet Condition:</strong></label>
						<div class="form-check form-check-inline">
						  	<input class="form-check-input" type="radio" name="supsat2" id="sup2" value="1" checked>
						  	<label class="form-check-label" for="sup2">
						    Superheated/Subcooled
						  </label>
						</div>
						<div class="form-check form-check-inline">
						  	<input class="form-check-input" type="radio" name="supsat2" id="sat2" value="2">
						  	<label class="form-check-label" for="sat2">
						    Saturated
						  	</label>
						</div>
					</div>
				</div>
<!-- 				<div class="col-12 d-none" id="outpresstemp">
					<div class="mt-3 ">
						<label><strong>Spacify Outlet:</strong></label>
						<div class="form-check form-check-inline">
						  	<input class="form-check-input" type="radio" name="presstemp" id="press2" value="1" checked>
						  	<label class="form-check-label" for="press2">
						    Pressure
						  </label>
						</div>
						<div class="form-check form-check-inline">
						  	<input class="form-check-input" type="radio" name="presstemp" id="temp2" value="2">
						  	<label class="form-check-label" for="temp2">
						    Temperature
						  	</label>
						</div>
					</div>
				</div> -->
				<div class="col-9" id='outlettemp'>
					<div class="input-group pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="outtemprature" class="input-group-text">Outlet Temperature:</label>
						</div>
						<input type="text" class="form-control" id="outtemprature" placeholder="Outlet Temperature" autocomplete="off" required>
						<div class="input-group-append">
							<select class="form-control input-group-append" id="out-temp-select">
						        <option value="1">°C</option>
						        <option value="2">K</option>
						        <option value="3">F</option>
						        <option value="4">R</option>
						    </select>
						</div>
					</div>
				</div>
				<div class="col-9" id='outletpress'>
					<div class="input-group pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="outpressure" class="input-group-text">Outlet Pressure:</label>
						</div>
						<input type="text" class="form-control" id="outpressure" placeholder="Outlet Pressure" autocomplete="off" required>
						<div class="input-group-append">
							<select class="form-control input-group-append" id="out-press-select">
						        <option value=1>bar</option>
						        <option value=2>kg/cm2</option>
						        <option value=3>kPa</option>
						    </select>
						</div>
					</div>
				</div>
				<div class="col-3" id="p-input-group2">
					<div class="input-group-append">
						<select class="form-control mt-2" id="out-press-select1">
					        <option value=1>Absolute</option>
					        <option value=2>Guage</option>
					    </select>
					</div>
				</div>
				<div class="col-9 d-none" id="outVapFrac">
					<div class="input-group pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="vapfrac2" class="input-group-text">Vapour Fraction:</label>
						</div>
						<input type="text" class="form-control" id="vapfrac2" placeholder="Vapour Fraction" value=1 autocomplete="off" required>
					</div>
					<small id="vapfracWarning2" class="form-text text-danger d-none">Please enter vapour fraction between 0-1.</small>
				</div>
				<div class="col-9 d-none" id="eff">
					<div class="input-group pb-2 pt-2">
						<div class="input-group-prepend">
							<label for="efficiency" class="input-group-text">Efficiency:</label>
						</div>
						<input type="text" class="form-control" id="efficiency" placeholder="Efficiency" autocomplete="off">
						<div class="input-group-append">
							<label for="efficiency" class="input-group-text">%</label>
						</div>
					</div>
					<small id="effWarning" class="form-text text-danger d-none">Please enter efficiency between 0-100.</small>
				</div>
				<div class="col-12 mt-2 mb-4">
					<button class="btn btn-primary" id="steam-table-submit" type="submit">Calculate</button>
				</div>
			</div>
		</form>
		<div class="form-group row pb-4 d-none" id="turbine-results">
		    <label for="calcEnthalpyIn" class="col-sm-4 col-form-label">Enthalpy In:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="calcEnthalpyIn" value="-">
		    </div>
		    <label for="calcEnthalpyIn" class="col-sm-6 col-form-label">kJ/kg</label>
		    <label for="calcEnthalpyOut" class="col-sm-4 col-form-label">Enthalpy Out:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="calcEnthalpyOut" value="-">
		    </div>
		    <label for="calcEnthalpyOut" class="col-sm-6 col-form-label">kJ/kg</label>
		    <label for="calcPower" class="col-sm-4 col-form-label">Power Generated:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="calcPower" value="-">
		    </div>
		    <label for="calcPower" class="col-sm-6 col-form-label">kW</label>
		    <label for="isentrTemp" class="col-sm-4 col-form-label">Isentropic expansion Temp:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="isentrTemp" value="-">
		    </div>
		    <label for="isentrTemp" class="col-sm-6 col-form-label">°C</label>
		    <label for="isentrFrac" class="col-sm-4 col-form-label">Isentropic Vapour Fraction:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="isentrFrac" value="-">
		    </div>
		    <label for="isentrFrac" class="col-sm-6 col-form-label">-</label>
		    <label for="caclEff" class="col-sm-4 col-form-label">Efficiency:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="caclEff" value="-">
		    </div>
		    <label for="caclEff" class="col-sm-6 col-form-label">%</label>
	    	<label for="outpress" class="col-sm-4 col-form-label">Out Pressure:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="outpress" value="-">
		    </div>
		    <label for="outpress" class="col-sm-6 col-form-label">barA</label>
		    <label for="outtemp" class="col-sm-4 col-form-label">Out Temperature:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="outtemp" value="-">
		    </div>
		    <label for="outtemp" class="col-sm-6 col-form-label">°C</label>
		    <label for="outfrac" class="col-sm-4 col-form-label">Out Vapour Fraction:</label>
		    <div class="col-sm-2">
		    	<input type="text" readonly class="form-control-plaintext" id="outfrac" value="-">
		    </div>
		    <label for="outfrac" class="col-sm-6 col-form-label">-</label>
		</div>
		<div class="text-danger pb-4 d-none" id="error">
			<p class="lead">There is no possible solution for given inputs. Please check the inputs.</p>
		</div>
    </div>`,
  "team-card": `<div class="card my-card">
	<div class="card-body">
		<img src="" alt="" class="img-fluid rounded-circle mb-3">
		<h4 class="card-title" id="name"></h4>
		<p class="card-text"></p>
		<a href="#" class="btn btn-outline-secondary">See Profile</a>
	</div>
</div>`,
  "team-scrolling-cards": `<div class="container-fluid "  id="about">
	<div class="row welcome text-center">
		<div class="col-12">
			<h1 class="display-4">Meet the Team</h1>
		</div>
		<hr>
	</div>
</div>
<!-- cards -->
<div class="container-fluid text-center" id="team">
	<div class="row justify-content-between" id="scrollButtons">
		<div class="col-1">
			<a href="#" class="left-arrow">
				<button onclick="rightscroll()" class="btn btn-primary" id="left-button">
					<span class="icon1"></span>
				</button>
			</a>
		</div>
		<div class="col-1">
			<a href="#" class="right-arrow">
				<button onclick="leftscroll()" class="btn btn-primary" id="right-button">
					<span class="icon2"></span>
				</button>
			</a>
		</div>
	</div>
	<div class="row">
		<div class="d-flex flex-row flex-nowrap overflow-hidden" id="team1">
			<user-card name="Hiren Parmar" template="team-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</user-card>
			<user-card name="Gaurang Khatri" template="team-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</user-card>
			<user-card name="Sanket Patel" template="team-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</user-card>
			<user-card name="Arpit Patel" template="team-card">Lorem ipsum dolor sit amet, consectetur adipisicing.</user-card>
			<user-card name="Nirav Patel" template="team-card">Lorem ipsum dolor sit amet.</user-card>
			<user-card name="Hooma Soni" template="team-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</user-card>
			<user-card name="Tanay Desai" template="team-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</user-card>
			<user-card name="Dhruti Mehta" template="team-card">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</user-card>
		</div>
	</div>
</div>`,
  "two-col-section": `<div class="container-fluid padding" id="twocols">
	<div class="row padding">
		<div class="" id="col1">
			<h2></h2>
			<div class="content"></div>
			<br>
			<a href="#" class="btn btn-primary btn-lg">Learn more</a>
		</div>
		<div class="" id="col2">
			<img src="" alt="Old-PC" class="img-fluid">
		</div>
	</div>
</div>
<hr class="my-4">`,
  "unit-convertor-form": `<form action="">
	<div class="row">
		<div class="col-md-6">
			<div class="form-group">
				<label for="fromUnit">From Unit:</label>
				<input type="text" class="form-control" id="fromUnit" oninput="calculate(this)" autocomplete="off" value=1>
				<select multiple class="form-control" id="UnitSelection" onchange="calculate(this)" size="1"></select>
			</div>
		</div>
		<div class="col-md-6">
			<div class="form-group">
				<label for="fromUnit">To Unit:</label>
				<fieldset disabled>
				<input type="text" class="form-control" id="toUnit" placeholder="To Unit" autocomplete="off"></fieldset>
				<select multiple id="UnitSelection" class="form-control" onchange="calculate(this)"></select>
			</div>
		</div>
	</div>
	<div class="row justify-content-center">
		<div class="col-auto">
			<button class="btn btn-lg btn-outline-primary" type="button" onclick="swap(this)">Swap</button>
		</div>
	</div>
</form>`,
  "unit-convertor": `<div class="container-flex">
	<div class="row">
		<div class="col-md-2 col-5" id="nav-area">
			<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist"></div>
		</div>
		<div class="col-md-10 col-7" id="calculations">
			<div class="tab-content" id="v-pills-tabContent"></div>
		</div>
	</div>
</div>`,
  "velocity-calc": `<div class="container bg-light pb-4" id="velocity-template">
	<h1 class="display-4">Velocity Calculation in pipeline</h1>
	<form class="needs-validation" action="">
		<div class="form-group">
			<label for="liesize">Line size:</label>
			<div class="input-group">
				<input type="text" class="form-control" id="linesize" placeholder="Nominal Line size" autocomplete="off">
				<div class="input-group-append">
					<button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown">Unit</button>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#">Inch</a>
					    <a class="dropdown-item" href="#">m</a>
					    <a class="dropdown-item" href="#">cm</a>
					    <a class="dropdown-item" href="#">mm</a>
					</div>
				</div>
			</div>
			
		</div>
		<div class="form-group">
			<label for="flowrate">Flow Rate:</label>
			<input type="text" class="form-control" id="flowrate" placeholder="Flow Rate" autocomplete="off">
		</div>
		<button type="submit" class="btn btn-primary">Calculate</button>
	</form>
</div>
<script src=".\js\velocity-calc.js"></script>`,
};
