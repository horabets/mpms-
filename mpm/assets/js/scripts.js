$(document).ready(function() {
    // Custom JavaScript for interactive elements
    $('.collapse').on('shown.bs.collapse', function() {
        $(this).prev().find('.btn').addClass('active');
    });

    $('.collapse').
