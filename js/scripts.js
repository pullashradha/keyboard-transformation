$(document).ready(function() {
  $("form#textInput").submit(function(event) {
    event.preventDefault();

//Without RegEx
    var row1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var row2 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    var row3 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
    var row4 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

    var inputtedText = $("textarea#textToChange").val().split('');
    var outputtedText = [];

//Horizontal Flip
    for (var i = 0; i < inputtedText.length; i ++)
    {
      //Find which array character is in
      if ($.inArray(inputtedText[i], row1) != -1) {   //inArray returns -1 if value is not in array
        //Find place value of character in array
        var charactersPlaceInArray = row1.indexOf(inputtedText[i], row1);
        outputtedText.push(row1[(row1.length - 1) - charactersPlaceInArray]);
      } else if ($.inArray(inputtedText[i], row2) != -1) {
        var charactersPlaceInArray = row2.indexOf(inputtedText[i], row2);
        outputtedText.push(row2[(row2.length - 1) - charactersPlaceInArray]);
      } else if ($.inArray(inputtedText[i], row3) != -1) {
        var charactersPlaceInArray = row3.indexOf(inputtedText[i], row3);
        outputtedText.push(row3[(row3.length - 1) - charactersPlaceInArray]);
      } else if ($.inArray(inputtedText[i], row4) != -1) {
        var charactersPlaceInArray = row4.indexOf(inputtedText[i], row4);
        outputtedText.push(row4[(row4.length - 1) - charactersPlaceInArray]);
      } else {
        outputtedText.push(inputtedText[i]);
      }
    }

    $("#outputText").text(outputtedText);
  });
});
