document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.main__certifictes article');
    const btn = document.getElementById('showAllBtn');
    articles.forEach((a, i) => { if (i > 3) a.style.display = 'none'; });
    btn.addEventListener('click', function () {
        articles.forEach(a => a.style.display = '');
        btn.style.display = 'none';
    });

    articles.forEach(a => {
        a.style.transition = 'opacity 0.5s';
        if (a.style.display === 'none') {
            a.style.opacity = 0;
        } else {
            a.style.opacity = 1;
        }
    });

    btn.addEventListener('click', function () {
        articles.forEach(a => {
            a.style.display = '';
            setTimeout(() => {
                a.style.opacity = 1;
            }, 10);
        });
        btn.style.display = 'none';
    });

});

