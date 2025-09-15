// function mhsData (nama,nim,jurusan,umur){
// var mhs = {};
// mhs,nama = nama;
// mhs.nim = nim;
// mhs.jurusan = jurusan;
// mhs.umur = umur;

// var mhs1= mhsData('Tika', 'L200180158', 'Teknik Informatika', 20);
// var mhs2= mhsData('Lina', 'L200180159', 'Teknik Industri', 21);
// var mhs3= mhsData('Rina', 'L200180160', 'Teknik Sipil', 22);   

// console.log(mhs1);}

const prompt = require('prompt-sync')();

let mahasiswa =[
    {nama : 'budi', nilai : 85},
    {nama : 'siti', nilai : 90},
    {nama : 'ani', nilai : 78},
    {nama : 'lina', nilai : 68}
];
// data mahasiswa ditampilkan menggunakan forEach
console.log('\Daftar Mahasiswa:');
mahasiswa.forEach (mhs => {
    console.log(`${mhs.nama} - Nilai : ${mhs.nilai}`);

// array baru berisi nama mahasiswa (map)
});
let daftarNama =mahasiswa.map(mhs => mhs.nama);
console.log('\nDaftar Nama Mahasiswa:', daftarNama);

//  M
let urutNilai = [ ...mahasiswa].sort((a,b) => b.nilai - a.nilai);
console.log('\nDaftar nilai mahasiswa dari tertinggi -> terendah:');
urutNilai.forEach(mhs => console.log(`${mhs.nama} - Nilai : ${mhs.nilai}`));

//daftar mahasiswa dengan status lulus/tidak lulus (forEach)

console.log('\Daftar Mahasiswa:');
mahasiswa.forEach (mhs => {
    let status = mhs.nilai >= 80 ? 'Lulus' : 'Tidak Lulus';
    console.log(`${mhs.nama} - Nilai : ${mhs.nilai} - ${status}`);
});
 // Mencari mahasiswa berdasarkan nama (find)

let cariNama = prompt('Masukkan nama mahasiswa yang dicari: ');
let hasilCari = mahasiswa.find(mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase());

// if (hasilCari) {
//     console.log(`Mahasiswa ditemukan: ${hasilCari.nama} - Nilai : ${hasilCari.nilai} - ${hasilCari.nilai >= 80 ? 'Lulus' : 'Tidak Lulus'}`);
// } else {
//     console.log('Mahasiswa tidak ditemukan.');
// }

while (true) {
    let cariNama = prompt('Masukkan nama mahasiswa yang dicari (atau ketik "keluar" untuk selesai): ');
    if (cariNama.toLowerCase() === 'keluar') {
        console.log('Pencarian selesai.');
        break;
    }
    let hasilCari = mahasiswa.find(mhs => mhs.nama.toLowerCase() === cariNama.toLowerCase());
    if (hasilCari) {
        console.log(`Mahasiswa ditemukan: ${hasilCari.nama} - Nilai : ${hasilCari.nilai} - ${hasilCari.nilai >= 80 ? 'Lulus' : 'Tidak Lulus'}`);
    } else {
        console.log('Mahasiswa tidak ditemukan.');
    }
}
