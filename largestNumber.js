// My code to solve the largest number challenge on FreeCodeCamp.com

function largestOfFour( arr ) {
    // You can do this!
    var current, largest;
    var newArray = [];

    for ( var i = 0; i < arr.length; i++ ) {
        for ( var j = 0; j < arr[ i ].length - 1; j++ ) {
            largest = arr[ i ][ j ];
            current = arr[ i ][ j + 1 ];
            if ( current > largest ) {
                largest = current;
            }
            else j++;
        }
        newArray.push( largest );
    }
    return newArray;
}

largestOfFour( [ [ 4, 5, 1, 3 ], [ 13, 27, 18, 26 ], [ 32, 35, 37, 39 ], [ 100000, 1001, 857, 1 ] ] );

/* Researched Results */

function largestOfFour( arr ) {
    var results = [];
    for ( var n = 0; n < arr.length; n++ ) {
        var largestNumber = arr[ n ][ 0 ];
        for ( var sb = 1; sb < arr[ n ].length; sb++ ) {
            if ( arr[ n ][ sb ] > largestNumber ) {
                largestNumber = arr[ n ][ sb ];
            }
        }
        results[ n ] = largestNumber;
    }
    return results;
}

console.log( largestOfFour( [ [ 4, 5, 1, 3 ], [ 13, 27, 18, 26 ], [ 32, 35, 37, 39 ], [ 1000000, 1001, 857, 1 ] ] ) );