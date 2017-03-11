$(document).ready(function() {

            var wins = 0;
            var loses = 0;

            var totalScore = 0;
            var randomNo = 0

            var winkNum = 0
            var dropNum = 0
            var heartNum = 0
            var greenNum = 0


            function restart() {

                totalScore = 0
                $("#totalScore").text(0);

                var randomNo = 0;
                $("#randomNum").text(0);

                var winkNum = 0
                var dropNum = 0
                var heartNum = 0
                var greenNum = 0
                game()

            }

            function score() {
                if (totalScore === numRandom) {
                    alert("You won!");
                    wins++;
                    restart();
                }
                if (totalScore > numRandom) {
                    alert("You lose!");
                    loses++;
                    restart();
                }
            }


            function game() {

                var randomNo = Math.floor(Math.random() * 90 + 10);
                numRandom = randomNo; //create local variable so it does not take the 0 from the global scope
                $("#randomNum").text(numRandom);
                console.log(numRandom);

                // console.log(randomNo);
                //create the random numbers locally in the function
                var winkNum = Math.floor(Math.random() * 9 + 1);
                var dropNum = Math.floor(Math.random() * 9 + 1);
                var heartwNum = Math.floor(Math.random() * 9 + 1);
                var madNum = Math.floor(Math.random() * 9 + 1);


                $("#winsScore").text("Wins: " + wins);
                $("#losesScore").text("Loses: " + loses);



                $("#wink").on("click", function() {
                    totalScore = totalScore + winkNum;
                    console.log("wink number is: " + winkNum);
                    console.log("User total: " + totalScore);
                    $("#totalScore").text(totalScore);
                    score();
                })


                $("#drop").on("click", function() {
                    totalScore = totalScore + dropNum;
                    console.log("drop number is: " + dropNum);
                    console.log("User total: " + totalScore);
                    $("#totalScore").text(totalScore);
                    score();

                })

                $("#heart").on("click", function() {
                    totalScore = totalScore + heartNum;
                    console.log("heart number is: " + heartNum);
                    console.log("User total: " + totalScore);
                    $("#totalScore").text(totalScore);
                    score();
                })

                $("#mad").on("click", function() {
                    totalScore = totalScore + madNum;
                    console.log("mad number is: " + madNum);
                    console.log("User total: " + totalScore);
                    $("#totalScore").text(totalScore);
                    score();
                })

            }

            game()
        });
