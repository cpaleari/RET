//Dit is voor het filter uitklappen

var filterknop = document.querySelector('header ul li:nth-of-type(2)');
var filteren = document.querySelector('form');

filterknop.addEventListener('click', function () {
    filteren.classList.toggle('show-filteren');
});

//dit is voor de downloadknop
//document.getElementsByTagName("ection:last-of-type article img:last-of-type")[0].setAttribute("id", "verhaalopslaan");ownloadknop.addEventListener('click', function () {downloadknop.classList.toggle('verhaalopslaan');});



// dit is voor interactie in het verhaal
var interactieverhaal = document.querySelector('div');

interactieverhaal.addEventListener('click', function () {
    interactieverhaal.classList.toggle('interactieactief');
});
