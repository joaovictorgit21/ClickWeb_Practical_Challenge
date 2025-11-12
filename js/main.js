const sections = document.querySelectorAll('.first-section, .second-section, .three-section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

sections.forEach(section => {
    observer.observe(section);
});

