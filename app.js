// var mySong = document.getElementById("jFla");
// var icon = document.getElementById("pp");

// icon.onclick = function(){
//     if(mySong.paused)
//     {mySong.play();}
//     else
//     {mySong.pause();}
// }
var mySong = document.querySelector("#jFla");
var icon = document.querySelectorAll(".bells");
for(let i=0;i<3;i++)
{
icon[i].onclick = function(){
  if(mySong.paused)
       {mySong.play();}
       else
       {mySong.pause();}
}
}



$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})





// Set the date we're counting down to
var countDownDate = new Date("DEC 25, 2021 00:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("mins").innerHTML = minutes;
  document.getElementById("secs").innerHTML = seconds;
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("hasCome").innerHTML = "I'm HERE!!!";
    document.getElementById("count").classList.add("timeisover");
    document.getElementById("cardfinal").classList.add("firecrackers");
    document.getElementById("circle").classList.remove("notyet");
    document.getElementById("hid").classList.remove("notyet");
  }
}, 1000);




//=======================================firecrackers==============================//
