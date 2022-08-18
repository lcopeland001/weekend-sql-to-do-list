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