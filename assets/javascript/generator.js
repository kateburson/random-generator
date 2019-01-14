$(document).ready(function(){

    var clicked = false;
    var programs = ['Western Michigan (Kalamazoo, MI)', 'Sparrow (Lansing, MI)', 'Corpus Christi', 'South Carolina', 'Davis', 'Kennestone (Hotlanta)', 'Palm Springs', 'USC', 'UNLV', 'St. Josephs (Stockton)', 'Kaweah Delta (Visalia)'];
    var shuffledArray = [];

    function shuffle(programs) {
        for (var i = programs.length-1; i >=0; i--) {
     
            var randomIndex = Math.floor(Math.random()*(i+1)); 
            var itemAtIndex = programs[randomIndex]; 
             
            programs[randomIndex] = programs[i]; 
            programs[i] = itemAtIndex;
            console.log(itemAtIndex);
            shuffledArray.push(itemAtIndex);
            $('#ranking').append('<li>' + itemAtIndex + '</li>')
            $('#color').css({'background':'-webkit-linear-gradient(rgba(15, 27, 37, .1),rgba(15, 27, 37,1))', 'bakcground': '-moz-linear-gradient(rgba(15, 27, 37, .1),rgba(15, 27, 37,1))', 'background' : 'linear-gradient(rgba(15, 27, 37, .1),rgba(15, 27, 37,1))'});
        }
    };


    $('#button').on('click', function(){
        if(clicked === false) {
            shuffle(programs);
            clicked = true;
        } else if (clicked === true) {
            shuffledArray = [];
            $('#ranking').empty();
            shuffle(programs);
        }
        
    });

});