
$(function() {



    $("#booking1").click(function booking1(){
       
        console.log(movieNumber);
        window.location = 'booking.html';//allows user to access the booking page after picking their movie

    });
    $("#booking2").click(function booking2(){

        window.location = 'booking.html';//allows user to access the booking page after picking their movie
        
    });
    $("#booking3").click(function booking3(){

        window.location = 'booking.html';//allows user to access the booking page after picking their movie
        
    });
    $("#booking4").click(function booking4(){

        window.location = 'booking.html';//allows user to access the booking page after picking their movie
        
    });
    $("#booking5").click(function booking5(){

        window.location = 'booking.html';//allows user to access the booking page after picking their movie
        
    });
    
    $("#showMovie").click(function changeCurrentMovie(){
           
        movieNumber = document.getElementById("movie").value;
        console.log(movieNumber);

        if (movieNumber == 1){
            document.getElementById("movieSelected").textContent = "Horror The movie";
        }
        else if (movieNumber == 2){
            document.getElementById("movieSelected").textContent = "Action The movie";
        }
        else if (movieNumber == 3){
            document.getElementById("movieSelected").textContent = "Art The movie";
        }
        else if (movieNumber == 4){
            document.getElementById("movieSelected").textContent = "Drama The movie";
        }
        else if (movieNumber == 5){
            document.getElementById("movieSelected").textContent = "French movie The movie";
        }
        else{
            document.getElementById("movieSelected").textContent = "Error";
        }

    })
    
    $("#submit").click(function bookMovie(){

        console.log("yes working");
        if (movieNumber == 1){
        }
        else if (movieNumber == 2){
        }
        else if (movieNumber == 1){
        }
        else if (movieNumber == 1){
        }
        else if (movieNumber == 1){
        }

    });


});

