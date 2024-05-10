const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

function addItem(e: Event) {
    e.preventDefault();
    // const text = (document.querySelector("[name=item]")).value;
    const text = (this.querySelector("[name=item]")).value;
    const item = {
        text,
        done: false,
    };
    this.reset(); // clear the input field
}

addItems.addEventListener("submit", addItem);
