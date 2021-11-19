var menuIcon = document.querySelector('.menu-icon');
var menuItems = document.querySelectorAll('.menu-items li');



menuIcon.addEventListener('click', function(){
    menuItems.style.className = '.menu-items-active';

}
);

