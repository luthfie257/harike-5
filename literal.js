let mhs1 ={
    nama:'anisa',
    umur:20,
    hobi : function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat menikmati hobi anda!` )
    }
}
let mhs2 ={
    nama:'budi',
    umur:22,
    hobi : function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Halo ${this.nama}, selamat menikmati hobi anda!` )
    }
}
mhs1.hobi(5);
mhs2.hobi(10);
console.log(mhs1);
console.log(mhs2);