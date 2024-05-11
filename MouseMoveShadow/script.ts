const hero: HTMLDivElement = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100; // 100px

function shadow(e: MouseEvent) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  //     const { offsetWidth: width, offsetHeight: height } = hero; // Destructuring but same as above
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  console.log(x, y);

    const xWalk = Math.round(x / width * walk) - (walk / 2);
    const yWalk = Math.round(y / height * walk) - (walk / 2);

    console.log(xWalk, yWalk);

    text.style.textShadow = `${xWalk}px ${yWalk}px 0 red`;
}

hero.addEventListener("mousemove", shadow);
