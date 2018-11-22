<script src="http://rtscomp.cdn.bypronto.com/assets/scripts/scrollTo.js"></script>
<script src="http://rtscomp.cdn.bypronto.com/assets/scripts/scrollToTop/scrolltopcontrol.js"></script>

<script src="//cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.3/jquery.easing.min.js"></script>
<script>
var $ = jQuery.noConflict();
$(document).ready(function(){ 
	var _duration= 800;
	var _ease= 0;
	
	$('.home header nav li a').attr("rel","jumpdown");
	$("[rel=jumpdown]").click(function(){
		$(this).jumpdown({duration:parseInt(_duration), easeout: _ease});
		return false;
	});
});

(function($){
	$.fn.extend({ 
		//plugin name - jumpdown
		jumpdown: function(options) {

			var easing = ["easeOutSine","easeInCubic","easeInOutCubic","easeOutBack"];
			//Settings list and the default values
			var defaults = {
				duration: 800,
				easeout: 0
			};
			
			var options = $.extend(defaults, options);
			 
		
    		return this.each(function() {
				var o =options;

				if(o.easeout!=-1){
					console.log(o.easeout + "d:"+ o.duration);
					$.scrollTo($(this).attr("href"), { duration: parseInt(o.duration),  easing: easing[o.easeout] });
				}
				else{
					$.scrollTo($(this).attr("href"), {duration: parseInt(o.duration)});
				}
    		});
    	}
	});
})(jQuery);
</script>