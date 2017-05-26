
$(document).ready(function () {
    $('.modal').modal();
    $('#spongebobConvert').click(function () {
        spongebobMeme($('#spongebobInput').val(),$('#spongebobOutput'));
    });
});

function spongebobMeme(input, output) {
    var strOutput = "";
    for(var i = 0; i<input.length;i++){
        if(i%2!=0) strOutput= strOutput + input[i].toUpperCase();
        else strOutput= strOutput + input[i];
    }
    output.html(strOutput);
};
