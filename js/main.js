window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-XXXXXXXXXX');

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.affiliate-link').forEach(function(link) {
        link.addEventListener('click', function() {
            gtag('event', 'affiliate_click', {
                product: this.dataset.product,
                category: this.dataset.category,
                link_url: this.href
            });
        });
    });

    var menuToggle = document.querySelector('.menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.querySelector('nav .links').classList.toggle('open');
        });
    }
});
