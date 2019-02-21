
var $texto = $("#textArc");

$texto.arctext({
    radius: 300,
    // dir: -1,
    rotate: false
})

setTimeout( function() {
    $texto.arctext('set', {
        radius: 400,
        dir: -1,
        rotate: false,
        animation: {
            speed: 500,
            easing: 'ease-out'
        }
    });
}, 1000)

// Shuffle Letters

var mezcla = $("#textMezclar");
var mezclaInput = $("#textInput");
var mezclaPresentacion = $("#textPresentacion")

mezcla.shuffleLetters();

mezclaInput.on("keypress", function(e){
    // console.log(e.keyCode); --> el keyCode te dice el numero de que es al precionar una tecla
    if (e.keyCode == 13) {
        
        mezcla.shuffleLetters({
            "text": mezclaInput.val() 
        });
    }
})

var mensajes = ['Hola amigos...', 'Me llamo enrique', "BIENVENDOS", "a mi sitio WEB"];
var actual = 0;

mezclaPresentacion.text(mensajes[0]);

setInterval( function() { // --> el setInterval se ejecuta cada cierto tiempo 
    actual++;
    if (actual >= mensajes.length) {
        actual = 0;
    }
    mezclaPresentacion.shuffleLetters({
        "text": mensajes[actual]
    })
}, 3000)