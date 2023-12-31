// client.js
$(document).ready(function() {
    $.get('/getUserDetails', function(data) {
        $('#profilePicture').attr('src', data.profilePicture);
        $('#usernameDisplay').text(data.username);
    });
});
