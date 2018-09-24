
function isPalindrome(teks)
{
		let splitTeks = teks.split('');
    let reverseTeksArray = splitTeks.reverse();
    let joinTeksArray = reverseTeksArray.join('')
 		teks === joinTeksArray
	  if(teks === joinTeksArray){
      console.log(teks + '(ini adalah polindrom)')
      
    }else{
    console.log('ini bukan palindrome')}
}
isPalindrome('apa')