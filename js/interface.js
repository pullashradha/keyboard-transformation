$(document).ready(function() {
  $("form#text-input-form").submit(function(event) {
    event.preventDefault();

//Input initial text & transformation values
    var inputtedText = $("textarea#text-to-change").val();
    //Convert all transformation values to uppercase, remove whitespace & split by comma separation
    var transformationValues = $("input#tranformation-values").val().toUpperCase().replace(/\s/g, "").split(",");

//Create array to output transformed text for each transform
    outputtedText = inputtedText.toLowerCase().split(''); //Convert all uppercase letters to lowercase & split by character

//Create new transformed text object
    var newTransformedText = new TransformedText (outputtedText);

//Loop through transformation values
    for (var i = 0; i < transformationValues.length; i ++) {
      if (transformationValues[i] === "H") {
        newTransformedText.horizontalFlip(outputtedText);
        outputtedText = newTransformedText.horizontalFlipValue;
      } else if (transformationValues[i] === "V") {
        newTransformedText.verticalFlip(outputtedText);
        outputtedText = newTransformedText.verticalFlipValue;
      } else {
        var linearShiftValue = parseInt(transformationValues[i]); //Convert linear shift value to number
        newTransformedText.linearShift(outputtedText, linearShiftValue);
        outputtedText = newTransformedText.linearShiftValue;
      }
    }

//Output tranformed text
    $("#output-text").html(outputtedText.join("").replace(/(\r|\n)/g, "<br />")); //Remove commas in final array & keep initial indents/paragraph spacing
  });
});
