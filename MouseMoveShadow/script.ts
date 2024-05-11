const hero: HTMLDivElement = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e: MouseEvent) {

}

hero.addEventListener('mousemove', shadow);