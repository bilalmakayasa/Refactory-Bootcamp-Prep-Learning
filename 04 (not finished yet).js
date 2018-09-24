let daftarBelanja = {
    kodeProduk : ['01', '02', '03'],
    namaProduk:['jeruk', 'apel', 'mangga'],
    harga: [1000, 2000, 3000],
    }

   
    function cart (kode_produk){
        let indeks = daftarBelanja.kodeProduk.indexOf(kode_produk);
        console.log('kode produk: ' + daftarBelanja.kodeProduk[indeks])
        console.log('nama produk: ' + daftarBelanja.namaProduk[indeks])
        console.log('harga produk: ' + daftarBelanja.harga[indeks])
    }
//function tambahItemKeCart (a, b, c, d) {

    //let hargaBarang = [a,b,c,d,e];
    //let totalHarga = hargaBarang.reduce((e, f)) =>
  //  return e +f
   // })
   // console.log(totalHarga)

//tambahItemKeCart('01','02')*/
cart('01');
    
