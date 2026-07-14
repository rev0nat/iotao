const sections = document.querySelectorAll(".section-paw-mark");


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("is-visible");

            }

        });

    },
    {
        threshold: 0.35
    }
);


sections.forEach(section => {
    observer.observe(section);
});