// Object

//? 1. Object Literal
// ! + Simple, Untuk Object yang sedikit,
// ! - Memakan banyak resource, tidak efektif u/ object yang banyak

// let mahasiswa = {
//     nama: 'Rian Oktio MP',
//     energi: 10,
//     makan: function(porsi){
//         this.energi += porsi;
//         console.log(`Hallo ${this.nama}, Selamat makan!`);
//     }
// }

// TODO Kalo bikin instansiasi object berikut bagaimana ? 
// TODO Problemnya namanya ga boleh sama (mahasiswa)
// TODO Solusinya membedakan variabelnya 

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
// ! + Membuat template 1 kali, tinggal membuat objectnya berulang-ulang
// ! - Dibelakang layar, setiap method yang dibuat pada masing2 object - duplikasi 

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

// ! Solusinya bisa sebagai berikut:
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
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;
//     mahasiswa.makan = methodMahasiswa.makan;
//     mahasiswa.main = methodMahasiswa.main;
//     mahasiswa.tidur = methodMahasiswa.tidur;
//     return mahasiswa;
// }

// let rian = Mahasiswa('Rian Oktio MP', 10) // Objectnya
// let ulvi = Mahasiswa('Ulvi Zasvia', 10) // Objectnya

// ! Problemnya: jika dibikin method baru, harus mendaftarkan 2 tempat, dimethod dan di blueprintnya

//? Object.Create()
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

// ! Problemnya: yang dibutuhkan sebenarnya hanya mahasiswa, tidak 2 object lain, SOLUSINYA MENGGUNAKAN PROTOTYPE


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