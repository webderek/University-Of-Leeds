const btnMeeting = document.querySelector('.meeting--btn');
const dropdown = document.querySelector('.wrapper--dropdown');
btnMeeting.addEventListener('click', function (evt) {
    dropdown.classList.toggle('hidden')
})