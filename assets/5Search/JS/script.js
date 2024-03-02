const container = document.getElementById('_container');
const input = container.querySelector('.search');
const button = container.querySelector('#_button');
const searchIcon = container.querySelector('#_searchIcon');
const closeIcon = container.querySelector('#_closeIcon');

button.addEventListener('click', () => {
    container.classList.toggle('active');
    button.classList.toggle('active');

    if (container.classList.contains('active')) {
        searchIcon.classList.toggle('active');
        closeIcon.classList.toggle('active');
        input.focus();
    } else {
        searchIcon.classList.toggle('active');
        closeIcon.classList.toggle('active');
    }
});
