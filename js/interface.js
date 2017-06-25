var TransformedText = ("js/transformation-functions.js").transformationModule;

$(document).ready(function() {
  $("form#text-input-form").submit(function(event) {
    event.preventDefault();

//Input initial text & transformation values
    var inputtedText = $("textarea#text-to-change").val();
    var transformationValues = $("input#tranformation-values").val().toUpperCase().split(", "); //Convert all transformation values to uppercase & split by comma/space separations

//Create array to output tranformed text for each transform
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
    $("#output-text").text(outputtedText.join('')); //Remove commas in final arrays
  });
});
