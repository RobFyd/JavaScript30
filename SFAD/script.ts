console.log('Hello, World!');

const triggers = document.querySelectorAll('.cool > li') as NodeListOf<HTMLLIElement>;
const background = document.querySelector('.dropdownBackground') as HTMLDivElement;
const nav = document.querySelector('.top') as HTMLElement;

function handleEnter() {

}

function handleLeave() {

}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));