const prompt = require('prompt-sync')();

let produk = [
    { nama: 'Monitor', harga: 15000000, stok: 10 },
    { nama: 'Chipset', harga: 8000000, stok: 25 },
    { nama: 'Mouse', harga: 5000000, stok: 0 },
    { nama: 'VGA', harga: 3000000, stok: 0 }
];
console.log('\Daftar Produk:');
produk.forEach (brng => {
    console.log(`${brng.nama} - Nilai : ${brng.harga} - Stock : ${brng.stok}`);

// array baru berisi nama mahasiswa (map)
});
let daftarProduk =produk.map(brng => brng.nama);
console.log('\nDaftar Nama Mahasiswa:', daftarProduk);

//  M
let urutProduk = [ ...produk].sort((a,b) => b.harga - a.harga);
console.log('\nDaftar Harga Produk dari Termahal -> Termurah:');
urutProduk.forEach(brng => console.log(`${brng.nama} - Nilai : ${brng.harga} - Stock : ${brng.stok}`));

//daftar mahasiswa dengan status lulus/tidak lulus (forEach)

console.log('\Daftar Stok :');
produk.forEach (brng => {
    let status = brng.stok >= 1 ? ' Ada' : 'Habis';
    console.log(`${brng.nama} - Stok : ${brng.stok} - ${status}`);
});
 // Mencari mahasiswa berdasarkan nama (find)

let cariNama = prompt('Masukkan nama barang: ');
let hasilCari = produk.find(brng => brng.nama.toLowerCase() === cariNama.toLowerCase());

// if (hasilCari) {
//     console.log(`Mahasiswa ditemukan: ${hasilCari.nama} - Nilai : ${hasilCari.nilai} - ${hasilCari.nilai >= 80 ? 'Lulus' : 'Tidak Lulus'}`);
// } else {
//     console.log('Mahasiswa tidak ditemukan.');
// }

// while (true) {
//     let cariNama = prompt('Masukkan nama mahasiswa yang dicari (atau ketik "keluar" untuk selesai): ');
//     if (cariNama.toLowerCase() === 'keluar') {
//         console.log('Pencarian selesai.');
//         break;
//     }
//     let hasilCari = mahasiswa.find(mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase());
//     if (hasilCari) {
//         console.log(`Mahasiswa ditemukan: ${hasilCari.nama} - Nilai : ${hasilCari.nilai} - ${hasilCari.nilai >= 70 ? 'Lulus' : 'Tidak Lulus'}`);
//     } else {
//         console.log('Mahasiswa tidak ditemukan.');
//     }
// }
