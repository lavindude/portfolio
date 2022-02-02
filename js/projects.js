window.addEventListener('scroll', () => {
    var divTags = document.querySelectorAll('.animate');
    divTags.forEach((element) => {
        var contentPosition = element.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;

        if (contentPosition < screenPosition) {
            element.classList.add('active');
        }

        else {
            element.classList.remove('active');
        }
    })
})