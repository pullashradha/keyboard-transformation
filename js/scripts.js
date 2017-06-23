$(document).ready(function() {
  $("form#textInput").submit(function(event) {
    event.preventDefault();
    var inputtedText = $("input#textToChange").val();
    var outputtedText = [];
    for (var i = 0; i < inputtedText.length; i ++)
    {
      outputtedText.push(inputtedText[i]);
    }
    alert(outputtedText);

    $("#outputText").text(outputtedText);
  });
});
