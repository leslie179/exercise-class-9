/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */




/**
 * Question 5 - concat two different arrays by using .concat() method
 * create an array with different colors blue, red, green. Initialise it to penOne.
 * create an array with different colors black, white, yellow. Initialise it to penOne.
 * Then combine two arrays with penOne first then penTwo second with concat. 
 */
var penOne = ["blue", "red", "green"];
var penTwo = ["black", "white", "yellow"];

var allPen = penOne.concat(penTwo);

console.log(allPen); //[ 'blue', 'red', 'green', 'black', 'white', 'yellow' ]


/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * Initialise the variable `yummy` to a 2-by-4 array containing the values below:
 * 
 *          column[0]   column[1]            column[2]       column[3]       column[4]
 * Row 1    food        pork                 1               not vegan       in stock
 * Row 2    food        tofu                 2               vegan           in stock
 * then use console.table() to showcase the information in a table.
 * Then based on the values stored in the yummy 2-by-4, console log out the following sentence (using containing):
 * I love _chasiu_ it's made with _pork_. It's _1_ dollar. It's _not vegan_ and it's _in stock_.*/

 var yummy = [
    ["chasiu", "pork", "1", "not vegan", "in stock" ],
    ["food", "tofu", "2", "vegan", "in stock" ],
    ]

console.table(yummy);
console.log ("I love " + yummy[0][0] + " it's made with " + yummy[0][1] + ". It's " + yummy[0][2] + " dollar. It's " + yummy[0][3] + " and it's " + yummy[0][4] + ".");
//I love chasiu it's made with pork. It's 1 dollar. It's not vegan and it's in stock.