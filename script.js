
document.addEventListener("DOMContentLoaded", () => {
    const cta = document.querySelector('.cta-button');
    cta.addEventListener('click', () => {
        document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
    });
});
