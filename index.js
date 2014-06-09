var ansi_up = require('ansi_up');

var fixSize = require('./lib/fixSize');

var input  = document.getElementById('input');
var output = document.getElementById('output');
var view = document.getElementById('view');
var executeButton  = document.getElementById('executeElem');
var toggleButton = document.getElementById('toggleElem');


function update() {
    var html = ansi_up.ansi_to_html(ansi_up.escape_for_html(input.value));
    output.value = html;
    view.innerHTML = html;
}

function toggle() {
    if (view.style.display != 'block') {
        view.style.display = 'block';
        output.style.display = 'none';
    }
    else {
        view.style.display = 'none';
        output.style.display = 'block';
    }
    update();
}

input.addEventListener('change', function(){
    update();
});
input.addEventListener('keyup', function(){
    update();
});
executeButton.addEventListener('click', function(){
    update();
});
toggleButton.addEventListener('click', function(){
    toggle();
});

fixSize(input, output);
