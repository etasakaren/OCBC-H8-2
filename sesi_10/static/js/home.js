let ns = {};

// Create the model instance
ns.model = (function() {
    'use strict';

    let $event_pump = $('body');

    // Return the API
    return {
        'read_people': function() {
            let ajax_options = {
                type: 'GET',
                url: 'api/people',
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
        create_people: function(fname, lname) {
            let ajax_options = {
                type: 'POST',
                url: 'api/people',
                accepts: 'application/json',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                    'fname': fname,
                    'lname': lname
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
        update_people: function(person_id, fname, lname) {
            let ajax_options = {
                type: 'PUT',
                url: 'api/people/' + person_id,
                accepts: 'application/json',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                    'fname': fname,
                    'lname': lname
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
        'delete_people': function(person_id) {
            let ajax_options = {
                type: 'DELETE',
                url: 'api/people/' + person_id,
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
        // 'read_notes': function() {
        //     let ajax_options = {
        //         type: 'GET',
        //         url: 'api/notes',
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
        create_notes: function(person_id, content) {
            let ajax_options = {
                type: 'POST',
                url: 'api/people/' + person_id + '/notes',
                accepts: 'application/json',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                    'content': content
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
        update_notes: function(person_id, note_id, content) {
            let ajax_options = {
                type: 'PUT',
                url: 'api/people/' + person_id + '/notes/' + note_id,
                accepts: 'application/json',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                    'content': content
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
        'delete_notes': function(person_id, note_id) {
            let ajax_options = {
                type: 'DELETE',
                url: 'api/people/' + person_id + '/notes/' + note_id,
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

    let $person_id = $('#person_id'),
        $fname = $('#fname'),
        $note_id = $('#note_id'),
        $content = $('#content'),
        $lname = $('#lname');

    // return the API
    return {
        reset: function() {
            $person_id.val('');
            $note_id.val('');
            $lname.val('');
            $fname.val('').focus();
            $content.val('');
        },
        update_editor: function(person_id, note_id, fname, lname, content) {
            $person_id.val(person_id);
            $note_id.val(note_id);
            $lname.val(lname);
            $fname.val(fname).focus();
            $content.val(content);
        },
        build_table: function(people) {
            let rows = ''

            // clear the table
            $('.people table > tbody').empty();

            // did we get a people array?
            if (people) {
                for (let i = 0, l = people.length; i < l; i++) {
                    if (people[i].notes.length == 0)
                        rows += `<tr><td class="person_id">${people[i].person_id}</td><td class="note_id">-</td><td class="fname">${people[i].fname}</td><td class="lname">${people[i].lname}</td><td class="content">-</td><td>${people[i].timestamp}</td></tr>`;
                    else
                        for (let j = 0, l = people[i].notes.length; j < l; j++)
                            rows += `<tr><td class="person_id">${people[i].person_id}</td><td class="note_id">${people[i].notes[j].note_id}</td><td class="fname">${people[i].fname}</td><td class="lname">${people[i].lname}</td><td class="content">${people[i].notes[j].content}</td><td>${people[i].timestamp}</td></tr>`;
                }
                $('table > tbody').append(rows);
            }
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
        $person_id = $('#person_id'),
        $fname = $('#fname'),
        $lname = $('#lname'),
        $note_id = $('#note_id'),
        $content = $('#content');

    // Get the data from the model after the controller is done initializing
    setTimeout(function() {
        model.read_people();
    }, 100)

    // Validate input
    function validate_people(fname, lname) {
        return fname !== "" && lname !== "";
    }

    function validate_notes(person_id, content) {
        return person_id !== "" && (content !== "" || content !== "-");
    }

    // Create our event handlers
    $('#create_people').click(function(e) {
        let fname = $fname.val(),
            lname = $lname.val();

        e.preventDefault();

        if (validate_people(fname, lname)) {
            model.create_people(fname, lname)
        } else {
            alert('Problem with first or last name input');
        }
    });

    $('#update_people').click(function(e) {
        let person_id = $person_id.val(),
            fname = $fname.val(),
            lname = $lname.val();

        e.preventDefault();

        if (person_id != "" && validate_people(fname, lname)) {
            model.update_people(person_id, fname, lname)
        } else {
            alert('Problem with first or last name input');
        }
        e.preventDefault();
    });

    $('#delete_people').click(function(e) {
        let person_id = $person_id.val();

        e.preventDefault();

        if (person_id != "") {
            model.delete_people(person_id)
        } else {
            alert('Problem with first or last name input');
        }
        e.preventDefault();
    });

    $('#reset').click(function() {
        view.reset();
    })

    $('table > tbody').on('dblclick', 'tr', function(e) {
        let $target = $(e.target),
            person_id,
            note_id,
            fname,
            lname,
            content;

        person_id = $target
            .parent()
            .find('td.person_id')
            .text();

        fname = $target
            .parent()
            .find('td.fname')
            .text();

        lname = $target
            .parent()
            .find('td.lname')
            .text();

        note_id = $target
            .parent()
            .find('td.note_id')
            .text();

        content = $target
            .parent()
            .find('td.content')
            .text();

        view.update_editor(person_id, note_id, fname, lname, content);
    });

    // Handle the model events
    $event_pump.on('model_read_success', function(e, data) {
        view.build_table(data);
        view.reset();
    });

    $event_pump.on('model_create_success', function(e, data) {
        model.read_people();
    });

    $event_pump.on('model_update_success', function(e, data) {
        model.read_people();
    });

    $event_pump.on('model_delete_success', function(e, data) {
        model.read_people();
    });

    $event_pump.on('model_error', function(e, xhr, textStatus, errorThrown) {
        let error_msg = textStatus + ': ' + errorThrown + ' - ' + xhr.responseJSON.detail;
        view.error(error_msg);
        console.log(error_msg);
    });

    // Create our event handlers
    $('#create_notes').click(function(e) {
        let content = $content.val(),
            person_id = $person_id.val();
        e.preventDefault();

        if (person_id != "" && (content != "" || content != "-") && validate_notes(person_id, content)) {
            model.create_notes(person_id, content)
        } else {
            alert('Problem with content input');
        }
    });

    $('#update_notes').click(function(e) {
        let person_id = $person_id.val(),
            note_id = $note_id.val(),
            content = $content.val();

        e.preventDefault();

        if (person_id != "" && (note_id != "" || note_id != "-") &&
            validate_notes(person_id, content)) {
            model.update_notes(person_id, note_id, content)
        } else {
            alert('Problem with content input');
        }
        e.preventDefault();
    });

    $('#delete_notes').click(function(e) {
        let person_id = $person_id.val();
        let note_id = $note_id.val();

        e.preventDefault();

        if (person_id != "" && (note_id != "" || note_id != "-")) {
            model.delete_notes(person_id, note_id)
        } else {
            alert('Problem with content input');
        }
        e.preventDefault();
    });
}(ns.model, ns.view));