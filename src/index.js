const valueViewfinder = document.getElementById('valueviewfinder');
const calculator = document.getElementById('calculator');

const viewfinder = [''];

KeyPressCalcFunction();
HoverButtonKeyPress();
ClickCalcFunction();

function KeyPressCalcFunction() {
    document.addEventListener('keydown', (event) => {
        const value = event.key;
        const viewfinderSize = viewfinder.length;
        const lastElementViewfinder = viewfinder.length - 1;

        if (value === 'Escape') {
            viewfinder.splice(0, viewfinderSize)
        }

        else if (value === 'Shift') { }

        else if (value === '=' || value === ' Enter') {
            try {
                var result = eval(viewfinder.toString().replaceAll(',', ''))
                viewfinder.splice(0, viewfinderSize)
                viewfinder.push(result.toString())
            }

            catch (err) {
            }
        }

        else {

            if (isNaN(viewfinder[lastElementViewfinder])) {
                viewfinder.push(value);
            }

            else if (!isNaN(value)) {
                var newValue = viewfinder[lastElementViewfinder] + value;
                viewfinder[lastElementViewfinder] = newValue;
            }

            else if (viewfinderSize >= 3) {
                var result = eval(viewfinder.toString().replaceAll(',', ''))
                viewfinder.splice(0, viewfinderSize)
                viewfinder.push(result.toString())
                if (value !== '=' || value !== 'Enter') {
                    viewfinder.push(value)
                }
            }

            else {
                viewfinder.push(value)

            }
        }

        viewfinder.length > 0 ? valueViewfinder.innerHTML = viewfinder.toString().replaceAll(',', ' ') : valueViewfinder.innerHTML = '0';
    })
}

function ClickCalcFunction() {
    calculator.addEventListener('click', (event) => {
        const value = document.getElementById(event.target.id).getAttribute("value");
        const viewfinderSize = viewfinder.length;
        const lastElementViewfinder = viewfinder.length - 1;

        if (value === 'reset') {
            viewfinder.splice(0, viewfinderSize)
            valueViewfinder.innerHTML = '0';
        }

        else if (value == '=') {
            try {
                var result = eval(viewfinder.toString().replaceAll(',', ''))
                viewfinder.splice(0, viewfinderSize)
                viewfinder.push(result.toString())
            }

            catch (err) {
            }
        }

        else {

            if (isNaN(viewfinder[lastElementViewfinder])) {
                viewfinder.push(value);
            }

            else if (!isNaN(value)) {


                var newValue = viewfinder[lastElementViewfinder] + value;
                viewfinder[lastElementViewfinder] = newValue;
            }

            else if (viewfinderSize >= 3) {
                var result = eval(viewfinder.toString().replaceAll(',', ''))
                viewfinder.splice(0, viewfinderSize)
                viewfinder.push(result.toString())
                if (value !== '=') {
                    viewfinder.push(value)
                }
            }

            else {
                viewfinder.push(value)
            }
        }

        valueViewfinder.innerHTML = viewfinder.toString().replaceAll(',', ' ');
    })
}

function HoverButtonKeyPress() {
    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        switch (event.key) {
            case '1':
                HoverButton("one", "hoverbutton");
                break;

            case '2':
                HoverButton("two", "hoverbutton");
                break;

            case '3':
                HoverButton("three", "hoverbutton");
                break;

            case '4':
                HoverButton("four", "hoverbutton");
                break;

            case '5':
                HoverButton("five", "hoverbutton");
                break;

            case '6':
                HoverButton("six", "hoverbutton");
                break;

            case '7':
                HoverButton("seven", "hoverbutton");
                break;

            case '8':
                HoverButton("eight", "hoverbutton");
                break;

            case '9':
                HoverButton("nine", "hoverbutton");
                break;

            case '0':
                HoverButton("zero", "hoverbutton");
                break;

            case '+':
                HoverButton("sum", "hoverbutton");
                break;

            case '-':
                HoverButton("subtraction", "hoverbutton");
                break;

            case '/':
                HoverButton("bar", "hoverbutton");
                break;

            case '*':
                HoverButton("multi", "hoverbutton");
                break;

            case '=':
                HoverButton("equals", "hoverequals");
                break;

            case '.':
                HoverButton("dot", "hoverbutton");
                break;

            case '.':
                HoverButton("dot", "hoverbutton");
                break;

            case 'Escape':
                HoverButton("reset", "hoverreset");
        }
    })
}

function HoverButton(id, classname) {
    var key = document.getElementById(id);
    key.classList.add(classname)
    setTimeout(() => {
        key.classList.remove(classname);
    }, 200)
}