console.log('js');

$(readyNow);

function readyNow() {
    console.log('ready Now');
    $('#submit-task').on('click', sendTask); 
    getTask();
};

// Complete box


// Delete buttons


// GET from server 
function getTask() {
    console.log('In GET');
    $.ajax({
        type: 'GET',
        url: '/task'
    }).then(function (response){
        console.log('get response',response);
        $('#task-table').empty();
        for(let input of response) {
            $('#task-table').append(`
            <tr>
            <td>${input.task}</td>
            <td>${input.complete}</td>
            <td>
                <button class="artist-delete" data-id="${input.id}">Delete</button>
            </td>
        </tr>
            `);
        }
    }).catch(function (error) {
        console.log('Error',error);
        alert('Something went wrong!');
    });
} // end getTask


// POST to server 
function sendTask() {
    console.log('in sendTask');
    $.ajax({
        type: 'POST',
        url: '/task',
        data: {
            task: $('#task-input').val(),
            complete: 'false' 
        }
    }).then(function (response) {
        console.log(response);
        getTask();
    }).catch(function (error) {
        console.log('Error', error);
        alert('Something is wrong!');
    });
} // end sendTask