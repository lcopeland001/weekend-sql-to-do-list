console.log('js');

$(readyNow);

function readyNow() {
    console.log('ready Now');
    $('#submit-task').on('click', sendTask); // submit button click handler
    $('body').on('click', '.task-delete', deleteTask); // delete button click handler and delegater
    getTask();
};

// Complete box
function checkBox() {
    console.log('in checkBox');
    let x = document.getElementById("check-box");
    if result
    x.checked = true;
    if (x) {
        return true
    }
    console.log('is check box checked?', x);

}// end checkBox

// Delete buttons
function deleteTask() {
    console.log('in deleteTask');
    const taskId= $(this).data('id');
    $.ajax({
        type: 'DELETE',
        url: `/task/${taskId}`
    }).then(function(response) {
        console.log('delete response', response);
        getTask();
    }).catch(function (error) {
        console.log('Delete Error',error);
        alert('Something went really wrong!');
    });
} // end deleteTask

// GET from server 
function getTask() {
    console.log('In GET');
    $.ajax({
        type: 'GET',
        url: '/task'
    }).then(function (response){
        console.log('get response',response);
        let x = document.getElementById("check-box");
        $('#task-table').empty();
        for(let input of response) {
            $('#task-table').append(`
            <tr>
            <td>${input.task}</td>
            <td><input type="checkbox" id="check-box></td>
            <td>
                <button class="task-delete" data-id="${input.id}">Delete</button>
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

