$(document).ready(function() {
    
    $(".menu-button").click(function() {
        $(".menu").toggleClass("active");
    });
});

$(document).ready(function() {
    // Example: Alert user on service click
    $(".service h2").click(function() {
        alert("You selected: " + $(this).text());
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item');

    newsItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('You clicked on: ' + this.querySelector('h2').innerText);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const name = document.getElementById('name').value;
        const surname = document.getElementById('surname').value;
        const message = document.getElementById('message').value;

        // Display feedback
        alert(`Thank you, ${name} ${surname}! Your message has been sent: "${message}"`);

        // Optionally, reset the form
        contactForm.reset();
    });
});

