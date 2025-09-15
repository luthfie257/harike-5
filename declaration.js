function Mhs(nama, energi){
    let mhs = {};
    mhs.nama = nama;
    mhs.energi = energi;

    mhs.makan = function(porsi){
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan!` )
    }
    mhs.main = function(jam){
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat bermain!` )
    }
    return mhs;
}
let mhs1 = Mhs('anisa', 20);
let mhs2 = Mhs('budi', 22);
mhs1.makan(5);
mhs2.main(10);
