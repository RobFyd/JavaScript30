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
    console.log(item);
}

addItems.addEventListener("submit", addItem);
