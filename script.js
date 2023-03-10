const entryScreen = document.querySelector('#entry-screen');
entryScreen.addEventListener('animationend', () => {
    entryScreen.remove();
});

const contactButton = document.querySelector('#contact-button');
contactButton.addEventListener('click', () => {
    document.getElementById('contact').classList.toggle('shrinked');
    window.innerWidth > 768 ?? document.querySelector('#content').classList.toggle('blured');
});

if (window.innerWidth > 768) {
    const contactContainer = document.querySelector('#contact');
    contactContainer.style.top = `109px`;
}


let fensterPhotosAdded, treppenPhotosAdded = false;
const mainLeftArrow = document.getElementById('arrow-left');
mainLeftArrow.addEventListener('click', () => {
    const mainContentContainer = document.getElementById('main-content');
    mainContentContainer.style.left = '100%';

    const fensterContentContainer = document.getElementById('fenster-content');
    fensterContentContainer.style.left = '0';

    if(!fensterPhotosAdded){
        for (i = 1; i <= 8; i++){
            let img = document.createElement('img');
            img.src = `./img/fenster-images-360/HomeLineFenster${i}.webp`;
            img.alt = 'HomeLine Fenster, Garagentore, Rollos.'
            // img.width = '360';
            img.height = '270';
            fensterContentContainer.querySelector('.photos').appendChild(img);
        }
        fensterPhotosAdded = true;
    }
});

const fensterRightArrow = document.getElementById('arrow-right-fenster');
fensterRightArrow.addEventListener('click', () => {
    const mainContentContainer = document.getElementById('main-content');
    mainContentContainer.style.left = '0';

    const fensterContentContainer = document.getElementById('fenster-content');
    fensterContentContainer.style.left = '-100%';
});

const mainRightArrow = document.getElementById('arrow-right');
mainRightArrow.addEventListener('click', () => {
    const mainContentContainer = document.getElementById('main-content');
    mainContentContainer.style.left = '-100%';

    const treppenContentContainer = document.getElementById('treppen-content');
    treppenContentContainer.style.left = '0';

    if(!treppenPhotosAdded){
        for (i = 1; i <= 45; i++){
            let img = document.createElement('img');
            img.src = `./img/treppen-images-360/HomeLineTreppen${i}.webp`;
            img.alt = 'HomeLine Treppen und Innent??ren.';
            // img.width = '360';
            img.height = '270';
            treppenContentContainer.querySelector('.photos').appendChild(img);
        }
        treppenPhotosAdded = true;
    }
});

const treppenLeftArrow = document.getElementById('arrow-left-treppen');
treppenLeftArrow.addEventListener('click', () => {
    const mainContentContainer = document.getElementById('main-content');
    mainContentContainer.style.left = '0%';

    const treppenContentContainer = document.getElementById('treppen-content');
    treppenContentContainer.style.left = '100%';
});


const mainArticles = document.querySelectorAll('#main-content article');
mainArticles[0].addEventListener('click', () => {
    document.querySelector('#arrow-left').click();
});
mainArticles[1].addEventListener('click', () => {
    document.querySelector('#arrow-right').click();
});

let menuExpanded = false;
const menuButton = document.querySelector('#hamburger');
menuButton.addEventListener('click', () => {
    document.querySelector('#content').classList.toggle('blured');
    const nav = document.querySelector('nav');
    if (menuExpanded){
        nav.style.maxHeight = '0px';
        menuExpanded = false;
    } else {
        nav.style.maxHeight = '100px';
        menuExpanded = true;
    }
});