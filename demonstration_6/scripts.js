//VARIABLES FOR TIME
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes;
var seconds= date.getSeconds();

var timestamp = month + "/" + day + "/" + year + hours + ":" + minutes + ":" + seconds;

console.log(timestamp);

//ARRAYS FOR RANDOM FONTS
var fonts = ["monospace", "cursive", "serif", "sans serif", "impact" ];
var letterspacing = [0, 10, 15, 20];

/*
console.log(fonts[Math.floor(Math.random()*fonts.length)] );*/

/*
function append() {
    var newText = $('#textarea').val();
    console.log(newText); 
    
var newFont = fonts[Math.floor(Math.random()*fonts.length)]
var newSpacing = letterspacing[Math.floor(Math.random()*letterspacing.length)]

$("#text").css('font-family', newFont);
$("text").css('letter-spacing', newSpacing);
    
} */


//FUNCTION TO UPLOAD IMAGE   
function previewFile(){
       var preview = document.querySelector('img'); //selects the query named img
       var file    = document.querySelector('input[type=file]').files[0]; //sames as here
       var reader  = new FileReader();
       reader.onloadend = function () {
        preview.src = reader.result;
       }
       if (file) {
        reader.readAsDataURL(file); //reads the data as a URL
           
       } else {
        preview.src = "";
       }
    $('#date').text(timestamp);
  }

//FUNCTION TO UPLOAD/STYLE TEXT AND SUBMIT TIMESTAMP  
function append() {
    $('#text').html($('#textarea').val());
    var randomFont = fonts[Math.floor(Math.random()*fonts.length)]
    var randomSpacing = letterspacing[Math.floor(Math.random()*letterspacing.length)]
    $("#right").css("font-family", randomFont)
    $("#right").css("letter-spacing", randomSpacing)
}


//ADD RANDOM COLOR TO #RIGHT BG
