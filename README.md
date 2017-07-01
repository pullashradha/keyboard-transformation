# Keyboard Transformation

#### By Shradha Pulla , 06/23/2017

## Description

The goal is to write a program that performs a simple encoding of a large volume of text. Part of the application is a set of 3 character transform functions. These transforms apply to a 4 row x 10 column section of keys on a standard qwerty keyboard. The 4 rows start with 1, q, a, z and extend to 0, p, ;, /, respectively. There are 3 types transforms that can be specified:

Horizontal Flip: This transformation will flip all rows of the keyboard horizontally (e.g., the 1 will swap with the 0, the 2 with the 9, etc.)

Vertical Flip: This transformation will flip all columns of the keyboard vertically (e.g., the 1 will swap with the z, the q with the a, the 2 with the x, etc.)

Shift: This transformation should take in an integer N and perform a linear shift of the keyboard. Each key should shift N places to its right if N > 0 (and likewise to the left if N < 0). If a key would move past it's current row then it should shift into the row below, and so on. So for example, for N = 5, the last five keys (nm,./ would move into the first 5 places of the top row, the 12345 would move 5 places to the right, 67890 would move to the start of the 2nd row, and so on).

The transforms can be chained. For example, we might call your program and specify: horizontal flip (H) vertical flip (V) horizontal flip (H) shift by 5 (5) vertical flip (V) shift by -12 (-12). The input for this would be H,V,H,5,V,-12. In that case, each transform would be applied to the output of the previous transform.  

Horizontal flips are encoded by an H, vertical by a V, and shifts by an integer.

## Setup/Installation Requirements

This program can only be accessed on a computer with Git and Atom software globally installed.

* Clone this repository
* Navigate to repository file in Terminal
* Type the following into the Command Line to open the program in the default browser: "Open index.html"

## Known Bugs

No known bugs.

## Specifications

The program should... | Example Input | Example Output
----- | ----- | -----
Input a character and horizontally flip it across the keyboard row. | 1 | 0
Input a character and vertically flip it across rows. | 1 | z
Input a character and shift/linearly translate position. | 1 - with shift +5 | 6
Run more than one function in a row using the results of the previous function | 1 - with H, V, 5 | 5
Output text in same formatting (ex. keep initial whitespace & paragraph indents) as inputted text. | I like dogs - with H, V, 5 | k ukic djaf7

## Future Features

HTML | CSS | JavaScript | MongoDB
----- | ----- | ----- | -----
--- | --- | --- | Connect to MongoDB for CRUD

## Support and Contact Details

Contact Shradha Pulla at pullashradha@gmail.com for support in running this program.

## Technologies Used

* HTML
* CSS
* Bootstrap
* jQuery
* JavaScript
* MongoDB

## Links

Git Hub Repository: https://github.com/pullashradha/keyboard-transformation

## License

*This software is licensed under the GPL license.*

Copyright (c) 2017 Shradha Pulla
