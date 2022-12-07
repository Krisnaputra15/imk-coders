function fireSweetAlert() {
    Swal.fire(
        '',
        'Transaction has been processed successfully',
        'success'
    ).then(function() {
        window.location = "Homepage.html";
    });
}