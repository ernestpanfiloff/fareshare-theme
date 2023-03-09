const hamburger = document.querySelector(".header-content-hamburger");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const ty = document.querySelector(".donate-content-ty");


// Animation that turns the hamburger into an X when clicked
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
});


card1.addEventListener("click", () => {
    card1.classList.add("selected");
    card2.classList.remove("selected");
    card3.classList.remove("selected");
    ty.innerHTML = `<p>Thank you! You have selected £25.</p>
    <button class="button button-yellow">Donate now</button>
    `
});

card2.addEventListener("click", () => {
    card1.classList.remove("selected");
    card3.classList.remove("selected");
    card2.classList.add("selected");
    ty.innerHTML = `<p>Thank you! You have selected £50.</p>
    <button class="button button-yellow">Donate now</button>
    `
});

card3.addEventListener("click", () => {
    card1.classList.remove("selected");
    card2.classList.remove("selected");
    card3.classList.add("selected");
    ty.innerHTML = `<p>Thank you! You have selected £250.</p>
    <button class="button button-yellow">Donate now</button>
    `
});

