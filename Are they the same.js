// Are they the "same" ?

//     Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) 
// that checks whether the two arrays have the "same" elements, with the
//  same multiplicities(the multiplicity of a member is the number of
//      times it appears). "Same" means, here, that the elements in b 
//      are the elements in a squared, regardless of the order.

//     Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]

// a = [121, 144, 19, 161, 19, 144, 19, 11] 
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]



function comp(array1, array2) {
    if (array1 === null || array2 === null) return false;
    for (let i = 0; i < array2.length; i++) {
        const idxA1 = array1.indexOf(Math.sqrt(array2[i]))
        if (idxA1 === -1) return false;
        array1[idxA1] = null;
    }
    return true;
}
