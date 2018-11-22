<script>
$(document).ready(function(){
    $(".main-header #menu-main-nav > li").mouseover(function(){
        $(this).children().addClass("active-dropdown");
        $(this).siblings().children().removeClass("active-dropdown");
    });
    $(".main-header #menu-main-nav > li").mouseout(function(){
        $(this).find("a").removeClass("active-dropdown");
    });
    
});
</script>