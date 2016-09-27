
	var Move = require('./app/move');
	var m1 = new Move($('.header'));
	m1.open(
		[{
			target:'.mountain1',
			xFactor:'20',
			yFactor:'30'
		},{
			target:'.mountain2',
			xFactor:'30',
			yFactor:'40'
		},{
			target:'.mountain3',
			xFactor:'40',
			yFactor:'50'
		}
	]);
	var m2 = new Move($('.intro'));
	m2.open(
		[{
			target:'.intro-bg1',
			xFactor:'20',
			yFactor:'30'
		},{
			target:'.intro-bg2',
			xFactor:'30',
			yFactor:'40'
		}
	]);
	
	var Weather =  require('./app/weather');
	new Weather($('.weather-detail'));
