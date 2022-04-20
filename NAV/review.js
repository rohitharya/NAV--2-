const wrapperss = document.querySelector('.wrapperss');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('active');
        wrapperss.style.marginLeft = `-${100 * i}%`;
        item.classList.add('active');
        currentTestimonial = i;
    })
})