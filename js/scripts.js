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
function TransformedText (outputtedText) {
  this.inputtedText = outputtedText;
}

// Horizontal Flip Function
TransformedText.prototype.horizontalFlip = function () {
  for (var i = 0; i < this.inputtedText.length; i ++)
  {
    //Find which array character is in
    if ($.inArray(this.inputtedText[i], row1) != -1) {   //inArray returns -1 if value is not in array
      //Find place value of character in array
      var charactersPlaceInArray = row1.indexOf(this.inputtedText[i], row1);
      return outputtedText = row1[(row1.length - 1) - charactersPlaceInArray];
    } else if ($.inArray(this.inputtedText[i], row2) != -1) {
      var charactersPlaceInArray = row2.indexOf(this.inputtedText[i], row2);
      return outputtedText = row2[(row2.length - 1) - charactersPlaceInArray];
    } else if ($.inArray(this.inputtedText[i], row3) != -1) {
      var charactersPlaceInArray = row3.indexOf(this.inputtedText[i], row3);
      return outputtedText = row3[(row3.length - 1) - charactersPlaceInArray];
    } else if ($.inArray(this.inputtedText[i], row4) != -1) {
      var charactersPlaceInArray = row4.indexOf(this.inputtedText[i], row4);
      return outputtedText = row4[(row4.length - 1) - charactersPlaceInArray];
    } else {
      return outputtedText = this.inputtedText[i];
    }
  }
};

//Vertical Flip Function
TransformedText.prototype.verticalFlip = function () {
  for (var i = 0; i < this.inputtedText.length; i ++)
  {
    if ($.inArray(this.inputtedText[i], row1) != -1) {
      var charactersPlaceInArray = row1.indexOf(this.inputtedText[i], row1);
      return outputtedText = row4[charactersPlaceInArray];
    } else if ($.inArray(this.inputtedText[i], row2) != -1) {
      var charactersPlaceInArray = row2.indexOf(this.inputtedText[i], row2);
      return outputtedText = row3[charactersPlaceInArray];
    } else if ($.inArray(this.inputtedText[i], row3) != -1) {
      var charactersPlaceInArray = row3.indexOf(this.inputtedText[i], row3);
      return outputtedText = row2[charactersPlaceInArray];
    } else if ($.inArray(this.inputtedText[i], row4) != -1) {
      var charactersPlaceInArray = row4.indexOf(this.inputtedText[i], row4);
      return outputtedText = row1[charactersPlaceInArray];
    } else {
      return outputtedText = this.inputtedText[i];
    }
  }
}

//Linear Shift Function
TransformedText.prototype.linearShift = function (linearShiftValue) {
  for (var i = 0; i < this.inputtedText.length; i ++)
  {
    if ($.inArray(this.inputtedText[i], allRows) != -1) {
      var charactersPlaceInArray = allRows.indexOf(this.inputtedText[i], allRows);
      if ((charactersPlaceInArray + linearShiftValue) < 0) {
        return outputtedText = allRows[allRows.length + (charactersPlaceInArray + linearShiftValue)];
      } else if ((charactersPlaceInArray + linearShiftValue) > 39) {
        var shiftsUntilEndOfArray = (allRows.length - 1) - charactersPlaceInArray;
        if (shiftsUntilEndOfArray === 0) {
          return outputtedText = allRows[linearShiftValue - 1];
        } else {
          return outputtedText = allRows[linearShiftValue - shiftsUntilEndOfArray - 1];
        }
      } else {
        return outputtedText = allRows[charactersPlaceInArray + linearShiftValue];
      }
    }
  }
}


////////////// User Interface
$(document).ready(function() {
  $("form#text-input-form").submit(function(event) {
    event.preventDefault();

//Input initial text & transformation values
    var inputtedText = $("textarea#text-to-change").val();
    var transformationValues = $("input#tranformation-values").val().split(","); //Split values by comma separations

//Create array to output tranformed text for each transform
    outputtedText = inputtedText.split(''); //Split text inputted by character

//Create new transformed text object
    var newTransformedText = new TransformedText (outputtedText);

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
