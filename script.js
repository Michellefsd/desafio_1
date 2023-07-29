 // variables//

    const btn = document.querySelector('.menu-button');
    const title = document.querySelector('h1');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const menuIcon = document.querySelector('#menu-icon');
    const menuBefore = document.querySelector('#menu-icon:before');
    const menuAfter = document.querySelector('#menu-icon:after');


    // eventlisteners
    nav.classList.add('none');
    btn.addEventListener("click", doEverything);
    header.addEventListener("mouseleave", hideNav);

    // functions

    // Junto en esta funcion todas las distintas cosas que quiero que se hagan al darle click al x
    function doEverything() {
        displayNav();
        animateMenu();
        removeText();
    }

    // con el toggle hago que se invierta la visibilidad al darle click al menu
    // despliego  y repliego navegador a c/click
    function displayNav() {
        nav.classList.toggle('nav');
        nav.classList.toggle('none');
    }

    // Genero animacion del menu a c/click
    function animateMenu() {
        menuIcon.classList.toggle("moving");
        // al ser pseudoelementos no existen a la carga del DOM 
        // hay que esperar a q los lea el browser para luego acceder a ellos
        if(menuBefore && menuAfter) {
            menuBefore.classList.add("moving");
            menuAfter.classList.add("moving");
        }
    }
    // desparece el texto a cada despliegue del navegador
    function removeText() {
        title.classList.add('none')
    }

    // Y en esta especifico que hacer si uno se aleja del nav
    // imita la funcion de cerrar el navegador
    function hideNav() {
        if(title.classList.contains('none')) {
            menuIcon.classList.remove('moving');
            title.classList.remove('none')
            nav.classList.remove('nav');
            nav.classList.add('none');
        // al ser pseudoelementos no existen a la carga del DOM 
        // hay que esperar a q los lea el browser para luego acceder a ellos
            if(menuBefore && menuAfter) {
                menuBefore.classList.remove('moving');
                menuAfter.classList.remove('moving');
            }
        }
    }
