//Dit is voor het filter uitklappen

var filterknop = document.querySelector('header ul li:nth-of-type(2)');
var filteren = document.querySelector('form');

filterknop.addEventListener('click', function () {
    filteren.classList.toggle('show-filteren');
});


//Dit is voor de animatie in het verhaal
var interactieverhaal = document.querySelector('section:first-of-type');

interactieverhaal.addEventListener('click', function () {
    interactieverhaal.classList.toggle('interactieactief');
});


//Dit is voor de downloadknop die van kleur verandert al je erop klikt



document.addEventListener('DOMContentLoaded', function () {

    var downloadknop = document.querySelector('section:last-of-type article button');

    downloadknop.addEventListener('click', function () {
        window.lb = downloadknop;
        downloadknop.classList.toggle('selected');


        document.querySelector('section:last-of-type article button p').innerHTML = "Gedownload &#10004;";
        document.querySelector('section:last-of-type article  h5').innerHTML = "Het verhaal staat nu bij je downloads!";

    });
}, false);
