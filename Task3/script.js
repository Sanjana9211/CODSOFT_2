const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));
let displayValue = '0';

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.getAttribute('data-value');

        switch(value) {
            case 'C':
                displayValue = '0';
                break;
            case '=':
                try {
                    displayValue = eval(displayValue);
                } catch {
                    displayValue = 'Error';
                }
                break;
            default:
                if (displayValue === '0') {
                    displayValue = value;
                } else {
                    displayValue += value;
                }
        }

        display.innerText = displayValue;
    });
});
