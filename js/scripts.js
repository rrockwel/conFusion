$(document).ready(function(){
    //Enable tool-tip on 'reserve table' button
    $('[data-toggle="tooltip"]').tooltip();

    //Set carousel interval to 2 seconds
    $('#mycarousel').carousel({interval: 2000});

    //Set carousel button to cycle between 'play' and 'pause' button
    $('#carousel-button').click(function() {
        if($('#carousel-button').children('span').hasClass('fa-pause')){
            $('#mycarousel').carousel('pause');
            $('#carousel-button').children('span').removeClass('fa-pause');
            $('#carousel-button').children('span').addClass('fa-play');
        }
        else if($('#carousel-button').children('span').hasClass('fa-play')){
            $('#mycarousel').carousel('cycle');
            $('#carousel-button').children('span').removeClass('fa-play');
            $('#carousel-button').children('span').addClass('fa-pause');
        }
    });

    $('#loginButton').click(function(){
        $('#loginModal').modal('show');
    });

    $('#reserveButton').click(function(){
        $('#reserveTableModal').modal('show');

    });
});
