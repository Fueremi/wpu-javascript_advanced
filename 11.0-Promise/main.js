// ! Promise

// const movies = fetch('http://www.omdbapi.com/?apikey=9f206eb8&s=avengers')
//     .then(res => res.json())
//     .then(res => console.log(res))

// ? Promise adalah Object yang mempresentasikan keberhasilan / kegagalan sebuah event yang asynchronous di masa yang akan datang

// TODO janji (terpenuhi/ingkar)
// TODO states (fulfilled/rejected/pending)
// TODO callback (resolve/reject/finally)
// TODO aksi (then/catch)

// ==================================== Example 1 =====================================
// let ditepati = false
// const janji1 = new Promise((resolve, reject) => {
//     if( ditepati ){
//         resolve('Janji telah ditepati!')
//     } else {
//         reject('Ingkar janji')
//     }
// })

// janji1
//     .then(res => console.log('OK! ' + res))
//     .catch(res => console.log('NOT OK! : ' + res))

// ==================================== Example 2 =====================================
// let ditepati = true;
// const janji2 = new Promise((resolve, reject) => {
//     if (ditepati){
//         setTimeout(() => {
//             resolve('Ditepati setelah beberapa waktu!')
//         }, 2000)
//     } else {
//         setTimeout(() => {
//             reject('Tidak ditepati setelah beberapa waktu!')
//         }, 2000)
//     }
// })

// console.log('Mulai');
// console.log(janji2.then(() => console.log(janji2)))
// janji2
//     .finally(() => console.log('selesai menunggu')) //digunakan untuk animasi loading
//     .then(res => console.log('OK! ' + res))
//     .catch(res => console.log('NOT OK! : ' + res))
// console.log('Selesai');

// ==================================== Example 3 =====================================
// ? Promise.all()

// const film = new Promise( resolve => {
//     setTimeout( () => {
//         resolve([{
//             judul: 'Avengers',
//             sutradara: 'Rian Oktio MP',
//             pemeran: 'Rian, Ulvi'
//         }])
//     }, 1000)
// })

// const cuaca = new Promise( resolve => {
//     setTimeout( () => {
//         resolve([{
//             kota: 'Jakarta',
//             temp: 29,
//             kondisi: 'Berawan'
//         }])
//     }, 500)
// })

// film.then(res => console.log(res))
// cuaca.then(res => console.log(res))

// Promise.all([film, cuaca])
    // .then(res => console.log(res)) // Array of array
    // .then( res => { // Pecah array
    //     const [film, cuaca] = res
    //     console.log(film)
    //     console.log(cuaca)
    // })