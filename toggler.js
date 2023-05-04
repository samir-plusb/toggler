export default class Toggler {
    constructor() {
        this.initToggler();
    }

    initToggler() {
        const inputs = document.querySelectorAll('[data-toggle-target]');

        inputs.forEach((input) => {
            input.addEventListener('input', (event) => {
                this.handleInput(event.target);
            });
        });
    }

    handleInput(input) {
        const toggleTarget = input.dataset.toggleTarget;
        const toggleValue = input.dataset.toggleValue;
        const targetElements = document.querySelectorAll(toggleTarget);

        targetElements.forEach((element) => {
            if (input.value === toggleValue) {
                element.classList.add('toggler-hidden');
            } else {
                element.classList.remove('toggler-hidden');
            }
        });
    }
}
