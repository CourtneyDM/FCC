function palindrome( str ) {
    // Good luck!
    str = str.toLowerCase();
    var newString = "";
    var expression = /[-().,|/\_: ]/g;
    var re = '';
    str = str.replace( expression, re );


    for ( var i = str.length - 1; i >= 0; i-- ) {
        newString += str[ i ];
    }
    console.log( newString );
    if ( newString === str ) {
        return true;
    }
    else return false;
}

console.log( palindrome( "A man a plan a canal Panama" ) );