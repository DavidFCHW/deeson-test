$(() => {

    let hrs = 0;
    let mins = 0;
    let seconds = 0;
    let ms = 0;

    $("#display").append("0" + hrs + ":" + "0" + mins + ":" + "0" + seconds + ":" + "0" + ms);

    let sessKeys = [];
    for(let k = 0; k < sessionStorage.length; k++){
        sessKeys.push(parseInt(sessionStorage.key(k)));
    }
    sessKeys.sort();
    for(let i = 0; i < sessionStorage.length; i++){
        if(sessKeys[i] < 10) {
            $("#laps").append("<tr>" + "<td>" + sessKeys[i] + "</td>" + "<td>" + sessionStorage.getItem(sessKeys[i].toString()) + "</td>" + "</tr>");
        }
    }
    for(let i = 0; i < sessionStorage.length; i++){
        if(sessKeys[i] >= 10) {
            $("#laps").append("<tr>" + "<td>" + sessKeys[i] + "</td>" + "<td>" + sessionStorage.getItem(sessKeys[i].toString()) + "</td>" + "</tr>");
        }
    }


    let stopMs;
    let stopSec;
    let stopMin;
    function watch(){
        stopMs = setInterval(() => {
            ms++;
            if(ms < 10){
                $(".clock #milliseconds").html("0" + ms);
            } else{
                $(".clock #milliseconds").html(ms);
            }

            if(ms > 99){
                ms = 0;
                $(".clock #milliseconds").html("0" + ms);
            }
        }, 1);

        stopSec = setInterval(() => {
            seconds++;
            if(seconds < 10){
                $(".clock #seconds").html("0" + seconds + ":");
            } else{
                $(".clock #seconds").html(seconds + ":");
            }
            if(seconds > 59){
                seconds = 0;
                $(".clock #seconds").html("0" + seconds + ":");
            }
        }, 1000);

        stopMin = setInterval(() => {
            mins++;
            if(mins < 10){
                $(".clock #minutes").html("0" + mins + ":");
            } else{
                $(".clock #minutes").html(mins + ":");
            }

            if(mins > 59){
                mins = 0;
                $(".clock #minutes").html("0" + mins + ":");
            }
        }, 60000);

        if(mins === 60){
            if(hrs < 10){
                $(".clock #hours").html("0" + hrs + ":");
            } else{
                $(".clock #hours").html(hrs + ":");
            }
            if(hrs >= 23){
                hrs = 0;
                $(".clock #hours").html("0" + hrs + ":");
            }
            hrs++;
        }
    }

    $("#start").on('click', watch);
    function pause(){
        hrs = 0;
        clearInterval(stopMs);
        clearInterval(stopSec);
        clearInterval(stopMin);
    }

    $("#pause").on('click', pause);
    $("#reset").on('click', () => {
        pause();
       $(".clock #hours").html("0" + 0 + ":");
       $(".clock #minutes").html("0" + 0 + ":");
       $(".clock #seconds").html("0" + 0 + ":");
       $(".clock #milliseconds").html("0" + 0);
    });

    let count = 0;
    $("#lap").on('click', () => {
        let hrsID = $("#hours").html();
        let minsID = $("#minutes").html();
        let secID = $("#seconds").html();
        let msID = $("#milliseconds").html();
        count++;
        $("#laps").append("<tr>"+ "<td>" + count + "</td>" + "<td>"+ hrsID + minsID + secID + msID +"</td>" + "</tr>");

        sessionStorage.setItem(count.toString(), hrsID + minsID + secID + msID);

    });
    $("#clear").on('click', () => {
        let table = $("#laps").html();
        $("td").remove();
        count = 0;
        sessionStorage.clear();
    });

});