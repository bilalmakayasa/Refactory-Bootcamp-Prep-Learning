
const input = 'bu ina harus yakin';
const decrypt = ['b', 'a', 'h', 'a', 'y', 'a'];
let resultArray = [];

let enkripsi1 = input.split('');
let enkripsi2 = enkripsi1.push()
console.log('teks terenkripsi:' + enkripsi2)

for (let i = 0; i < input.length; i++) { 

  for (let j = 0; j <decrypt.length; j++){
   
  if (input [i] === decrypt [j] ){
    resultArray.push(input[i])
  }

}
}
console.log(resultArray.join('').toUpperCase());