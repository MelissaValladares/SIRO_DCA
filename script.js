document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('audio-button').addEventListener('click', function() {
        var audio = document.getElementById('audio');
        audio.play().catch(function(error) {
            console.error('Error al reproducir el audio:', error);
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tablinks")[0].click();
});
function menu(evento, categoria) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(categoria).style.display = "block";
    evento.currentTarget.className += " active";
}
