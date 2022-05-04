let menu = document.querySelector('.buttonMenu');
let submenu = document.querySelector('.submenu');
let itemMenu = document.querySelectorAll('.item-menu');
let clicado = false;

menu.addEventListener('click', () => {
    if (clicado) {
        clicado = false;
    } else {
        clicado = true;
    };

    if (clicado) {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    };
});

itemMenu.forEach(element => {
    element.addEventListener('click', () => {
        submenu.style.display = 'none';
        clicado = false;
    });
});