$(document).ready(function() {
  $("form#textInput").submit(function(event) {
    event.preventDefault();

//Without RegEx
    var row1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var row2 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    var row3 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
    var row4 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];

    var inputtedText = $("input#textToChange").val();
    var outputtedText = [];
    for (var i = 0; i < inputtedText.length; i ++)
    {
      if ($.inArray(inputtedText[i], row1) != -1 || $.inArray(inputtedText[i], row2) != -1 || $.inArray(inputtedText[i], row3) != -1 || $.inArray(inputtedText[i], row4) != -1) {   //inArray returns -1 if value is not in array
        outputtedText.push(inputtedText[(inputtedText.length - 1) - i]);
      } else {
        outputtedText.push(inputtedText[i]);
      }
    }

    $("#outputText").text(outputtedText);
  });
});
