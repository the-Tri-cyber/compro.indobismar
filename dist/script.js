
// for contact
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener("submit", function(e){
    e.preventDefault();

    const url = e.target.action;
    const formData = new FormData(contactForm);
    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    }).then(() => {
        //url thankyou
        window.location.href="thankyou.html";
    }).catch((e) => alert("alert occured"));
});

// menu hamburger

document.getElementById('menuButton').addEventListener('click', function() {
    var menuButton = this;
    var menuList = document.getElementById('menuList');
    var isExpanded = menuButton.getAttribute('aria-expanded') === 'true';

    // Toggle aria-expanded attribute
    menuButton.setAttribute('aria-expanded', String(!isExpanded));
    menuList.setAttribute('aria-expanded', String(!isExpanded));

    // Toggle display style
    menuList.style.display = isExpanded ? 'none' : 'block';
});