
$('.card-img-top').mouseenter(function() 
    {
    
        $(this).css("cursor","pointer");
        $(this).animate({width: "100%", height: "100%"}, 'slow');


    });

$('.card-img-top').mouseleave(function()
    {   
        $(this).animate({width: "80%"}, 'slow');
});