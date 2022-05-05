const saveBtn = document.getElementById('save-btn');

saveBtn.addEventListener('click', function dbCalorie(event) {
    console.log(event.target.parentElement.id);
});