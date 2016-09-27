
	function Weather($node){
		this.$node = $node;
		this.init();
	}
	Weather.prototype.init = function(){
		var cur = this;
		$.ajax({
			url: 'http://api.jirengu.com/weather.php',
			type: 'get',
			dataType: 'jsonp',
			success: function(ret){
				console.log(ret);
				var city = ret.results[0].currentCity;
				var weather = ret.results[0].weather_data[0].weather;
				var temperature = ret.results[0].weather_data[0].temperature;
				var wind = ret.results[0].weather_data[0].wind;
				cur.$node.text(city+':'+weather+','+temperature+','+wind);
				cur.$node.attr('title',city+':'+weather+','+temperature+','+wind);
			}
		});
	}
	module.exports = Weather;