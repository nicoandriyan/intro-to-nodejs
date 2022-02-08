// buat buffer baru dgn kapasitas 100 character menggunakan allocUnsafe
const buf = Buffer.allocUnsafe(100);

// tulis suatu string ke dalam buffer menggunakan write
const panjang = buf.write('hallo saya ingin belajar web');

// yang tampil panjang karakternya
console.log(panjang);