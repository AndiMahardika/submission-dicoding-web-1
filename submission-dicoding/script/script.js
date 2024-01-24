const btnInfo = document.querySelectorAll(".btn-info");
const btnMore = document.querySelectorAll('.btn-read-more');

btnMore.forEach(a => {
    a.addEventListener('click', function(e){
        const textElement = this.closest('.card').querySelector('.text');
        textElement.classList.toggle('show-text');

        if (this.innerText === 'Read More') {
            this.innerText = 'Read Less';
        } else {
            this.innerText = 'Read More';
        }
    });
});

btnInfo.forEach(btn => {
    btn.addEventListener('click',function(){
        const alertBox = alertbox();
        document.body.insertAdjacentHTML('beforeend', alertBox);
    });
});

function alertbox(){
    return `<div class="alert">
                <img src="img/icon-alert.png" alt="">
                <p>Maaf kak cerita belum tersedia</p>
                <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
            </div>`
}
