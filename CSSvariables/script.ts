const inputs = document.querySelectorAll('.controls input') as NodeListOf<HTMLInputElement>;

function handleUpdate() {
    console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));