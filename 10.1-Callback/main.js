// ! Callback

// ? Synchronous Callback
// function halo(nama){
//     alert(`Halo ${nama}`)
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukkan Nama: ')
//     callback(nama);
// }

// tampilkanPesan(nama => alert(`Halo ${nama}`))

const mhs = [
    {
        'nama': 'Rian Oktio Mersa Putra',
        'email': 'rianoktiomersaputra4@gmail.com',
        'jurusan': 'Teknik Informatika',
        'idDosenWali': 1
    },
    {
        'nama': 'Ulvi Zasvia',
        'email': 'zasvia@gmail.com',
        'jurusan': 'Farmasi',
        'idDosenWali': 2
    }
]

// ? Synchronous Callback
// console.log('Mulai');
// mhs.forEach(m => {
//     for (let i = 0; i < 100000000; i++) {
//         let date = new Date();
//     }
//     console.log(m.nama)
// })
// console.log('Selesai');

// ? Asynchronous Callback 
// function getDataMahasiswa(url, success, error){
//     let xhr = new XMLHttpRequest()

//     xhr.onreadystatechange = function() {
//         if ( xhr.readyState === 4 ){
//             if ( xhr.status === 200 ){
//                 success(xhr.response)
//             } else if ( xhr.status === 404 ){
//                 error()
//             }
//         }
//     }

//     xhr.open('get', url)
//     xhr.send()
// }

// console.log('Mulai')
// getDataMahasiswa('data/mahasiswa.json', 
//     result => { console.log(JSON.parse(result)) }, 
//     () => {})
// console.log('Selesai')

// ? Menggunakan JQuery
// console.log('Mulai');
// $.ajax({
//     url: 'datas/mahasiswa.json',
//     success: (mhs) => {
//         console.log(mhs);
//     },
//     error: (err) => {
//         console.error(err);
//     }
// })
// console.log('Selesai');