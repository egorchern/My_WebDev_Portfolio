var navButtonState = 0;





function displayMobileNavMenu(){
   
    if(navButtonState == 0)
    {
        
        navButtonState = 1;
        $(document).ready(function(){
            $("#forTransform").show();
            
            
        })
    }
    else{
        navButtonState = 0;
        $(document).ready(function(){
            $("#forTransform").hide();
            
            
        })
    }
}