parallaxx = document.getElementById("parallax-background");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallaxx.style.backgroundPositionY = offset * -0.22 + "px";
})