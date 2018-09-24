function isPalindrome(teks)
{ 
    let splitTeks = teks.split('');
    let reverseTeksArray = splitTeks.reverse();
    let joinTeksArray = reverseTeksArray.join('') 
    console.log(joinTeksArray)
}

isPalindrome('test')