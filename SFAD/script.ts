console.log('Hello, World!');

const triggers = document.querySelectorAll('.cool > li') as NodeListOf<HTMLLIElement>;
const background = document.querySelector('.dropdownBackground') as HTMLDivElement;
const nav = document.querySelector('.top') as HTMLElement;

function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.add('trigger-enter-active'), 150);

}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));