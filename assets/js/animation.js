document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.slide-in');

    const options = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});