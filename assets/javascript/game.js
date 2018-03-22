
console.log("works");
var crystals =  [$("#bluei"),$("#greeni"),$("#redi"),$("#yellowi")];
var randomNumber = Math.floor(Math.random() * 100);
index = 0;
var playerScore = 0
function resetGame() {
  index = 0;
  playerScore = 0;
  randomNumber = Math.floor(Math.random() * 100);
  $("#randomNumber").html("<h3>"+randomNumber+"<h3>");

}
console.log(randomNumber);
$("#randomNumber").html("<h3>"+randomNumber+"<h3>");

for (index = 0; index < crystals.length; index++) {
    var crystalValue = Math.floor(Math.random()*8)+1;
    crystals[index].attr("data-crystalValue", crystalValue);
    ;}

    $("#bluei").click(function () {
        playerScore = Number(playerScore)+Number($(this).attr("data-crystalValue"));
        console.log(playerScore);
        alert("New score: " + playerScore);
        if (playerScore === randomNumber) {
            alert("Victory");
            resetGame();
          }
      
          else if (playerScore > randomNumber) {
            alert("Defeat");
            resetGame();
          }});
   
    $("#redi").click(function () {
        playerScore = Number(playerScore)+Number($(this).attr("data-crystalValue"));
        console.log(playerScore);
        alert("New score: " + playerScore);
        if (playerScore === randomNumber) {
            alert("Victory");
            resetGame();
          }
      
          else if (playerScore > randomNumber) {
            alert("Defeat");
            resetGame();
          }});
    $("#yellowi").click(function () {
        playerScore = Number(playerScore)+Number($(this).attr("data-crystalValue"));
        console.log(playerScore);
        alert("New score: " + playerScore);
        if (playerScore === randomNumber) {
            alert("Victory");
            resetGame();
          }
      
          else if (playerScore > randomNumber) {
            alert("Defeat");
            resetGame();
          }});
    $("#greeni").click(function () {
        playerScore = Number(playerScore)+Number($(this).attr("data-crystalValue"));
        console.log(playerScore);
        alert("New score: " + playerScore);
        if (playerScore === randomNumber) {
            alert("Victory");
            resetGame();
          }
      
          else if (playerScore > randomNumber) {
            alert("Defeat");
            resetGame();
          }});

        

      