const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    const text = button.textContent;
    const width = button.offsetWidth;
    const maxWidth = button.style.maxWidth;

    if (width > maxWidth) {
        button.style.fontSize = '1em';
    }
});
