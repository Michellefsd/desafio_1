 // variables//

    const btn = document.querySelector('.menu-button');
    const title = document.querySelector('#title');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('.menu-icon');


    // eventlisteners
    nav.classList.add('none');
    btn.addEventListener("click", doEverything);
    header.addEventListener("mouseleave", hideNav);

    // functions

    function doEverything() {
        displayNav();
        animateMenu();
        removeText();
    }

    // con el toggle hago que se invierta la visibilidad al darle click al menu
    function displayNav() {
        nav.classList.toggle('nav');
        nav.classList.toggle('none');
    }
    
    function animateMenu() {
        menuIcon.classList.toggle("moving");
        menuIcon.classList.add("before-before");
        menuIcon.classList.add("after-after");
    }
    function removeText() {
        title.classList.toggle('none')
    }

    // Y en esta especifico que hacer si uno se aleja del nav
    function hideNav() {
        if(title.classList.contains('none')) {
            menuIcon.classList.remove('moving');
            title.classList.remove('none')
            nav.classList.remove('nav');
            nav.classList.add('none');
            console.log('hide');
        }
    }
    