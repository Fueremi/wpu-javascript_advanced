// Object

//? 1. Object Literal

// let mahasiswa = {
//     nama: 'Rian Oktio MP',
//     energi: 10,
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, Selamat makan!`);
//     }
// }

// Kalo bikin instansiasi object berikut bagaimana ? 
// Problemnya namanya ga boleh sama (mahasiswa)
// Solusinya membedakan variabelnya 

// let mahasiswa1 = {
//     nama: 'Rian Oktio MP',
//     energi: 10,
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, Selamat makan!`);
//     }
// }
// let mahasiswa2 = {
//     nama: 'Ulvi Zasvia',
//     energi: 10,
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, Selamat makan!`);
//     }
// }


//? 2. Function Declaration
// function Mahasiswa(nama, energi){ // Blueprintnya
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain!`);
//     }

//     return mahasiswa;
// }

// let rian = Mahasiswa('Rian Oktio MP', 10) // Objectnya
// let ulvi = Mahasiswa('Ulvi Zasvia', 10) // Objectnya

//? 3. Constructor Function
// function Mahasiswa(nama, energi){ // Blueprintnya
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, Selamat makan!`);
//     }

//     this.main = function(jam){
//         this.energi -= jam;
//         console.log(`Halo ${this.nama}, Selamat bermain!`);
//     }
// }

// let rian = new Mahasiswa('Rian Oktio MP', 10)

// ! Memudahkan untuk pembuatan protoype