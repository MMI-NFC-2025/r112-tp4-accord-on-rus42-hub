// *** ACCORDEON ***
const accord = document.querySelector(".accordeon");

accord.querySelectorAll("details").forEach(det => {
    det.addEventListener("click", () => {
        accord.querySelectorAll("details").forEach(d => {
            if (d !== det) d.open = false;
        });
    });
});

