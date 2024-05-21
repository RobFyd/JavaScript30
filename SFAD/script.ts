console.log('Hello, World!');

const triggers = document.querySelectorAll('.cool > li') as NodeListOf<HTMLLIElement>;
const background = document.querySelector('.dropdownBackground') as HTMLDivElement;
const nav = document.querySelector('.top') as HTMLElement;

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown') as HTMLElement;
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();
    
    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));