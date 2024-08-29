/* istanbul ignore file */
try {
    const { isValid } = require('./services/validations');

    const body = document.getElementById('body');

    const leapYearInput = document.getElementById('leapYearInput');
    const checkButton = document.getElementById('leapYearCheckButton');
    const resetButton = document.getElementById('resetButton');
    const feedbackMessage = document.getElementById('leapYearFeedback');

    const isLeapYearMessage = (isLeapYearValid) =>
        `Year is ${isLeapYearValid ? '' : 'not'} leap year`;

    const defaultBackgroundColor = `background:linear-gradient(
                90deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(9, 9, 121, 1) 35%,
                rgba(0, 212, 255, 1) 100%
            ) !important`;

    const greenBackgroundColor = `background:linear-gradient(
                90deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(11, 255, 168, 1) 35%,
                rgba(0, 212, 0, 1) 100%
            ) !important`;

    const redBackgroundColor = `background:linear-gradient(
                90deg,
                rgba(2, 0, 36, 1) 0%,
                rgba(200, 9, 70, 1) 35%,
                rgba(255, 0, 0, 1) 100%
            ) !important`;

    let leapYearValue;

    leapYearInput.addEventListener('change', (event) => {
        leapYearValue = event.target.value;
    });

    checkButton.addEventListener('click', () => {
        const validationResult = isValid(leapYearValue);
        // Console log to help display the current value (cf. browser inspector -> console tab)
        // eslint-disable-next-line no-console
        console.log('Leap year input :', leapYearValue);
        feedbackMessage.textContent = isLeapYearMessage(validationResult);

        body.setAttribute(
            'style',
            validationResult ? greenBackgroundColor : redBackgroundColor
        );
    });

    resetButton.addEventListener('click', () => {
        feedbackMessage.textContent = '';
        body.setAttribute('style', defaultBackgroundColor);
    });
} catch (err) {
    // eslint-disable-next-line no-console
    console.error(JSON.stringify(err));
}
