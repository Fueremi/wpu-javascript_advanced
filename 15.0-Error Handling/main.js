const searchButton = document.querySelector('.search-button')
searchButton.addEventListener('click', async function () {
    try {
        const inputKeyword = document.querySelector('.input-keyword')
        const movies = await getMovies(inputKeyword.value);
        updateUI(movies)
    } catch(err){
        alert(err)
    }
})

// Event binding | Ketika event listerner dilakukan sebelum elemen muncul
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-movie-detail-button')) {
        const imdbid = e.target.dataset.imdbid
        const movieDetail = await getMovieDetail(imdbid)
        updateUIDetail(movieDetail)
    }
})

function getMovieDetail(imdbid) {
    return fetch(`http://www.omdbapi.com/?apikey=9f206eb8&i=${imdbid}`)
        .then(res => res.json())
        .then(res => res)
}

function updateUIDetail(movie){
    const movieDetail = showDetailMovie(movie)
    const modalBody = document.querySelector('.modal-body')
    modalBody.innerHTML = movieDetail
}

function getMovies(keyword) {
    return fetch(`http://www.omdbapi.com/?apikey=9f206eb8&s=${keyword}`)
        .then(res => {
            if ( !res.ok ){
                throw new Error(res.statusText)
            }
            return res.json()
        })
        .then(res => {
            if( res.Response === "False"){
                throw new Error(res.Error)
            }
            return res.Search
        })
}

function updateUI(movies) {
    let cards = ''
    movies.forEach(movie => {
        cards += showMovies(movie)
    });
    const movieContainer = document.querySelector('.movie-container')
    movieContainer.innerHTML = cards
}

function showMovies(dataMovies) {
    return `
    <div class="col-md-3 my-3">
        <div class="card" style="width: 18rem">
            <img class="card-img-top" src="${dataMovies.Poster}" alt="Card image cap" height="400px"/>
            <div class="card-body">
                <h5 class="card-title">${dataMovies.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${dataMovies.Year}</h6>
                <a href="#" class="btn btn-primary modal-movie-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${dataMovies.imdbID}">Show Details</a>
            </div>
        </div>
    </div>`
}

function showDetailMovie(dataDetailMovie) {
    return `
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3">
                <img src="${dataDetailMovie.Poster}" alt="" class="img-fluid">
            </div>
            <div class="col-md">
                <ul class="list-group">
                    <li class="list-group-item"><h4>${dataDetailMovie.Title} - ${dataDetailMovie.Year}</h4></li>
                    <li class="list-group-item"><strong>Director : </strong> ${dataDetailMovie.Director}</li>
                    <li class="list-group-item"><strong>Casts : </strong> ${dataDetailMovie.Actors}</li>
                    <li class="list-group-item"><strong>Writer : </strong> ${dataDetailMovie.Writer}</li>
                    <li class="list-group-item"><strong>Plot: </strong> ${dataDetailMovie.Plot}</li>
                </ul>
            </div>
        </div>
    </div>
    `
}