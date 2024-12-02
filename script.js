let string = "";
let buttons = document.querySelectorAll('.button') //selecting all the buttons whose class name is button 
Array.from(buttons).forEach((button) => { //storing them into an array
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            console.log(e.target);
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML == "C") {
            console.log(e.target);
            string = "";
            document.querySelector('input').value = string;
        } else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})