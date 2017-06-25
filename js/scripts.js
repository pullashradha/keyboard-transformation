////////////// Business Logic
//Create keyboard row arrays
var row1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var row2 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var row3 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
var row4 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
//Combine all rows for linear shift function
var allRows = row1.concat(row2).concat(row3).concat(row4);

//Create final text output array
var outputtedText = [];

//Create Text Object
function TransformedText () {
  this.horizontalFlipValue = [];
  this.verticalFlipValue = [];
  this.linearShiftValue = [];
}

// Horizontal Flip Function
TransformedText.prototype.horizontalFlip = function (outputtedText) {
  this.horizontalFlipValue = []; //Reset horizontalFlipValue to 0 so previous values don't compound into array
  for (var i = 0; i < outputtedText.length; i ++)
  {
    //Find which array character is in
    if ($.inArray(outputtedText[i], row1) != -1) {   //inArray returns -1 if value is not in array
      //Find place value of character in array
      var charactersPlaceInArray = row1.indexOf(outputtedText[i], row1);
      this.horizontalFlipValue.push(row1[(row1.length - 1) - charactersPlaceInArray]);
    } else if ($.inArray(outputtedText[i], row2) != -1) {
      var charactersPlaceInArray = row2.indexOf(outputtedText[i], row2);
      this.horizontalFlipValue.push(row2[(row2.length - 1) - charactersPlaceInArray]);
    } else if ($.inArray(outputtedText[i], row3) != -1) {
      var charactersPlaceInArray = row3.indexOf(outputtedText[i], row3);
      this.horizontalFlipValue.push(row3[(row3.length - 1) - charactersPlaceInArray]);
    } else if ($.inArray(outputtedText[i], row4) != -1) {
      var charactersPlaceInArray = row4.indexOf(outputtedText[i], row4);
      this.horizontalFlipValue.push(row4[(row4.length - 1) - charactersPlaceInArray]);
    } else {
      this.horizontalFlipValue.push(outputtedText[i]);
    }
  }
  outputtedText = this.horizontalFlipValue;
}

//Vertical Flip Function
TransformedText.prototype.verticalFlip = function (outputtedText) {
  this.verticalFlipValue = [];
  for (var i = 0; i < outputtedText.length; i ++)
  {
    if ($.inArray(outputtedText[i], row1) != -1) {
      var charactersPlaceInArray = row1.indexOf(outputtedText[i], row1);
      this.verticalFlipValue.push(row4[charactersPlaceInArray]);
    } else if ($.inArray(outputtedText[i], row2) != -1) {
      var charactersPlaceInArray = row2.indexOf(outputtedText[i], row2);
      this.verticalFlipValue.push(row3[charactersPlaceInArray]);
    } else if ($.inArray(outputtedText[i], row3) != -1) {
      var charactersPlaceInArray = row3.indexOf(outputtedText[i], row3);
      this.verticalFlipValue.push(row2[charactersPlaceInArray]);
    } else if ($.inArray(outputtedText[i], row4) != -1) {
      var charactersPlaceInArray = row4.indexOf(outputtedText[i], row4);
      this.verticalFlipValue.push(row1[charactersPlaceInArray]);
    } else {
      this.verticalFlipValue.push(outputtedText[i]);
    }
  }
  outputtedText = this.verticalFlipValue;
}

//Linear Shift Function
TransformedText.prototype.linearShift = function (outputtedText, linearShiftValue) {
  this.linearShiftValue = [];
  for (var i = 0; i < outputtedText.length; i ++)
  {
    if ($.inArray(outputtedText[i], allRows) != -1) {
      var charactersPlaceInArray = allRows.indexOf(outputtedText[i], allRows);
      if ((charactersPlaceInArray + linearShiftValue) < 0) {
        this.linearShiftValue.push(allRows[allRows.length + (charactersPlaceInArray + linearShiftValue)]);
      } else if ((charactersPlaceInArray + linearShiftValue) > 39) {
        var shiftsUntilEndOfArray = (allRows.length - 1) - charactersPlaceInArray;
        if (shiftsUntilEndOfArray === 0) {
          this.linearShiftValue.push(allRows[linearShiftValue - 1]);
        } else {
          this.linearShiftValue.push(allRows[linearShiftValue - shiftsUntilEndOfArray - 1]);
        }
      } else {
        this.linearShiftValue.push(allRows[charactersPlaceInArray + linearShiftValue]);
      }
    } else {
      this.linearShiftValue.push(outputtedText[i]);
    }
  }
  outputtedText = this.linearShiftValue;
}


////////////// User Interface
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
    $("#output-text").text(outputtedText.join(''));
  });
});
