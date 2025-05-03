let scrollToTopBtn = document.getElementById("scrollToTopBtn");          

function scrollFunction() {
    if (document.body.scrollTop >= 30 || document.documentElement.scrollTop >= 30) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

window.addEventListener("scroll", scrollFunction)
scrollToTopBtn.addEventListener("click", topFunction)
