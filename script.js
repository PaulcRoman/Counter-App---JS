const value = document.querySelector(".value");
const btnIncrement = document.querySelector(".increment");
const btnDecrement = document.querySelector(".decrement");
const btnReset = document.querySelector(".reset");

let count = 0;

btnIncrement.addEventListener("click",()=>{
    count ++;
    value.textContent = count;
});

btnDecrement.addEventListener("click", () => {
    count --;
    value.textContent = count;
});

btnReset.addEventListener("click", () => {
    count = 0;
    value.textContent=count;
});