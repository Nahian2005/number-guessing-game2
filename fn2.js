var numberofwon=0;
var numberoflose=0;


var guessingnum= parseInt(prompt("Guess a number from 1 to 10: (Only ONE CHANCE!)"));

var num = Math.floor(Math.random() *9 ) +1;

if(guessingnum == num){


    document.write("<h1> Congratulations! YOU WON THE GAME! </h1>");

    numberofwon++

    document.write("Number of tries:" + numberofwon + "<br/>" + "<h5> A genius is always a genius. <h5/> " + "<br/>" );
    document.write("<h5> Refresh this page to play again! </h5>");
}
    
else{  
   
   document.write(" <h4> LOL! YOU LOSE THE GAME! Go EAT GRASS IN your HOUSE! </h4> The Random number was: " +  num +"<br/>" );

   numberoflose++
   document.write("Number of tries:  " + numberoflose + " <h5> This was expected. This user is so dumb that he cannot guess a correct number!LOL!! <h5/>" + "<br/>" );
   document.write("<h5> Refresh this page to try AGAIN LOSER </h5>");
}






