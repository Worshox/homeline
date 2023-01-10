const entryScreen = document.querySelector('#entry-screen');
entryScreen.addEventListener('animationend', () => {
    entryScreen.remove();
});

const contactButton = document.querySelector('#contact-button');
contactButton.addEventListener('click', () => {
    document.getElementById('contact').classList.toggle('shrinked');
    document.querySelector('#content').classList.toggle('blured');  
});


const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

const contactContainer = document.querySelector('#contact');
contactContainer.style.top = `${headerHeight}px`;


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
            img.src = `./img/fenster-images/HomeLineFenster${i}.webp`;
            img.alt = 'HomeLine Fenster, Garagentore, Rollos.'
            img.setAttribute('loading', 'lazy');
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
            img.src = `./img/treppen-images/HomeLineTreppen${i}.webp`;
            img.alt = 'HomeLine Treppen und Innentüren.';
            // img.loading = 'lazy';
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