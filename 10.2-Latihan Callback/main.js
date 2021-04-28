$('.search-button').on('click', function (){
    
    $.ajax({
        url: `http://www.omdbapi.com/?apikey=9f206eb8&s=${$('.input-keyword').val()}`,
        success: (res) => {
            const movies = res.Search
            let cards = ''
            movies.forEach(movie => {
                cards += showMovies(movie)
            });
            $('.movie-container').html(cards)
    
    
            // Ketika tombol detail di klik
            $('.modal-movie-detail-button').on('click', function(){
                $.ajax({
                    url: `http://www.omdbapi.com/?apikey=9f206eb8&i=${$(this).data('imdbid')}`,
                    success: movie => {
                        const movieDetail = showDetailMovie(movie)
    
                        $('.modal-body').html(movieDetail)
                    },
                    error: (err) => {
                        console.log(err.responseText);
                    }
                })
            })
        },
        error: (err) => {
            console.log(err.responseText);
        }
    })
})


function showMovies(dataMovies){
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

function showDetailMovie(dataDetailMovie){
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