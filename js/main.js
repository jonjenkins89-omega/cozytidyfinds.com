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

    var newsletterForm = document.querySelector('form.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            var emailInput = newsletterForm.querySelector('input[type="email"]');
            var button = newsletterForm.querySelector('button[type="submit"]');
            var email = emailInput.value.trim();
            if (!email) { return; }
            button.disabled = true;
            button.textContent = 'Subscribing...';
            var body = 'fields%5Bemail%5D=' + encodeURIComponent(email) + '&ml-submit=1&anticsrf=true';
            fetch(newsletterForm.action, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: body
            }).then(function(res) { return res.json(); }).then(function(data) {
                if (data && data.success) {
                    newsletterForm.innerHTML = '<p class="newsletter-success">You\'re in! Watch for Friday\'s finds. &#127881;</p>';
                    gtag('event', 'newsletter_signup', { location: window.location.pathname });
                } else {
                    button.disabled = false;
                    button.textContent = 'Subscribe';
                    var msg = 'Please double-check that email and try again.';
                    emailInput.setCustomValidity(msg);
                    emailInput.reportValidity();
                    setTimeout(function() { emailInput.setCustomValidity(''); }, 3000);
                }
            }).catch(function() {
                button.disabled = false;
                button.textContent = 'Subscribe';
                emailInput.setCustomValidity('Something went wrong. Please try again in a minute.');
                emailInput.reportValidity();
                setTimeout(function() { emailInput.setCustomValidity(''); }, 3000);
            });
        });
    }
});
