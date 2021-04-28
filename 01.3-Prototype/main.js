// ? Object.create()
// const methodMahasiswa = {
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     },
//     main: function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain!`);
//     },
//     tidur: function(jam){
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, Selamat tidur!`);
//     }
// }

// function Mahasiswa(nama, energi){ // Blueprintnya
//     let mahasiswa = Object.create(methodMahasiswa); // Inherintance-like
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     return mahasiswa;
// }

// let rian = Mahasiswa('Rian Oktio MP', 10) // Objectnya

// ? Prototype
// function Mahasiswa(nama, energi){ // Blueprintnya
//     // dibelakang layar =>
//     // let this = Object.create(Mahasiswa.prototype);

//     this.nama = nama;
//     this.energi = energi;

//     // return this;
// }

// Mahasiswa.prototype.makan = function(porsi){
//     this.energi += porsi;
//     return `Hello ${this.nama}, Selamat makan!`;
// }

// Mahasiswa.prototype.main = function(jam){
//     this.energi -= jam;
//     return `Hello ${this.nama}, Selamat main!`;
// }

// Mahasiswa.prototype.tidur = function(jam){
//     this.energi += jam * 2;
//     return `Hello ${this.nama}, Selamat tidur!`;
// }

// let rian = new Mahasiswa('Rian Oktio MP', 10);

// ? Konsep ini mirip dengan konsep class-inheritance, di javascript namanya prototype-inheritance

// ? Versi Class
// class Mahasiswa {
//     constructor(nama, energi){
//         this.nama = nama;
//         this.enegeri= energi;
//     }

//     makan(porsi){
//         this.energi += porsi;
//         return `Hello ${this.nama}, Selamat makan!`;
//     }

//     main(jam){
//         this.energi -= jam;
//         return `Hello ${this.nama}, Selamat main!`;
//     }
    
//     tidur(jam){
//         this.energi += jam * 2;
//         return `Hello ${this.nama}, Selamat tidur!`;
//     }
// }

// let rian = new Mahasiswa('Rian Oktio MP', 10)

// ! Lebih mudah dibaca, lebih jelas, lebih OOP
// ! Sebenarnya dibelakang layar tetap dijalankan sebagai prototype

// ! Tipe data pada javascript semuanya memiliki prototype
// let angka = []; 
// ? Dibelakang layar 
// let angka = new Array();

// function Array(){
//     let this = Object.create(Array.prototype);
// }

// ! Inilah yang menyebabkan Array memiliki fungsi2 bawaan 
// let angka-test = [1,2,3]
// console.log(angka); // didalamnya terdapat banyak prototype