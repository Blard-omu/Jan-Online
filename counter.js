const result = document.querySelector('.result');
const increase = document.querySelector('.inc');
const decrease = document.querySelector('.dec');
const reset = document.querySelector('.res');
const display = document.querySelector('.display');
const heading = document.querySelector('#heading');
// console.log(header);
// console.log(result);
// console.log(increase);
// console.log(decrease);
// console.log(reset);
// console.log(display);

// for increase
increase.addEventListener('click', function handleIncrease(){
    result.innerHTML ++;
    handleColorChange();
})
// for decrease
decrease.addEventListener('click', function handleDecrease(){
    result.innerHTML --;
    handleColorChange();
})
// for reset
reset.addEventListener('click', function handleReset(){
    result.innerHTML = 0;
    handleColorChange();
})

function handleColorChange(){
    if(result.innerHTML < 0){
        // display.style.backgroundColor = "red";
        // display.style.color = "white";
        display.classList.remove('display')
        display.classList.remove('display-green')
        display.classList.add('display-red')
        heading.innerHTML = "Negative Number!"
    }else if(result.innerHTML > 0){
        // display.style.backgroundColor = "green";
        // display.style.color = "white";
        display.classList.remove('display')
        display.classList.remove('display-red')
        display.classList.add('display-green')
        heading.innerHTML = "Positive Number!"
    }else{
        // display.style.backgroundColor = "white";
        // display.style.color = "black";
        display.classList.add('display')
        display.classList.remove('display-red')
        display.classList.remove('display-green')
        heading.innerHTML = "Blard Counter"
    }
}
