// the functions return the sum of a and b
//@param a: number
//@parama b: number (optional)


function add (a, b) {
    if (arguments.length < 2) {
        return "Not enough params!";
    }
    if (arguments.length > 2) {
        return "Too much params!";
    }
    if( typeof(a) != "number" || typeof(b) != "number" ) {
     return "add() can only add two numbers!"
    }
    return a + b;
}
