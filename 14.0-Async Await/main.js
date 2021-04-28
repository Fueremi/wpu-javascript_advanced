// const coba = new Promise( resolve => {
//     setTimeout(() => {
//         resolve('Selesai')
//     }, 2000)
// })
// console.log(coba);
// coba.then(() => console.log(coba))

function cobaPromise() {
    return new Promise( (resolve, reject) => {
        const waktu = 5000
        if ( waktu < 5000 ){
            setTimeout(() => {
                resolve('Selesai')
            }, waktu)
        } else {
            reject('Kelamaan!')
        }
    })
}

// const coba = cobaPromise()
// coba
//     .then(() => console.log(coba))
//     .catch(() => console.log(coba))

async function cobaAsync() {
    try {
        const coba = await cobaPromise()
        console.log(coba);
    } catch (err) {
        console.error(err)
    }
}

cobaAsync()