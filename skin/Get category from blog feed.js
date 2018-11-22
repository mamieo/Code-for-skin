<script>
$(document).ready(function(){
    var myVar = setInterval(function(){ check() }, 500);
    
    function check() {
        var blog = $(".hp-blog .row-condensed footer");
        if (blog.length > 0) {
            category();
            stop();
        }
    }
    
    function stop() {
        clearInterval(myVar);
    }
    
    function category() {
        var blog = $(".hp-blog .row-condensed");
        blog.each(function() {
            var category = $(this).find("footer span a").text();
            $(this).find("h3[itemprop='headline'] a span").prepend("<strong>" + category + ": </strong>");
            $(this).find("footer").html("");
        });
        
    }
})
</script>