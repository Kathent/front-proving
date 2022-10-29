let menu = document.getElementsByClassName('left-menu');
console.log('menu is: ', menu.length);
console.log('menu is: ', menu.item(0));
if (menu && menu[0]) {
    console.log('menu is: ', menu[0]);
    menu[0].addEventListener('mouseover', (ev)=> {
        console.log('hover....');
        ev.preventDefault();
        menu[0].style.width = '20%';
    })

    menu[0].addEventListener('mouseout', (ev)=> {
        console.log('hover....');
        ev.preventDefault();
        menu[0].style.width = '0.5%';
    })
}