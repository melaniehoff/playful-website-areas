$( document ).ready(function() {
    console.log( "the html has loaded and my script file is properly loaded into my website code" );

    var morning = "morning.gif";
    var afternoon = "afternoon.gif";
    var night = "morning.gif";


    function checkHour() {
        var d = new Date();
        var n = d.getHours();
        // var n = 1;

        console.log(n + "this is the hour of day that was detected")
      if(n <= 11){
          console.log("It's the morning!")
          $('body').css('background-image', 'url(' + morning + ')');
        }
        if(n >= 12 && n < 16){
          console.log("It's the afternoon!")
          $('body').css('background-image', 'url(' + afternoon + ')');
        }
        if(n >= 16){
          console.log("the time that my code detected is what i am calling an evening time!")
          $('body').css('background-image', 'url(' + night + ')');
          console.log(night);
        }

    }


    checkHour();
    console.log($('body').css('background-image'));

});
