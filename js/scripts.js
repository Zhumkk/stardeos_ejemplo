var $coche = $('.coche');

$coche.on('mouseenter focus', function (){
    $coche.get(0).play();
});

$coche.on('mouseout blur', function (){
    $coche.get(0).load();
});

var $cocheDos = $('.cocheDos');

$cocheDos.on('mouseenter focus', function (){
    $cocheDos.get(0).play();
});

$cocheDos.on('mouseout blur', function (){
    $cocheDos.get(0).pause();
});