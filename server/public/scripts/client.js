console.log('js');

$(readyNow);

function readyNow() {
    console.log('ready Now');
    $('#submit-task').on('click', sendTask)
    
};

let completBox = boxCheck()

function boxCheck() {
    console.log('in boxCheck');
} // end boxCheck

// Complete box


// Delete buttons


// GET from server 
function getTask() {
    console.log('In GET');
    $.ajax({
        type: 'GET',
        url: '/task'
    }).then(function (response){
        console.log(response);
        $('#task-table').empty();
        for(let input of response) {
            $('#task-table').append(`
            <tr>
            <td>${input.task}</td>
            <td>Complete Box</td>
            <td>
                <button class="delete-button">DELETE</button>
            </td>
            `)
        }
    })
}


// POST to server 
function sendTask() {
    console.log('in sendTask');
    $.ajax({
        task: 'POST',
        url: '/task',
        data: {
            task: $('#task-input').val(),
            complete: false 
        }
    }).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log('Error', error);
        alert('Something is wrong!');
    })
} // end sendTask