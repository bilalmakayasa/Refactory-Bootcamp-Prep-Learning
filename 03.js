
const input = 'bu ina harus yakin';
const decrypt = ['b', 'a', 'h', 'a', 'y', 'a'];
let resultArray = [];
function encryption (){
let enkripsi1 = input.split('');
let enkripsi2 = enkripsi1.push()
console.log(enkripsi2)
}

function decryption(){
for (let i = 0; i < input.length; i++) { 

  for (let j = 0; j <decrypt.length; j++){
   
  if (input [i] === decrypt [j] ){
    resultArray.push(input[i])
  }

}
}
console.log(resultArray.join('').toUpperCase());
}
console.log(input)
encryption(input)
decryption(input)