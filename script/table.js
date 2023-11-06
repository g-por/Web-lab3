document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.querySelectorAll('.banks tr, .schedule tr');
    const mainMenuRows = document.querySelectorAll('.menu-links tr');

    tableRows.forEach((row) => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = 'lightgray';
        });

        row.addEventListener('mouseleave', () => {
            row.style.backgroundColor = '';
        });
    });

    mainMenuRows.forEach((row) => {
        row.addEventListener('mouseenter', () => {
            row.style.backgroundColor = '';
        });
    });
});
