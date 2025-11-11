document.addEventListener('DOMContentLoaded', function() {

    const page = window.location.pathname.split("/").pop();

    if(page === "index.html" || page === "index.html") {
        alert("Welcome to Wamala Elijah's Home Page!");
    } 
    else if(page === "about.html") {
        alert("Get to know Wamala Elijah on the About Page!");
    } 
    else if(page === "education.html") {
        alert("Check out Wamala Elijah's Education & Academic Achievements!");
    } 
    else if(page === "gallery.html") {
        alert("Explore the Gallery of Wamala Elijah's Work & Interests!");
    } 
    else if(page === "contact.html") {
        alert("Feel free to contact Wamala Elijah!");
    }

    const backBtn = document.querySelector('a[href="#top"]');
    if(backBtn) {
        backBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        backBtn.addEventListener('mouseover', () => backBtn.style.backgroundColor = 'darkred');
        backBtn.addEventListener('mouseout', () => backBtn.style.backgroundColor = 'navy');
    }
});

