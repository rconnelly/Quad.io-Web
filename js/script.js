$('document').ready(function(){
   $('#pageSelect').bind('change',function(evt){
      window.location = $(this).val();
   });
});