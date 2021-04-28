const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

// ? Mencari angka >= 3 

// ! Metode for 
const newAngkaFor = []; // Mengganti nilai tidak bisa | Mengisi angka bisa
for (let index = 0; index < angka.length; index++) {
    if ( angka[index] >= 3){
        newAngkaFor.push(angka[index])
    }
}
console.log(`Hasil for ${newAngkaFor}`)

// ! Metode Filter
const newAngkaFilter = angka.filter(a => a >= 3)
console.log(`Hasil filter ${newAngkaFilter}`);

// ? kalikan semua angka dengan 2
// ! Metode Map
const newAngkaMap = angka.map(a => a*2)
console.log(`Hasil map ${newAngkaMap}`);

// ? jumlahkan seluruh elemen pada array
// ! Metode Reduce
const newAngkaReduce = angka.reduce((accumulator, currentValue,) => accumulator + currentValue, 5)
console.log(`Hasil reduce ${newAngkaReduce}`);

// ? cari angka > 5
// ? kalikan 3
// ? jumlahkan
// ! Method Chaining
const hasil = angka.filter(a => a > 5) // 8, 9, 9
.map(a => a * 3) // 24, 27, 27
.reduce((acc, cur) => acc + cur ) // 78
console.log(`Hasil chaining ${hasil}`);
