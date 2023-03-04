function initSubMenu() {
    // nav-s5
    document.getElementById("nav-s1").classList.remove("open");
    document.getElementById("nav-s2").classList.remove("open");
    document.getElementById("nav-s3").classList.remove("open");
    document.getElementById("nav-s4").classList.remove("open");
    document.getElementById("nav-s5").classList.remove("open");
}
function trackSectionMenu() {
    const header = document.getElementById("header");
    const sections = document.querySelectorAll("section");
    const navSectionAnchors = document.querySelectorAll(".nav-s");

    navSectionAnchors.forEach((e) => {
        e.classList.remove("active");
    })

    const positions = []
    positions.push(header.offsetTop + header.offsetHeight);

    for (let i=0;i<sections.length;i++) {
        positions.push(sections[i].offsetTop + sections[i].offsetHeight - 10);
    }

    const curY = window.scrollY;

    if (curY < positions[0]) {
        navSectionAnchors[0].classList.add("active");
    } else if (curY < positions[1]) {
        navSectionAnchors[1].classList.add("active");
    } else if (curY < positions[2]) {
        navSectionAnchors[2].classList.add("active");
        document.getElementById("nav-s1").classList.add("open");
    } else if (curY < positions[3]) {
        navSectionAnchors[3].classList.add("active");
        document.getElementById("nav-s2").classList.add("open");
    } else if (curY < positions[4]) {
        navSectionAnchors[4].classList.add("active");
        document.getElementById("nav-s3").classList.add("open");
    } else if (curY < positions[5]) {
        navSectionAnchors[5].classList.add("active");
        document.getElementById("nav-s4").classList.add("open");
    } else if (curY < positions[6]) {
        navSectionAnchors[6].classList.add("active");
        document.getElementById("nav-s5").classList.add("open");
    }
}

function trackSubSectionMenu() {
    const subSections = document.querySelectorAll("sub-section");
    const navSubSectionAnchors = document.querySelectorAll(".sub-menu > a");

    navSubSectionAnchors.forEach((e) => {
        e.classList.remove("active");
    })

    const positions = []

    for (let i=0;i<subSections.length;i++) {
        positions.push(subSections[i].offsetTop + subSections[i].offsetHeight - 10);
    }

    const curY = window.scrollY;

    for (let i=0;i<positions.length;i++) {
        if (curY < positions[i]) {
            navSubSectionAnchors[i].classList.add("active");
            break;
        }
    }
}

window.addEventListener("load", (event) => {
    trackSectionMenu();
    trackSubSectionMenu();
});

window.addEventListener("scroll", (event) => {
    initSubMenu();
    trackSectionMenu();
    trackSubSectionMenu();
});