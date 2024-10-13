//Beau Fleming


var height;

//some code reused from mario2
//print function to print the pyramid in the console.
function printPyramid() {
    var rowStr = '';
    //get user input
    height = document.getElementById('height').value;

    for (let i = 1; i <= height; i++) {
        console.log(".".repeat(height - i) + "#".repeat(i) + "#");

        //create the rows and the total string
        let row = (".".repeat(height - i) + "#".repeat(i) + "#");
        rowStr += row + "<br>";
    }

    //print to document and console
    document.getElementById('pyramid').innerHTML = rowStr;
    console.log(rowStr);
};
