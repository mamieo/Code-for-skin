<script>
$(document).ready(function(){
    var myVar = setInterval(function(){ setStart() }, 500);
    
    function setStart() {
       if ($(".gform_confirmation_wrapper").length > 0) {
            $('html, body').animate({scrollTop:0}, 'slow');
            stopEnd();
       }
    }
    
    function stopEnd() {
        clearInterval(myVar);
    } 
});
</script>
