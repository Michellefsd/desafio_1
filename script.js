 // variables//

    const btn = document.querySelector('.menu-button');
    const title = document.querySelector('#title');
    header = document.querySelector('header');
    const nav = document.querySelector('nav');


    // eventlisteners
    nav.classList.add('none');
    btn.addEventListener("click", displayNav);
    header.addEventListener("mouseleave", hideNav);

    // functions

    // con el toggle hago que se invierta la visibilidad al darle click al menu
    function displayNav() {
        title.classList.toggle('none')
        nav.classList.toggle('nav');
        nav.classList.toggle('none');
        console.log('display');

    }


    // Y en esta especifico que hacer si uno se aleja del nav
    function hideNav() {
        if(title.classList.contains('none')) {
            title.classList.remove('none')
            nav.classList.remove('nav');
            nav.classList.add('none');
            console.log('hide');
        }


    }