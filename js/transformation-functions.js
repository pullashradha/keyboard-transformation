//Create keyboard row arrays
var row1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var row2 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var row3 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
var row4 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
//Combine all rows for linear shift function
var allRows = row1.concat(row2).concat(row3).concat(row4);

//Create final text output array
var outputtedText = [];

//Create place in array variable
var charactersPlaceInArray;

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
      charactersPlaceInArray = row1.indexOf(outputtedText[i], row1);
      this.horizontalFlipValue.push(row1[(row1.length - 1) - charactersPlaceInArray]);
    } else if ($.inArray(outputtedText[i], row2) != -1) {
      charactersPlaceInArray = row2.indexOf(outputtedText[i], row2);
      this.horizontalFlipValue.push(row2[(row2.length - 1) - charactersPlaceInArray]);
    } else if ($.inArray(outputtedText[i], row3) != -1) {
      charactersPlaceInArray = row3.indexOf(outputtedText[i], row3);
      this.horizontalFlipValue.push(row3[(row3.length - 1) - charactersPlaceInArray]);
    } else if ($.inArray(outputtedText[i], row4) != -1) {
      charactersPlaceInArray = row4.indexOf(outputtedText[i], row4);
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
      charactersPlaceInArray = row1.indexOf(outputtedText[i], row1);
      this.verticalFlipValue.push(row4[charactersPlaceInArray]);
    } else if ($.inArray(outputtedText[i], row2) != -1) {
      charactersPlaceInArray = row2.indexOf(outputtedText[i], row2);
      this.verticalFlipValue.push(row3[charactersPlaceInArray]);
    } else if ($.inArray(outputtedText[i], row3) != -1) {
      charactersPlaceInArray = row3.indexOf(outputtedText[i], row3);
      this.verticalFlipValue.push(row2[charactersPlaceInArray]);
    } else if ($.inArray(outputtedText[i], row4) != -1) {
      charactersPlaceInArray = row4.indexOf(outputtedText[i], row4);
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
      charactersPlaceInArray = allRows.indexOf(outputtedText[i], allRows);
      if (linearShiftValue < 0 || linearShiftValue === 0) {
        if ((linearShiftValue % 40) === 0) { //Linear shift to same character as inputted
          this.linearShiftValue.push(allRows[charactersPlaceInArray]);
        } else {
          //Find the remainder value after dividing by 40
          if ((charactersPlaceInArray + (linearShiftValue % 40)) < 0) {
            this.linearShiftValue.push(allRows[allRows.length + (charactersPlaceInArray + (linearShiftValue % 40))]);
          } else {
            this.linearShiftValue.push(allRows[charactersPlaceInArray + (linearShiftValue % 40)]);
          }
        }
      } else if (linearShiftValue > 0) {
        this.linearShiftValue.push(allRows[(charactersPlaceInArray + (linearShiftValue % 40)) % 40]);
      }
    } else {
      this.linearShiftValue.push(outputtedText[i]);
    }
  }
  outputtedText = this.linearShiftValue;
}
