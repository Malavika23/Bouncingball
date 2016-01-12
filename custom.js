$(document).ready(function() {

    //caching Selectors and variables
    var $window = $(window), 
	     $ball = $(".ball-red"), 
         xPosflag = false, 
         yPosflag = false,   
         Xposition = 0,
         Yposition = 0,
         distance = 1 
       
    function resetPosition() {        
        $ball.css("left", Xposition); //setting left(x) position of the ball
        $ball.css("top", Yposition); //setting top(y) position of the ball

        xPosflag ? (Xposition = Xposition + distance) : (Xposition = Xposition - distance); 
        yPosflag ? (Yposition = Yposition + distance) : (Yposition = Yposition - distance);  

        if (Xposition < 0) {  
            xPosflag = true;
            Xposition = 0; 
        };

        if (Yposition < 0) { 
            yPosflag = true; 
            Yposition = 0;  
        };

        (Xposition >= $window.width() - $ball.width()) && (xPosflag = false); 
        (Yposition >= $window.height() - $ball.height()) && (yPosflag = false);  
    };


    function init() {
        setInterval(resetPosition, 3); 
    };
 init(); 
	 
  });

