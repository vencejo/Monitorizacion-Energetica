//--------------------------------------------------------------------------------
//	Grafica Diaria
//--------------------------------------------------------------------------------

$(document).ready(function(){
	
	var start = null;
	var interval = null;
	var jsonData_exterior = [];
	var jsonData_interior = [];
	var datosJson = null;
	
	$.getJSON('archivo_exportado_comillas_diario.json', function(json) {
		
		//Guarda los datos a mostrar en el array jsonData y Muestra el contenido del json en consola
		$.each(json, function(key, value){
			//console.log(key, value)
			if (key == "data"){
				$.each(value, function(i, valor){
					jsonData_exterior[i] = valor[0];
					jsonData_interior[i] = valor[1];
					});
				}
				
		});

			
		//Inicializa las variables necesarias para highcharts extrayendolas del json
		//El json lleva los tiempos en segundos (heredados de Unix) y hay que pasarlos a milisegundos para que pueda trabajar javascript con ellos
		// de hay la cifra de 1000

		var dosHoras = 3600 * 1000 * 2;
		start = json.meta.start * 1000 + dosHoras; 	//Le sumanos dos horas para compensar el ajuste horario del navegador
		interval = json.meta.step * 1000;

		var fechaInicio = new Date(start);
		console.log(fechaInicio.getDate()+ ":" + fechaInicio.getHours() + ":" +fechaInicio.getMinutes());
		
		})
		//Si la funcion getJSON se realiza con exito se procede a mostrar el highcharts
		.done(function() { 
		
			console.log( " success" );
			
			$('#container_diario').highcharts({
				
				chart:{
					renderTo: 'container',
				},
				
				title: {
					text: 'Temperaturas diarias medidas por la raspberry',
					x: -20 //center
				},
				subtitle: {
					text: 'Fuente: Raspberry Pi',
					x: -20
				},
				xAxis: {
					type: 'datetime',
					labels: {
						formatter: function() {
							return Highcharts.dateFormat('%I:%M %P', this.value);
						}, 
						step: 1,
						//tickInterval: 24* 60 * 60 * 1000
					}
				},
				
				yAxis: {
					title: {
						text: 'Temperature (°C)'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#808080'
					}]
				},
				tooltip: {
					valueSuffix: '°C'
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					borderWidth: 0
				},
				series: [{
					name: 'Temp exterior',
					pointStart: start,
					pointInterval: interval,
					data: jsonData_exterior,
                    			},
					{
					name: 'Temp interior',
					pointStart: start,
					pointInterval: interval,
					data: jsonData_interior,
                    			}] 
			});})
		// Si falla la funcion getJSON
		.fail(function() { console.log( "error" ); })
		// En cualquier otro caso
		.always(function() { console.log( "complete" ); });	

		
});


//--------------------------------------------------------------------------------
//	Grafica Semanal
//--------------------------------------------------------------------------------


$(document).ready(function(){
	
	var start = null;
	var interval = null;
	var jsonData_exterior = [];
	var jsonData_interior = [];
	var datosJson = null;
	
	$.getJSON('archivo_exportado_comillas_semanal.json', function(json) {
		
		//Guarda los datos a mostrar en el array jsonData y Muestra el contenido del json en consola
		$.each(json, function(key, value){
			//console.log(key, value)
			if (key == "data"){
				$.each(value, function(i, valor){
					jsonData_exterior[i] = valor[0];
					jsonData_interior[i] = valor[1];
					});
				}
				
		});
			
		//Inicializa las variables necesarias para highcharts extrayendolas del json
		//El json lleva los tiempos en segundos (heredados de Unix) y hay que pasarlos a milisegundos para que pueda trabajar javascript con ellos
		// de hay la cifra de 1000

		start = json.meta.start * 1000 ; 	
		interval = json.meta.step * 1000;

		var fechaInicio = new Date(start);
		console.log(fechaInicio.getDate()+ ":" + fechaInicio.getHours() + ":" +fechaInicio.getMinutes());
		
		})
		//Si la funcion getJSON se realiza con exito se procede a mostrar el highcharts
		.done(function() { 
		
			console.log( " success" );
			
			$('#container_semanal').highcharts({
				
				chart:{
					renderTo: 'container',
				},
				
				title: {
					text: 'Temperaturas de la semana registradas por la raspberry',
					x: -20 //center
				},
				subtitle: {
					text: 'Fuente: Raspberry Pi',
					x: -20
				},
				xAxis: {
					type: 'datetime',
                			tickInterval:  24 * 3600 * 1000, // one day
                			tickWidth: 0,
                			gridLineWidth: 1,
                			labels: {
                    				align: 'left',
                    				x: 3,
                    				y: -3
                			}				
				},
				
				yAxis: {
					title: {
						text: 'Temperature (°C)'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#808080'
					}]
				},
				tooltip: {
					valueSuffix: '°C'
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					borderWidth: 0
				},
				series: [{
					name: 'Temp exterior',
					pointStart: start,
					pointInterval: interval,
					data: jsonData_exterior,
                    			},
					{
					name: 'Temp interior',
					pointStart: start,
					pointInterval: interval,
					data: jsonData_interior,
                    			}] 
			});})
		// Si falla la funcion getJSON
		.fail(function() { console.log( "error" ); })
		// En cualquier otro caso
		.always(function() { console.log( "complete" ); });	
	
});

//--------------------------------------------------------------------------------
//	Grafica Mensual
//--------------------------------------------------------------------------------

$(document).ready(function(){
	
	var start = null;
	var interval = null;
	var jsonData_exterior = [];
	var jsonData_interior = [];
	var datosJson = null;
	
	$.getJSON('archivo_exportado_comillas_mensual.json', function(json) {
		
		//Guarda los datos a mostrar en el array jsonData y Muestra el contenido del json en consola
		$.each(json, function(key, value){
			//console.log(key, value)
			if (key == "data"){
				$.each(value, function(i, valor){
					jsonData_exterior[i] = valor[0];
					jsonData_interior[i] = valor[1];
					});
				}
				
		});
			
		//Inicializa las variables necesarias para highcharts extrayendolas del json
		//El json lleva los tiempos en segundos (heredados de Unix) y hay que pasarlos a milisegundos para que pueda trabajar javascript con ellos
		// de hay la cifra de 1000

		start = json.meta.start * 1000 ; 	
		interval = json.meta.step * 1000;

		var fechaInicio = new Date(start);
		console.log(fechaInicio.getDate()+ ":" + fechaInicio.getHours() + ":" +fechaInicio.getMinutes());
		
		})
		//Si la funcion getJSON se realiza con exito se procede a mostrar el highcharts
		.done(function() { 
		
			console.log( " success" );
			
			$('#container_mensual').highcharts({
				
				chart:{
					renderTo: 'container',
				},
				
				title: {
					text: 'Temperaturas del ultimo mes registradas por la raspberry',
					x: -20 //center
				},
				subtitle: {
					text: 'Fuente: Raspberry Pi',
					x: -20
				},
				xAxis: {
					type: 'datetime',
                			tickInterval: 7 * 24 * 3600 * 1000, // one week
                			tickWidth: 0,
                			gridLineWidth: 1,
                			labels: {
                    				align: 'left',
                    				x: 3,
                    				y: -3
                			}				
				},
				
				yAxis: {
					title: {
						text: 'Temperature (°C)'
					},
					plotLines: [{
						value: 0,
						width: 1,
						color: '#808080'
					}]
				},
				tooltip: {
					valueSuffix: '°C'
				},
				legend: {
					layout: 'vertical',
					align: 'right',
					verticalAlign: 'middle',
					borderWidth: 0
				},
				series: [{
					name: 'Temp exterior',
					pointStart: start,
					pointInterval: interval,
					data: jsonData_exterior,
                    			},
					{
					name: 'Temp interior',
					pointStart: start,
					pointInterval: interval,
					data: jsonData_interior,
                    			}] 
			});})
		// Si falla la funcion getJSON
		.fail(function() { console.log( "error" ); })
		// En cualquier otro caso
		.always(function() { console.log( "complete" ); });	
	
});

//--------------------------------------------------------------------------------
//	Grafica Anual
//--------------------------------------------------------------------------------

$(document).ready(function(){
	
	var start = null;
	var interval = null;
	var jsonData_exterior = [];
	var jsonData_interior = [];
	var datosJson = null;
	
	$.getJSON('archivo_exportado_comillas_anual.json', function(json) {
		
		//Guarda los datos a mostrar en el array jsonData y Muestra el contenido del json en consola
		$.each(json, function(key, value){
			//console.log(key, value)
			if (key == "data"){
				$.each(value, function(i, valor){
					jsonData_exterior[i] = valor[0];
					jsonData_interior[i] = valor[1];
					});
				}
				
		});
			
		//Inicializa las variables necesarias para highcharts extrayendolas del json
		//El json lleva los tiempos en segundos (heredados de Unix) y hay que pasarlos a milisegundos para que pueda trabajar javascript con ellos
		// de hay la cifra de 1000

		var dosHoras = 3600 * 1000 * 2;
		start = json.meta.start * 1000 + dosHoras; 	//Le sumanos dos horas para compensar el ajuste horario del navegador
		interval = json.meta.step * 1000;

		var fechaInicio = new Date(start);
		console.log(fechaInicio.getDate()+ ":" + fechaInicio.getHours() + ":" +fechaInicio.getMinutes());
		
		})
		//Si la funcion getJSON se realiza con exito se procede a mostrar el highcharts
		.done(function() { 
		
			console.log( " success" );
			
			$('#container_anual').highcharts({
				chart: {
					type: 'area',
					zoomType: 'x',
					spacingRight: 20
				},
				title: {
					text: 'Temperatura exterior media diaria en doce meses registrada por la Raspberry'
				},
				subtitle: {
					text: document.ontouchstart === undefined ?
                    				'Clickea y arrastra en el area para agrandarla' :
                    				'Arrastra tu dedo sobre la grafica para agrandarla'
				},
				xAxis: {
					type: 'datetime',
					maxZoom: 1* 24 * 3600000, // un dia
					title: {
						text: null
					}
				},
				yAxis: {
					title: {
						text: 'Temperatura Media Diaria'
					}
				},
				tooltip: {
					shared: true
				},
				legend: {
					enabled: false
				},
				plotOptions: {
					area: {
						stacking: 'normal',
						fillColor: {
							linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1},
							stops: [
                            				[0, Highcharts.getOptions().colors[0]],
                            				[1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
							]
						},
						lineWidth: 1,
						marker: {
							enabled: false
						},
						shadow: false,
						states: {
							hover: {
								lineWidth: 1
							}
						},
						threshold: null
					}
				},
				
				series: [{
					name: 'Temp exterior',
					pointInterval: interval,
					pointStart: start,
					data: jsonData_exterior,
					}]
			
			});})
		// Si falla la funcion getJSON
		.fail(function() { console.log( "error" ); })
		// En cualquier otro caso
		.always(function() { console.log( "complete" ); });	
	
});



