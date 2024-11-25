document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', function() {
            const faqItem = item.parentNode;
            const answer = item.nextElementSibling;
            if (faqItem.classList.contains('active')) {
                faqItem.classList.remove('active');
                answer.style.display = 'none';
            } else {
                faqItem.classList.add('active');
                answer.style.display = 'block';
            }
        });
    });
});
