var filterknop = document.querySelector('header img');
var filteren = document.querySelector('form');

filterknop.addEventListener('click', function () {
    //filterknop.classList.toggle('show-filteren');
    filteren.classList.toggle('show-filteren');
});

var favorietknop = document.querySelector('div article footer img')

favorietknop.addEventListener('click', function (){
    favorietknop.classList.toggle('roodhartje');
});