
	function Move($node){
		this.$node = $node;
		this.winX = $(window).width()/2;
		this.winY = $(window).height()/2;
	}
	Move.prototype = {
		open:function(arr){
			this.arr = arr;
			this.bind();
		},
		bind:function(){
			var _this = this;
			_this.$node.on('mousemove',function(e){
				var moveX = e.pageX - _this.winX,
					moveY = e.pageY - _this.winY;
				for(var i=0;i<_this.arr.length;i++){
					var temp = _this.arr[i];
					$(temp.target).css({'transform':'translate('+moveX/temp.xFactor+'px,'+moveY/temp.yFactor+'px)'});
				}
			})
		}
	}
	module.exports = Move;