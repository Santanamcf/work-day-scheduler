$(document).ready(function(){   


    var currentHour = moment().hours();
    console.log(typeof currentHour)

    $( ".time-block" ).each(function( index ) {
        var timeBlockHour = parseInt($(this).attr("id"))
        console.log(typeof timeBlockHour );
        if (currentHour > timeBlockHour){
            $(this).addClass("past")
        
        }
        else if(currentHour === timeBlockHour){
            $(this).addClass("present")
        }
        else{
            $(this).addClass("future")
        }
        
    
    
    
    
    
    
    
    
    
    
    
    });

      



})