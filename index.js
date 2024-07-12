 const display = document.querySelector("#input");
const buttons = document.querySelectorAll(".button");

buttons.forEach( (button) => {
    button.addEventListener("click", (e) => {
        // selecting buttons and assign to button_value
        let button_value = e.target.textContent;
        
        // appending the value to display variable
        display.value += button_value;

        if (button_value === "C") {
            display.value = "";
        }
        else if (button_value === "del") {
            display.value = display.value.slice(0, -4);
        }
        else if(button_value == ('=') ) {
            try {
                const sanitizedValue = display.value.replace(/[^-()\d/*+.]/g, '');
                display.value = eval(sanitizedValue);
            } catch (error) {
                display.value = "Error"; 
            }
           
        }   
    })
})



