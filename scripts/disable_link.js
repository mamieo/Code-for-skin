<script>
jQuery(document).ready(function(){
   var main_nav_arr = ["Resources ","Insights "];
   $('nav[role=navigation] > ul.nav > li.dropdown').each(function(){
       for(var i = 0; i < main_nav_arr.length; i++){
           if( main_nav_arr[i] == $(this).children('a').text() ) {
               $(this).children('a').removeAttr('href');
               break;
           }
       }
   });

   var check_select_main_nav = setInterval(function(){ 
       if($('nav[role=navigation] select').length > 0){
           $('nav[role=navigation] select > option').each(function(){
               if(!$(this).attr('value').startsWith('http')){
                   $(this).attr('disabled', 'disabled');
               }
           });
           clearInterval(check_select_main_nav);
       }
   }, 500);
})
</script>