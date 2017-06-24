////////////// Business Logic
//Create keyboard row arrays
var row1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var row2 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var row3 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
var row4 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
//Combine all rows for linear shift function
var allRows = row1.concat(row2).concat(row3).concat(row4);

//Create final text output array
var transformingText = [];
var outputtedText = [];

//Create Text Object
function TransformedText (transformingText) {
  this.transformingText = transformingText;
}

// Horizontal Flip Function
TransformedText.prototype.horizontalFlip = function () {
  for (var i = 0; i < this.transformingText.length; i ++)
  {
    //Find which array character is in
    if ($.inArray(this.transformingText[i], row1) != -1) {   //inArray returns -1 if value is not in array
      //Find place value of character in array
      var charactersPlaceInArray = row1.indexOf(this.transformingText[i], row1);
      outputtedText.push(row1[(row1.length - 1) - charactersPlaceInArray]);
    } else if ($.inArray(this.transformingText[i], row2) != -1) {
      var charactersPlaceInArray = row2.indexOf(this.transformingText[i], row2);
      outputtedText.push(row2[(row2.length - 1) - charactersPlaceInArray]);
    } else if ($.inArray(this.transformingText[i], row3) != -1) {
      var charactersPlaceInArray = row3.indexOf(this.transformingText[i], row3);
      outputtedText.push(row3[(row3.length - 1) - charactersPlaceInArray]);
    } else if ($.inArray(this.transformingText[i], row4) != -1) {
      var charactersPlaceInArray = row4.indexOf(this.transformingText[i], row4);
      outputtedText.push(row4[(row4.length - 1) - charactersPlaceInArray]);
    } else {
      outputtedText.push(this.transformingText[i]);
    }
  }
  return outputtedText;
};

//Vertical Flip Function
TransformedText.prototype.verticalFlip = function () {
  for (var i = 0; i < this.transformingText.length; i ++)
  {
    if ($.inArray(this.transformingText[i], row1) != -1) {
      var charactersPlaceInArray = row1.indexOf(this.transformingText[i], row1);
      outputtedText.push(row4[charactersPlaceInArray]);
    } else if ($.inArray(this.transformingText[i], row2) != -1) {
      var charactersPlaceInArray = row2.indexOf(this.transformingText[i], row2);
      outputtedText.push(row3[charactersPlaceInArray]);
    } else if ($.inArray(this.transformingText[i], row3) != -1) {
      var charactersPlaceInArray = row3.indexOf(this.transformingText[i], row3);
      outputtedText.push(row2[charactersPlaceInArray]);
    } else if ($.inArray(this.transformingText[i], row4) != -1) {
      var charactersPlaceInArray = row4.indexOf(this.transformingText[i], row4);
      outputtedText.push(row1[charactersPlaceInArray]);
    } else {
      outputtedText.push(this.transformingText[i]);
    }
  }
  return outputtedText;
}

//Linear Shift Function
TransformedText.prototype.linearShift = function (linearShiftValue) {
  for (var i = 0; i < this.transformingText.length; i ++)
  {
    if ($.inArray(this.transformingText[i], allRows) != -1) {
      var charactersPlaceInArray = allRows.indexOf(this.transformingText[i], allRows);
      if ((charactersPlaceInArray + linearShiftValue) < 0) {
        outputtedText.push(allRows[allRows.length + (charactersPlaceInArray + linearShiftValue)]);
      } else if ((charactersPlaceInArray + linearShiftValue) > 39) {
        var shiftsUntilEndOfArray = (allRows.length - 1) - charactersPlaceInArray;
        if (shiftsUntilEndOfArray === 0) {
          outputtedText.push(allRows[linearShiftValue - 1]);
        } else {
          outputtedText.push(allRows[linearShiftValue - shiftsUntilEndOfArray - 1]);
        }
      } else {
        outputtedText.push(allRows[charactersPlaceInArray + linearShiftValue]);
      }
    }
  }
  return outputtedText;
}


////////////// User Interface
$(document).ready(function() {
  $("form#text-input-form").submit(function(event) {
    event.preventDefault();

//Input initial text & transformation values
    var inputtedText = $("textarea#text-to-change").val();
    var transformationValues = $("input#tranformation-values").val().split(","); //Split values by comma separations

//Create array to output tranformed text for each transform
    transformingText = inputtedText.split(''); //Split text inputted by character

//Create new transformed text object
    var newTransformedText = new TransformedText (transformingText);

//Loop through transformation values
  for (var i = 0; i < transformationValues.length; i ++) {
    if (transformationValues[i] === "H") {
      newTransformedText.horizontalFlip();
    } else if (transformationValues[i] === "V") {
      newTransformedText.verticalFlip();
    } else {
      var linearShiftValue = parseInt(transformationValues[i]);
      newTransformedText.linearShift(linearShiftValue);
    }
  }

//Output tranformed text
    $("#output-text").text(outputtedText);
  });
});
