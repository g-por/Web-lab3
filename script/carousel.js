window.addEventListener("load", () => {
    var carousels = document.querySelectorAll(".carousel-3d");
    for (var i = 0; i < carousels.length; i++) {
        carousel(carousels[i]);
    }
});

function carousel(root) {
    var figure = root.querySelector("figure"),
    nav = root.querySelector("nav"),
    images = figure.children,
    n = images.length,
    gap = root.dataset.gap || 0,
    bfc = "bfc" in root.dataset,
    theta = 2 * Math.PI / n,
    currImage = 0;
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
    setupNavigation();
    function setupCarousel(n, s) {
        var apothem = s / (2 * Math.tan(Math.PI / n));
        figure.style.transformOrigin = `50% 50% ${-apothem}px`;
        for (var i = 0; i < n; i++) images[i].style.padding = `0 ${gap}px`;
        for (i = 0; i < n; i++) {
            images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
            images[i].style.transform = `rotateY(${i * theta}rad)`;
        }
        //if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";

        rotateCarousel(currImage);
    }
    function setupNavigation() {
        var prevButton = document.getElementById("prevButton");
        var nextButton = document.getElementById("nextButton");
        
        nav.addEventListener("click", onClick, true);
        
        function onClick(e) {
            e.stopPropagation();
            var t = e.target;
            if (t.tagName.toUpperCase() != "BUTTON") return;
            var step = 3;
            
            if (t.classList.contains("next")) {
                currImage += step;
            } else {
                currImage -= step;
            }
            
            if (currImage <= 0) {
                prevButton.disabled = true;
                prevButton.classList.add("disabled");
                currImage = 0;
            } else {
                prevButton.disabled = false;
                prevButton.classList.remove("disabled");
            }
            
            if (currImage >= n - 1) {
                nextButton.disabled = true;
                nextButton.classList.add("disabled");
                currImage = n - 1;
            } else {
                nextButton.disabled = false;
                nextButton.classList.remove("disabled"); 
            }
            
            
            rotateCarousel(currImage);
                    }

    }

    function rotateCarousel(imageIndex) {
        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
}
function expandPhoto() {
    let overlay = document.createElement("div");
    overlay.setAttribute("id", "overlay");
    overlay.setAttribute("class", "overlay");

    let img = document.createElement("img");
    img.setAttribute("id", "img");
    img.src = this.src;
    img.className = "overlayimg";

    overlay.appendChild(img);

    let closeButton = document.createElement("div");
    closeButton.className = "close-button";
    closeButton.innerText = "X";
    closeButton.onclick = restore;

    img.style.position = "relative";

    overlay.appendChild(closeButton);

    document.body.appendChild(overlay);
}

function restore() {
    document.body.removeChild(document.getElementById("overlay"));
}

window.onload = function () {
    let imgs = document.querySelectorAll(".car-image");

    for (let i = 0; i < imgs.length; i++) {
        imgs[i].onclick = expandPhoto;
    }
};