
console.log("works");
var crystals =  [$("#blue"),$("#green"),$("#red"),$("#yellow")];
var randomNumber = Math.floor(Math.random() * 100);
index = 0
numberValues = [1,4,20,3]
console.log(randomNumber);
$("#randomNumber").html("<h3>"+randomNumber+"<h3>");

for (index = 0; index < crystals.length; index++) {
    var crystalValue = Math.floor(Math.random()*8);
    crystals[index].attr("data-crystalValue", crystalValue);
    console.log(crystals[index])
    
}
