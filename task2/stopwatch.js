$(() => {
    // alert("Hi this is a test");
    let hrs = 0;
    let mins = 0;
    let seconds = 0;
    let ms = 0;

    $("#display").append("0" + hrs + ":" + "0" + mins + ":" + "0" + seconds + ":" + "0" + ms);
    function increment(){
        ms++;
    }

    //TODO: think of putting increments at the end of the functions.
    function secondsTick(){
        setInterval(() => {
            seconds++;
            if(seconds < 10){
                $(".clock #seconds").html("0" + seconds + ":");
            } else{
                $(".clock #seconds").html(seconds + ":");
            }
            if(seconds >= 59){
                seconds = 0;
            }
        }, 1000);
    }

    function millisecondsTick(){
        setInterval(() => {
            ms++;
            if(ms < 10){
                $(".clock #milliseconds").html("0" + ms);
            } else{
                $(".clock #milliseconds").html(ms);
            }

            if(ms > 99){
                ms = 0;
            }
        }, 1);
    }

    function minutes(){
        setInterval(() => {
            mins++;
            if(mins < 10){
                $(".clock #minutes").html("0" + mins + ":");
            } else{
                $(".clock #minutes").html(mins + ":");
            }

            if(mins >= 59){
                mins = 0;
            }
        }, 60000);
    }

    function hours(){
        if(mins === 60){
            if(hrs < 10){
                $(".clock #hours").html("0" + hrs + ":");
            } else{
                $(".clock #hours").html(hrs + ":");
            }
            if(hrs >= 23){
                hrs = 0;
            }
            hrs++;
        }
    }

    //TODO: apply these to the buttons using .on();
    secondsTick();
    millisecondsTick();
    minutes();
    hours();


});