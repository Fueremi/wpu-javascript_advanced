// TODO 1. Ambil semua element video
const listVideos = Array.from(document.querySelectorAll('[data-duration]'))

// TODO 2. Pilih hanya yang 'JAVASCRIPT LANJUTAN'
const listJL = listVideos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// TODO 3. ambil durasi masing2 video
    .map(item => item.dataset.duration)

// TODO 4. ubah durasi menjadi int, ubah menit menjadi detik
    .map(waktu => {
        // 10:30 -> [10, 30] split
        const parts = waktu.split(':')
        return (+parts[0] * 60) + +parts[1]
    })

// TODO 5. jumlah semua detik
    .reduce((acc, cur) => acc + cur) 

// TODO 6. ubah format jadi jam, menit, detik
    const jam = Math.floor(listJL / 3600)
    const menit = Math.floor((listJL % 3600) / 60)
    const detik = Math.floor(((listJL % 3600) % 60))

// TODO 7. simpan di DOM
    const jumlahVideo = document.querySelector('.jumlah-video')
    jumlahVideo.textContent = listVideos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length

    const durasi = document.querySelector('.total-durasi')
    durasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`