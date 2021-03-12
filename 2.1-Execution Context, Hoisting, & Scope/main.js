// ? 2 Fase pada Execution Context
// !1. Creation

// contoh 1
// console.log(nama); // Hasil console => ReferenceError => nama tidak didefinisi

// contoh 2
// console.log(nama);
// var nama = 'Rian Oktio Mersa Putra'; // Hasil console => Undifined

// ! Saat program dijalankan terjadi:
// ! Creation phase pada Global context:
// ! - Mencari var
// ! - Mencari function
// ! - var => undefined
// ! - function => fn()
// ! - mendefinisikan window = global object
// ! - this = window
// ! istilahnya: HOISTING


// var nama = 'Rian';
// var umur = 25;

// console.log(sayHello);

// function sayHello() {
//     return `Halo ${nama}, saya ${umur} tahun.`
// }

// ! Function membuat local execution context
// ! yang didalamnya terdapat create dan execution phase
// ! window
// ! arguments
// ! hpisting

// var nama = 'Rian'
// var username = '@fueremi'

// function cetakURL(username){
//     var instagramURL = 'https://instagram.com/'
//     return instagramURL + username;
// }

// console.log(cetakURL(username));

// ? Langkah-langkahnya:
// TODO 1. akan membuat nama, dan username dengan undefined
// TODO 2. akan membuat function cetakURL
// TODO 3. melakukan assign nilai nama, dan username
// TODO 4. akan mengeksekusi function cetakURL
// TODO 5. membuat local execution context
// TODO 6. membuat username = @fueremi, membuat instagramURL undefined
// TODO 7. melakukan assign instagramURL 
// TODO 8. return dari functino
// TODO 9. kembali ke global execution context

// ? Contoh lainnya
// function a(){
//     console.log('Ini a');

//     function b(){
//         console.log('Ini b');
//         function c(){
//             console.log('Ini c');
//         }
//         c();
//     }
//     b();
// }
// a();

// ? Langkah-langkahnya:
// TODO 1. akan membuat function a
// TODO 2. melakukan eksekusi function a, tampilkan hasil a
// TODO 3. hoisting, akan membuat function b
// TODO 3. melakukan eksekusi function b, tampilkan hasil b
// TODO 4. akan membuat function c
// TODO 5. melakukan eksekusi ke function c, tampilkan hasil c
// TODO 6. C hilang dari eksekusi
// TODO 7. B hilang dari eksekusi
// TODO 8. A hilang dari eksekusi

// ? Contoh lainnya
// var nama = 'Rian'
// var username = '@fueremi'

// function cetakURL(username){
//     var instagramURL = 'https://instagram.com/'
//     return instagramURL + username;
// }

// console.log(cetakURL('@zasvia')); // Hasilnya menjadi @zasvia - local scope!

// ? Bagaimana dengan ini 
// var nama = 'Rian'
// var username = '@fueremi'

// function cetakURL(){
//     console.log(arguments);
//     var instagramURL = 'https://instagram.com/'
//     return instagramURL + username;
// }

// console.log(cetakURL('@zasvia')); // hasilnya tetap @fueremi
// paramter disimpan ke arguments

// 2. Execution phase

// ! Menjalankan program baris per baris 
// ! http://pythontutor.com/javascript.html

// ? LATIHAN

// function satu(){
//     var nama = 'Rian'
//     console.log(nama);
// }

// function dua(){
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'Ulvi'
// satu()
// dua('Rian')
// console.log(nama);

// ! HASILNYA:
// ! 1. Akan creation context (hoisting):
// ! 1.1 function satu()
// ! 1.2 function dua()
// ! 1.3 var nama = undefined
// ! 2. Akan melakukan execution context:
// ! 2.1. console.log(nama), nama => undefined
// ! 2.2. assign nama = Ulvi
// ! 2.3. menjalankan satu(), local creation context:
// ! 2.3.1 assign nama = Rian
// ! 2.3.2. melakukan execution context
// ! 2.3.3. menjalankan console.log(nama), nama => Rian
// ! 2.4. menjalankan dua(), local creation context:
// ! 2.4.1. assign arguments = Rian
// ! 2.4.2. menjalankan console.log(nama), nama => Ulvi (Scope)
// ! 2.5 menajalankan console.log(nama),nama => Ulvi
// ! Hasilnya, undefined, Rian, Ulvi, Ulvi
