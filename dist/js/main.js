! function() {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
    })
    
    const e = window,
        t = document.documentElement;
    t.classList.remove("no-js"), t.classList.add("js");
    const i = document.querySelector(".site-header-large-bg span");

    function n() {
        const e = t.getElementsByTagName("body")[0].clientHeight;
        i.style.height = `${e}px`
    }
    if (n(), e.addEventListener("load", n), e.addEventListener("resize", n), document.body.classList.contains("has-animations")) {
        const e = window.sr = ScrollReveal();
        e.reveal(".hero-title, .hero-paragraph, .newsletter", {
            duration: 1e3,
            distance: "40px",
            easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
            origin: "top",
            interval: 150
        }), e.reveal(".hero-ball", {
            delay: 1e3,
            duration: 1400,
            distance: "40px",
            easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
            origin: "bottom",
            interval: 200
        }), e.reveal(".hero-illustration-browser, .hero-squares", {
            delay: 400,
            duration: 600,
            distance: "40px",
            easing: "cubic-bezier(0.5, -0.01, 0, 1.005)",
            origin: "right",
            interval: 150
        })
    }
}();