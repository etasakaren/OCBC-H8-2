let ns = {};

// Create the model instance
ns.model = (function() {
    'use strict';

    let $event_pump = $('body');

    // Return the API
    return {
        'read_directors': function() {
            let ajax_options = {
                type: 'GET',
                url: 'api/directors',
                accepts: 'application/json',
                dataType: 'json'
            };
            $.ajax(ajax_options)
                .done(function(data) {
                    $event_pump.trigger('model_read_success', [data]);
                })
                .fail(function(xhr, textStatus, errorThrown) {
                    $event_pump.trigger('model_error', [xhr, textStatus, errorThrown]);
                })
        },
        create_directors: function(name, gender, director_uid, department) {
            let ajax_options = {
                type: 'POST',
                url: 'api/directors',
                accepts: 'application/json',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                    'name': name,
                    'gender': parseInt(gender),
                    'director_uid': parseInt(director_uid),
                    'department': department
                })
            };
            $.ajax(ajax_options)
                .done(function(data) {
                    $event_pump.trigger('model_create_success', [data]);
                })
                .fail(function(xhr, textStatus, errorThrown) {
                    $event_pump.trigger('model_error', [xhr, textStatus, errorThrown]);
                })
        },
        update_directors: function(director_id, name, gender, director_uid, department) {
            let ajax_options = {
                type: 'PUT',
                url: 'api/directors/' + director_id,
                accepts: 'application/json',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                    'name': name,
                    'gender': parseInt(gender),
                    'director_uid': parseInt(director_uid),
                    'department': department
                })
            };
            $.ajax(ajax_options)
                .done(function(data) {
                    $event_pump.trigger('model_update_success', [data]);
                })
                .fail(function(xhr, textStatus, errorThrown) {
                    $event_pump.trigger('model_error', [xhr, textStatus, errorThrown]);
                })
        },
        'delete_directors': function(director_id) {
            let ajax_options = {
                type: 'DELETE',
                url: 'api/directors/' + director_id,
                accepts: 'application/json',
                contentType: 'plain/text'
            };
            $.ajax(ajax_options)
                .done(function(data) {
                    $event_pump.trigger('model_delete_success', [data]);
                })
                .fail(function(xhr, textStatus, errorThrown) {
                    $event_pump.trigger('model_error', [xhr, textStatus, errorThrown]);
                })
        },
        // 'read_movies': function() {
        //     let ajax_options = {
        //         type: 'GET',
        //         url: 'api/movies',
        //         accepts: 'application/json',
        //         dataType: 'json'
        //     };
        //     $.ajax(ajax_options)
        //         .done(function(data) {
        //             $event_pump.trigger('model_read_success', [data]);
        //         })
        //         .fail(function(xhr, textStatus, errorThrown) {
        //             $event_pump.trigger('model_error', [xhr, textStatus, errorThrown]);
        //         })
        // },
        create_movies: function(original_title, budget, popularity, release_date, revenue, title, vote_average, vote_count, overview, tagline, movie_uid, director_id) {
            let ajax_options = {
                type: 'POST',
                url: 'api/directors/' + director_id + '/movies',
                accepts: 'application/json',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                    'original_title': original_title,
                    'budget': parseInt(budget),
                    'popularity': parseInt(popularity),
                    'release_date': release_date,
                    'revenue': parseInt(revenue),
                    'title': title,
                    'vote_average': parseFloat(vote_average),
                    'vote_count': parseInt(vote_count),
                    'overview': overview,
                    'tagline': tagline,
                    'movie_uid': parseInt(movie_uid),
                    'director_id': parseInt(director_id)
                })
            };
            $.ajax(ajax_options)
                .done(function(data) {
                    $event_pump.trigger('model_create_success', [data]);
                })
                .fail(function(xhr, textStatus, errorThrown) {
                    $event_pump.trigger('model_error', [xhr, textStatus, errorThrown]);
                })
        },
        update_movies: function(movie_id, director_id, original_title, budget, popularity, release_date, revenue, title, vote_average, vote_count, overview, tagline, movie_uid) {
            let ajax_options = {
                type: 'PUT',
                url: 'api/directors/' + director_id + '/movies/' + movie_id,
                accepts: 'application/json',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                    'original_title': original_title,
                    'budget': parseInt(budget),
                    'popularity': parseInt(popularity),
                    'release_date': release_date,
                    'revenue': parseInt(revenue),
                    'title': title,
                    'vote_average': parseFloat(vote_average),
                    'vote_count': parseInt(vote_count),
                    'overview': overview,
                    'tagline': tagline,
                    'movie_uid': parseInt(movie_uid),
                    'director_id': parseInt(director_id)
                })
            };
            $.ajax(ajax_options)
                .done(function(data) {
                    $event_pump.trigger('model_update_success', [data]);
                })
                .fail(function(xhr, textStatus, errorThrown) {
                    $event_pump.trigger('model_error', [xhr, textStatus, errorThrown]);
                })
        },
        'delete_movies': function(movie_id, director_id) {
            let ajax_options = {
                type: 'DELETE',
                url: 'api/directors/' + director_id + '/movies/' + movie_id,
                accepts: 'application/json',
                contentType: 'plain/text'
            };
            $.ajax(ajax_options)
                .done(function(data) {
                    $event_pump.trigger('model_delete_success', [data]);
                })
                .fail(function(xhr, textStatus, errorThrown) {
                    $event_pump.trigger('model_error', [xhr, textStatus, errorThrown]);
                })
        }
    };
}());

// Create the view instance
ns.view = (function() {
    'use strict';

    let $movie_id = $('#movie_id'),
        $director_id = $('#director_id'),
        $original_title = $('#original_title'),
        $budget = $('#budget'),
        $popularity = $('#popularity'),
        $release_date = $('#release_date'),
        $revenue = $('#revenue'),
        $title = $('#title'),
        $vote_average = $('#vote_average'),
        $vote_count = $('#vote_count'),
        $overview = $('#overview'),
        $tagline = $('#tagline'),
        $movie_uid = $('#movie_uid'),
        $name = $('#name'),
        $gender = $('#gender'),
        $director_uid = $('#director_uid'),
        $department = $('#department');

    // return the API
    return {
        reset: function() {
            $movie_id.val('');
            $director_id.val('');
            $original_title.val('');
            $budget.val('');
            $popularity.val('');
            $release_date.val('');
            $revenue.val('');
            $title.val('');
            $vote_average.val('');
            $vote_count.val('');
            $overview.val('');
            $tagline.val('');
            $movie_uid.val('');
            $name.val('').focus();
            $gender.val('');
            $director_uid.val('');
            $department.val('');
        },
        update_editor: function(movie_id, director_id, original_title, budget, popularity, release_date, revenue, title, vote_average, vote_count, overview, tagline, movie_uid, name, gender, director_uid, department) {
            $movie_id.val(movie_id);
            $director_id.val(director_id);
            $original_title.val(original_title);
            $budget.val(budget);
            $popularity.val(popularity);
            $release_date.val(release_date);
            $revenue.val(revenue);
            $title.val(title);
            $vote_average.val(vote_average);
            $vote_count.val(vote_count);
            $overview.val(overview);
            $tagline.val(tagline);
            $movie_uid.val(movie_uid);
            $name.val(name).focus();
            $gender.val(gender);
            $director_uid.val(director_uid);
            $department.val(department);
        },
        build_table: function(directors) {
            let rows = ''

            // clear the table
            $('.directors table > tbody').empty();

            // did we get a directors array?
            if (directors) {
                for (let i = 0, l = directors.length; i < l; i++)
                    if (directors[i].movies.length == 0)
                        `<tr><td class="director_id">${directors[i].director_id}</td><td class="director_uid">${directors[i].director_uid}</td><td class="name">${directors[i].name}</td><td class="gender">${directors[i].gender}</td><td class="department">${directors[i].department}</td><td class="movie_id">-</td><td class="movie_uid">-</td><td class="original_title">-</td><td class="budget">-</td><td class="popularity">-</td><td class="overview">-</td><td class="release_date">-</td><td class="tagline">-</td><td class="revenue">-</td><td class="title">-</td><td class="vote_average">-</td><td class="vote_count">-</td></tr>`;
                    else
                        for (let j = 0, l = directors[i].movies.length; j < l; j++)
                            rows += `<tr><td class="director_id">${directors[i].director_id}</td><td class="director_uid">${directors[i].director_uid}</td><td class="name">${directors[i].name}</td><td class="gender">${directors[i].gender}</td><td class="department">${directors[i].department}</td><td class="movie_id">${directors[i].movies[j].movie_id}</td><td class="movie_uid">${directors[i].movies[j].movie_uid}</td><td class="original_title">${directors[i].movies[j].original_title}</td><td class="budget">${directors[i].movies[j].budget}</td><td class="popularity">${directors[i].movies[j].popularity}</td><td class="overview">${directors[i].movies[j].overview}</td><td class="release_date">${directors[i].movies[j].release_date}</td><td class="tagline">${directors[i].movies[j].tagline}</td><td class="revenue">${directors[i].movies[j].revenue}</td><td class="title">${directors[i].movies[j].title}</td><td class="vote_average">${directors[i].movies[j].vote_average}</td><td class="vote_count">${directors[i].movies[j].vote_count}</td></tr>`;
            }
            $('table > tbody').append(rows);
        },
        error: function(error_msg) {
            $('.error')
                .text(error_msg)
                .css('visibility', 'visible');
            setTimeout(function() {
                $('.error').css('visibility', 'hidden');
            }, 3000)
        }
    };
}());

// Create the controller
ns.controller = (function(m, v) {
    'use strict';

    let model = m,
        view = v,
        $event_pump = $('body'),
        $movie_id = $('#movie_id'),
        $director_id = $('#director_id'),
        $original_title = $('#original_title'),
        $budget = $('#budget'),
        $popularity = $('#popularity'),
        $release_date = $('#release_date'),
        $revenue = $('#revenue'),
        $title = $('#title'),
        $vote_average = $('#vote_average'),
        $vote_count = $('#vote_count'),
        $overview = $('#overview'),
        $tagline = $('#tagline'),
        $movie_uid = $('#movie_uid'),
        $name = $('#name'),
        $gender = $('#gender'),
        $director_uid = $('#director_uid'),
        $department = $('#department');

    // Get the data from the model after the controller is done initializing
    setTimeout(function() {
        model.read_directors();
    }, 100)

    // Validate input
    function validate_directors(name, gender, director_uid, department) {
        return name !== "" && gender !== "" && director_uid !== "" && department !== "";
    }

    function validate_movies(director_id, original_title, budget, popularity, release_date, revenue, title, vote_average, vote_count, movie_uid) {
        return director_id !== "" && original_title !== "" && budget !== "" && popularity !== "" && release_date !== "" && revenue !== "" && title !== "" && vote_average !== "" && vote_count !== "" && movie_uid !== "";
    }

    // Create our event handlers
    $('#create_directors').click(function(e) {
        let name = $name.val(),
            gender = $gender.val(),
            director_uid = $director_uid.val(),
            department = $department.val();

        e.preventDefault();

        if (validate_directors(name, gender, director_uid, department)) {
            model.create_directors(name, gender, director_uid, department)
        } else {
            alert('Invalid input');
        }
    });

    $('#update_directors').click(function(e) {
        let director_id = $director_id.val(),
            name = $name.val(),
            gender = $gender.val(),
            director_uid = $director_uid.val(),
            department = $department.val();

        e.preventDefault();

        if (director_id != "" && validate_directors(name, gender, director_uid, department)) {
            model.update_directors(director_id, name, gender, director_uid, department)
        } else {
            alert('Invalid input');
        }
        e.preventDefault();
    });

    $('#delete_directors').click(function(e) {
        let director_id = $director_id.val();

        e.preventDefault();
        if (director_id != "") {
            model.delete_directors(director_id)
        } else {
            alert('Something went wrong');
        }
        e.preventDefault();
    });

    $('#reset').click(function() {
        view.reset();
    })

    $('table > tbody').on('dblclick', 'tr', function(e) {
        let $target = $(e.target),
            movie_id,
            director_id,
            original_title,
            budget,
            popularity,
            release_date,
            revenue,
            title,
            vote_average,
            vote_count,
            overview,
            tagline,
            movie_uid,
            name,
            gender,
            director_uid,
            department;

        movie_id = $target
            .parent()
            .find('td.movie_id')
            .text();

        director_id = $target
            .parent()
            .find('td.director_id')
            .text();

        original_title = $target
            .parent()
            .find('td.original_title')
            .text();

        budget = $target
            .parent()
            .find('td.budget')
            .text();

        popularity = $target
            .parent()
            .find('td.popularity')
            .text();

        release_date = $target
            .parent()
            .find('td.release_date')
            .text();

        revenue = $target
            .parent()
            .find('td.revenue')
            .text();

        title = $target
            .parent()
            .find('td.title')
            .text();

        vote_average = $target
            .parent()
            .find('td.vote_average')
            .text();

        vote_count = $target
            .parent()
            .find('td.vote_count')
            .text();

        overview = $target
            .parent()
            .find('td.overview')
            .text();

        tagline = $target
            .parent()
            .find('td.tagline')
            .text();

        movie_uid = $target
            .parent()
            .find('td.movie_uid')
            .text();

        name = $target
            .parent()
            .find('td.name')
            .text();

        gender = $target
            .parent()
            .find('td.gender')
            .text();

        director_uid = $target
            .parent()
            .find('td.director_uid')
            .text();

        department = $target
            .parent()
            .find('td.department')
            .text();
        view.update_editor(movie_id, director_id, original_title, budget, popularity, release_date, revenue, title, vote_average, vote_count, overview, tagline, movie_uid, name, gender, director_uid, department);
    });

    // Handle the model events
    $event_pump.on('model_read_success', function(e, data) {
        view.build_table(data);
        view.reset();
    });

    $event_pump.on('model_create_success', function(e, data) {
        model.read_directors();
    });

    $event_pump.on('model_update_success', function(e, data) {
        model.read_directors();
    });

    $event_pump.on('model_delete_success', function(e, data) {
        model.read_directors();
    });

    $event_pump.on('model_error', function(e, xhr, textStatus, errorThrown) {
        let error_msg = textStatus + ': ' + errorThrown + ' - ' + xhr.responseJSON.detail;
        view.error(error_msg);
        console.log(error_msg);
    });

    // Create our event handlers
    $('#create_movies').click(function(e) {
        let movie_id = $movie_id.val(''),
            director_id = $director_id.val(''),
            original_title = $original_title.val(''),
            budget = $budget.val(''),
            popularity = $popularity.val(''),
            release_date = $release_date.val(''),
            revenue = $revenue.val(''),
            title = $title.val(''),
            vote_average = $vote_average.val(''),
            vote_count = $vote_count.val(''),
            overview = $overview.val(''),
            tagline = $tagline.val(''),
            movie_uid = $movie_uid.val('');
        e.preventDefault();

        if (movie_id == '' && validate_movies(movie_id, director_id, original_title, budget, popularity, release_date, revenue, title, vote_average, vote_count, overview, tagline, movie_uid)) {
            model.create_movies(movie_id, director_id, original_title, budget, popularity, release_date, revenue, title, vote_average, vote_count, overview, tagline, movie_uid)
        } else {
            alert('Invalid input');
        }
    });

    $('#update_movies').click(function(e) {
        let movie_id = $movie_id.val(),
            director_id = $director_id.val(),
            original_title = $original_title.val(),
            budget = $budget.val(),
            popularity = $popularity.val(),
            release_date = $release_date.val(),
            revenue = $revenue.val(),
            title = $title.val(),
            vote_average = $vote_average.val(),
            vote_count = $vote_count.val(),
            overview = $overview.val(),
            tagline = $tagline.val(),
            movie_uid = $movie_uid.val();

        e.preventDefault();

        if (director_id != "" && (movie_id != "" || movie_id != "-") &&
            validate_movies(movie_id, director_id, original_title, budget, popularity, release_date, revenue, title, vote_average, vote_count, overview, tagline, movie_uid)) {
            model.update_movies(movie_id, director_id, original_title, budget, popularity, release_date, revenue, title, vote_average, vote_count, overview, tagline, movie_uid)
        } else {
            alert('Invalid input');
        }
        e.preventDefault();
    });

    $('#delete_movies').click(function(e) {
        let director_id = $director_id.val();
        let movie_id = $movie_id.val();

        e.preventDefault();

        if (director_id != "" && (movie_id != "" || movie_id != "-")) {
            model.delete_movies(movie_id, director_id)
        } else {
            alert('Something went wrong');
        }
        e.preventDefault();
    });
}(ns.model, ns.view));