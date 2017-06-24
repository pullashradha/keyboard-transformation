$(document).ready(function() {
  $("form#text-form").submit(function(event) {
    event.preventDefault();

//Create keyboard row arrays
    var row1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var row2 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
    var row3 = ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";"];
    var row4 = ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"];
    var linearShiftRows = row1.concat(row2).concat(row3).concat(row4); //Combine all rows for linear shift function

//Input initial text & linear shift value
    var inputtedText = $("textarea#text-to-change").val().split(''); //Split text input by character
    var linearShiftValue = parseInt($("input#linear-shift").val()); //Input value for linear shift
    var outputtedText = [];

//Horizontal Flip
    // for (var i = 0; i < inputtedText.length; i ++)
    // {
    //   //Find which array character is in
    //   if ($.inArray(inputtedText[i], row1) != -1) {   //inArray returns -1 if value is not in array
    //     //Find place value of character in array
    //     var charactersPlaceInArray = row1.indexOf(inputtedText[i], row1);
    //     outputtedText.push(row1[(row1.length - 1) - charactersPlaceInArray]);
    //   } else if ($.inArray(inputtedText[i], row2) != -1) {
    //     var charactersPlaceInArray = row2.indexOf(inputtedText[i], row2);
    //     outputtedText.push(row2[(row2.length - 1) - charactersPlaceInArray]);
    //   } else if ($.inArray(inputtedText[i], row3) != -1) {
    //     var charactersPlaceInArray = row3.indexOf(inputtedText[i], row3);
    //     outputtedText.push(row3[(row3.length - 1) - charactersPlaceInArray]);
    //   } else if ($.inArray(inputtedText[i], row4) != -1) {
    //     var charactersPlaceInArray = row4.indexOf(inputtedText[i], row4);
    //     outputtedText.push(row4[(row4.length - 1) - charactersPlaceInArray]);
    //   } else {
    //     outputtedText.push(inputtedText[i]);
    //   }
    // }

//Vertical Flip
  // for (var i = 0; i < inputtedText.length; i ++)
  // {
  //   if ($.inArray(inputtedText[i], row1) != -1) {
  //     var charactersPlaceInArray = row1.indexOf(inputtedText[i], row1);
  //     outputtedText.push(row4[charactersPlaceInArray]);
  //   } else if ($.inArray(inputtedText[i], row2) != -1) {
  //     var charactersPlaceInArray = row2.indexOf(inputtedText[i], row2);
  //     outputtedText.push(row3[charactersPlaceInArray]);
  //   } else if ($.inArray(inputtedText[i], row3) != -1) {
  //     var charactersPlaceInArray = row3.indexOf(inputtedText[i], row3);
  //     outputtedText.push(row2[charactersPlaceInArray]);
  //   } else if ($.inArray(inputtedText[i], row4) != -1) {
  //     var charactersPlaceInArray = row4.indexOf(inputtedText[i], row4);
  //     outputtedText.push(row1[charactersPlaceInArray]);
  //   } else {
  //     outputtedText.push(inputtedText[i]);
  //   }
  // }

//Linear Shift
  for (var i = 0; i < inputtedText.length; i ++)
  {
    if ($.inArray(inputtedText[i], linearShiftRows) != -1) {
      var charactersPlaceInArray = linearShiftRows.indexOf(inputtedText[i], linearShiftRows);
      outputtedText.push(linearShiftRows[charactersPlaceInArray + linearShiftValue]);
    }
  }

    $("#output-text").text(outputtedText);
  });
});
