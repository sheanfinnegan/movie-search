$(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').fadeOut(700)

    }, 800)
});

// tooltip
let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})
// end tooltip

// page number
let page = 1;

function getMovie() {
    $.ajax({
        url: "https://www.omdbapi.com",
        type: "get",
        dataType: "json",
        data: {
            'apikey': 'e3f6b964',
            's': $('#cariFilm').val()
        },
        success: function (result) {
            console.log(result)
            if (result.Response === 'True') {
                let movies = result.Search

                $.each(movies, function (i, data) {
                    $('#listmovies').append(`
                    <div class="col mb-5">
                        <div class="card shadow-lg border border-dark border-2" style="width: 18rem; border-radius:10px;"><img
                                src=`+ data.Poster + ` class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title fw-bold">`+ data.Title + `</h5>
                                <p class="card-text">`+ data.Year + `</p>

                                <!-- Button trigger modal -->
                                <button data-id=`+ data.imdbID + ` type="button" class="btn btn-primary see-details" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                See Details
                                </button>

                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <div class="container">
                                                    <h5 class="modal-title" id="exampleModalLabel">S | H | Film</h5>
                                                </div>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `)
                })

            } else {
                $('#page').addClass('d-none')
                $('#wholeDocument').addClass('wholeDoc')
                $('#listmovies').html(`<h1 id='eror' style="color: white; text-shadow: 1px 1px 5px black; "class="text-center">` + result.Error + `</h1>`)
            }
        }
    });
}

function getMovie2() {
    $.ajax({
        url: "https://www.omdbapi.com/",
        type: "get",
        dataType: "json",
        data: {
            'apikey': 'e3f6b964',
            's': $('#cariFilm-2').val()
        },
        success: function (result) {
            console.log(result)
            if (result.Response === 'True') {
                let movies = result.Search

                $.each(movies, function (i, data) {
                    $('#listmovies').append(`
                    <div class="col mb-5">
                    <div class="card shadow-lg border border-dark border-2" style="width: 18rem; border-radius:10px;"><img
                            src=`+ data.Poster + ` class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">`+ data.Title + `</h5>
                            <p class="card-text">`+ data.Year + `</p>

                            <!-- Button trigger modal -->
                            <button data-id=`+ data.imdbID + ` type="button" class="btn btn-primary see-details" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            See Details
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <div class="container">
                                                <h5 class="modal-title" id="exampleModalLabel">S | H | Film</h5>
                                                
                                            </div>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `)
                })

            } else {
                $('#page').addClass('d-none')
                $('#wholeDocument').addClass('wholeDoc')
                $('#listmovies').html(`<h1 id='eror' style="color: white; text-shadow: 1px 1px 5px black; "class="text-center">` + result.Error + `</h1>`)
            }
        }
    });
}

$('#btn').on('click', function () {
    $('#p-1').removeClass('col')
    $('#n-1').removeClass('col')
    $('#p-1').addClass('col-1')
    $('#n-1').addClass('col-1')
    page = 1;
    $('#btn-n').prop('disabled', false)
    $('#btn-p').prop('disabled', true)
    $('#page').removeClass('d-none')
    $('.preloader').css('display', 'unset')
    setTimeout(function () {
        $('.preloader').fadeOut(700)
    }, 950)
    $('#navbarDropdown').html('Type')
    const isiInput = $('#cariFilm')
    $('#listmovies').html('')
    getMovie();
    $('#home').addClass('d-none')
    $('#movie-list').removeClass('d-none')
    $('#wholeDocument').removeClass('wholeDoc')
    $('#title-genre').html('Result ' + '\"<h2 class="isi-title fw-bold">' + isiInput.val() + '</h2>\"')
    isiInput.val('')
    $('#listType').removeClass('d-none')
})

$('#cariFilm').on('keyup', function (e) {
    if (e.keyCode === 13) {
        $('#p-1').removeClass('col')
        $('#n-1').removeClass('col')
        $('#p-1').addClass('col-1')
        $('#n-1').addClass('col-1')
        $('#btn-n').prop('disabled', false)
        page = 1;
        $('#btn-p').prop('disabled', true)
        $('#page').removeClass('d-none')
        $('.preloader').css('display', 'unset')
        setTimeout(function () {
            $('.preloader').fadeOut(700)
        }, 950)
        $('#navbarDropdown').html('Type')
        $('#listmovies').html('')
        getMovie();
        const isiInput = $('#cariFilm')
        $('#home').addClass('d-none')
        $('#movie-list').removeClass('d-none')
        $('#wholeDocument').removeClass('wholeDoc')
        $('#title-genre').html('Result ' + '\"<h2 class="isi-title fw-bold">' + isiInput.val() + '</h2>\"')
        isiInput.val('')
        $('#listType').removeClass('d-none')
    }
})


$('#btn-2').on('click', function () {
    $('#p-1').removeClass('col')
    $('#n-1').removeClass('col')
    $('#p-1').addClass('col-1')
    $('#n-1').addClass('col-1')
    page = 1;
    $('#btn-n').prop('disabled', false)
    $('#btn-p').prop('disabled', true)
    $('#page').removeClass('d-none')
    $('.preloader').css('display', 'unset')
    setTimeout(function () {
        $('.preloader').fadeOut(700)
    }, 950)
    $('#navbarDropdown').html('Type')
    $('#listmovies').html('')
    getMovie2();
    const isiInput = $('#cariFilm-2')
    $('#home').addClass('d-none')
    $('#movie-list').removeClass('d-none')
    $('#wholeDocument').removeClass('wholeDoc')
    $('#title-genre').html('Result ' + '\"<h2 class="isi-title fw-bold">' + isiInput.val() + '</h2>\"')
    isiInput.val('')
    $('#listType').removeClass('d-none')

})

$('#cariFilm-2').on('keyup', function (e) {
    if (e.keyCode === 13) {
        $('#p-1').removeClass('col')
        $('#n-1').removeClass('col')
        $('#p-1').addClass('col-1')
        $('#n-1').addClass('col-1')
        $('#btn-n').prop('disabled', false)
        page = 1;
        $('#btn-p').prop('disabled', true)
        $('#page').removeClass('d-none')
        $('.preloader').css('display', 'unset')
        setTimeout(function () {
            $('.preloader').fadeOut(700)
        }, 950)
        const isiInput = $('#cariFilm-2')
        $('#navbarDropdown').html('Type')
        $('#listmovies').html('')
        getMovie2();
        $('#home').addClass('d-none')
        $('#movie-list').removeClass('d-none')
        $('#wholeDocument').removeClass('wholeDoc')
        $('#title-genre').html('Result ' + '\"<h2 class="isi-title fw-bold">' + isiInput.val() + '</h2>\"')
        isiInput.val('')
        $('#listType').removeClass('d-none')
    }
})

$('.logo-kecil').on('click', function () {
    $('#page').addClass('d-none')
    $('.preloader').css('display', 'unset')
    setTimeout(function () {
        $('.preloader').fadeOut(700)
    }, 950)
    $('#home').removeClass('d-none')
    $('#movie-list').addClass('d-none')
    $('#wholeDocument').addClass('wholeDoc')
    $('#listType').addClass('d-none')
})

$('#listmovies').on('click', '.see-details', function () {
    console.log($(this))
    $.ajax({
        url: "https://www.omdbapi.com",
        type: "get",
        dataType: "json",
        data: {
            'apikey': 'e3f6b964',
            'i': $(this).data('id')
        },
        success: function (movie) {
            console.log(movie)
            if (movie.Response === 'True') {
                $.each(movie, function (i, data) {
                    $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-4">
                                <img class="img-fluid mb-3" src=`+ movie.Poster + ` alt="">
                            </div>
                            <div class="col-md-8">
                                <ul class="list-group">
                                    <li class="list-group-item"><b style="font-size: 16px;">`+ movie.Title + ` (` + movie.Year + `)</b></li>
                                    <li class="list-group-item"><b>Plot : </b>`+ movie.Plot + `</li>
                                    <li class="list-group-item"><b>Actors : </b>`+ movie.Actors + `</li>
                                    <li class="list-group-item"><b>Genre : </b>`+ movie.Genre + `</li>
                                    <li class="list-group-item"><b>Type : </b>`+ movie.Type + `</li>
                                    <li class="list-group-item"><b>IMDB Rating : </b>`+ movie.imdbRating + `</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    `)
                })

            }
        }
    });


})

$('.dropdown-item').on('click', function () {
    $('#p-1').removeClass('col')
    $('#n-1').removeClass('col')
    $('#p-1').addClass('col-1')
    $('#n-1').addClass('col-1')
    page = 1;
    $('#btn-n').prop('disabled', false)
    $('#page').removeClass('d-none')
    $('#btn-p').prop('disabled', true)
    $('.preloader').css('display', 'unset')
    setTimeout(function () {
        $('.preloader').fadeOut(700)
    }, 950)
    $('#wholeDocument').removeClass('wholeDoc')
    const typeMovie = $(this).html()
    $('#navbarDropdown').html(typeMovie)
    $('#listmovies').html('')

    if ($(this).html() == 'All') {
        $.ajax({
            url: "https://www.omdbapi.com",
            type: "get",
            dataType: "json",
            data: {
                'apikey': 'e3f6b964',
                's': $('.isi-title').html(),
            },
            success: function (movie) {
                if (movie.Response == "True") {
                    let movies = movie.Search
                    $.each(movies, function (i, data) {
                        $('#listmovies').append(`
                        <div class="col mb-5">
                        <div class="card shadow-lg border border-dark border-2" style="width: 18rem; border-radius:10px;"><img
                                src=`+ data.Poster + ` class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title fw-bold">`+ data.Title + `</h5>
                                <p class="card-text">`+ data.Year + `</p>
    
                                <!-- Button trigger modal -->
                                <button data-id=`+ data.imdbID + ` type="button" class="btn btn-primary see-details" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                See Details
                                </button>
    
                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <div class="container">
                                                    <h5 class="modal-title" id="exampleModalLabel">S | H | Film</h5>
                                                    
                                                </div>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        `)
                    })

                } else {
                    $('#page').addClass('d-none')
                    $('#wholeDocument').addClass('wholeDoc')
                    $('#listmovies').html(`<h1 id='eror' style="color: white; text-shadow: 1px 1px 5px black; "class="text-center">` + movie.Error + `</h1>`)
                }

            }
        });
    } else {
        $.ajax({
            url: "https://www.omdbapi.com",
            type: "get",
            dataType: "json",
            data: {
                'apikey': 'e3f6b964',
                's': $('.isi-title').html(),
                'type': typeMovie.toLowerCase()
            },
            success: function (movie) {
                if (movie.Response == "True") {
                    let movies = movie.Search
                    $.each(movies, function (i, data) {
                        $('#listmovies').append(`
                        <div class="col mb-5">
                        <div class="card shadow-lg border border-dark border-2" style="width: 18rem; border-radius:10px;"><img
                                src=`+ data.Poster + ` class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title fw-bold">`+ data.Title + `</h5>
                                <p class="card-text">`+ data.Year + `</p>
    
                                <!-- Button trigger modal -->
                                <button data-id=`+ data.imdbID + ` type="button" class="btn btn-primary see-details" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                See Details
                                </button>
    
                                <!-- Modal -->
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <div class="container">
                                                    <h5 class="modal-title" id="exampleModalLabel">S | H | Film</h5>
                                                    
                                                </div>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                ...
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        `)
                    })

                } else {
                    $('#page').addClass('d-none')
                    $('#wholeDocument').addClass('wholeDoc')
                    $('#listmovies').html(`<h1 id='eror' style="color: white; text-shadow: 1px 1px 5px black; "class="text-center">` + movie.Error + `</h1>`)
                }

            }
        });

    }
})

// previous and next page
// fungsi kalau type all atau type biasa
function allOrType() {
    $.ajax({
        url: "https://www.omdbapi.com",
        type: "get",
        dataType: "json",
        data: {
            'apikey': 'e3f6b964',
            's': $('.isi-title').html(),
            'page': page
        },
        success: function (movie) {
            if (movie.Response == "True") {
                let movies = movie.Search
                $.each(movies, function (i, data) {
                    $('#listmovies').append(`
                    <div class="col mb-5">
                    <div class="card shadow-lg border border-dark border-2" style="width: 18rem; border-radius:10px;"><img
                            src=`+ data.Poster + ` class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">`+ data.Title + `</h5>
                            <p class="card-text">`+ data.Year + `</p>

                            <!-- Button trigger modal -->
                            <button data-id=`+ data.imdbID + ` type="button" class="btn btn-primary see-details" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            See Details
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <div class="container">
                                                <h5 class="modal-title" id="exampleModalLabel">S | H | Film</h5>
                                                
                                            </div>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `)
                })

            } else {
                $('#wholeDocument').css('display', 'flex').css('flex-direction', 'column')
                $('#wholeDocument').addClass('wholeDoc')
                $('#listmovies').html(`<h1 id='eror' style="color: white; text-shadow: 1px 1px 5px black; "class="text-center">` + movie.Error + `</h1>`)
                $('#btn-n').prop('disabled', true)
                $('#p-1').removeClass('col-1')
                $('#p-1').addClass('col')
                $('#n-1').removeClass('col-1')
                $('#n-1').addClass('col')

            }

        }
    });
}

function adaType() {
    $.ajax({
        url: "https://www.omdbapi.com",
        type: "get",
        dataType: "json",
        data: {
            'apikey': 'e3f6b964',
            's': $('.isi-title').html(),
            'type': $('#navbarDropdown').html().toLowerCase(),
            'page': page
        },
        success: function (movie) {
            if (movie.Response == "True") {
                let movies = movie.Search
                $.each(movies, function (i, data) {
                    $('#listmovies').append(`
                    <div class="col mb-5">
                    <div class="card shadow-lg border border-dark border-2" style="width: 18rem; border-radius:10px;"><img
                            src=`+ data.Poster + ` class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title fw-bold">`+ data.Title + `</h5>
                            <p class="card-text">`+ data.Year + `</p>

                            <!-- Button trigger modal -->
                            <button data-id=`+ data.imdbID + ` type="button" class="btn btn-primary see-details" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            See Details
                            </button>

                            <!-- Modal -->
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <div class="container">
                                                <h5 class="modal-title" id="exampleModalLabel">S | H | Film</h5>
                                                
                                            </div>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            ...
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    `)
                })

            } else {
                $('#wholeDocument').css('display', 'flex').css('flex-direction', 'column')
                $('#wholeDocument').addClass('wholeDoc')
                $('#listmovies').html(`<h1 id='eror' style="color: white; text-shadow: 1px 1px 5px black; "class="text-center">` + movie.Error + `</h1>`)
                $('#btn-n').prop('disabled', true)
                $('#p-1').removeClass('col-1')
                $('#p-1').addClass('col')
                $('#n-1').removeClass('col-1')
                $('#n-1').addClass('col')
            }

        }
    });
}


$('#btn-n').on('click', function () {
    page += 1;
    console.log(page)
    $('#p-1').removeClass('col')
    $('#n-1').removeClass('col')
    $('#p-1').addClass('col-1')
    $('#n-1').addClass('col-1')
    console.log($('#listmovies').children())
    $('#listmovies').html('')
    $('#btn-p').removeAttr('disabled')
    $('.preloader').css('display', 'unset')
    setTimeout(function () {
        $('.preloader').fadeOut(700)
    }, 950)
    $('#wholeDocument').removeClass('wholeDoc')
    if ($('#navbarDropdown').html() == 'Type' || $('#navbarDropdown').html() == 'All') {
        allOrType()
    } else {
        adaType()
    }
})

$('#btn-p').on('click', function () {
    $('#p-1').removeClass('col')
    $('#n-1').removeClass('col')
    $('#p-1').addClass('col-1')
    $('#n-1').addClass('col-1')
    $('#btn-n').prop('disabled', false)
    page -= 1;
    console.log(page)
    $('#listmovies').html('')
    if (page == 1) {
        $('#btn-p').prop('disabled', true)
    }
    $('.preloader').css('display', 'unset')
    setTimeout(function () {
        $('.preloader').fadeOut(700)
    }, 950)
    $('#wholeDocument').removeClass('wholeDoc')

    if ($('#navbarDropdown').html() == 'Type' || $('#navbarDropdown').html() == 'All') {
        allOrType()
    } else {
        adaType()
    }
})