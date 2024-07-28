function typefunction() {
    var typed = new Typed('.Typedelement', {
        strings: ['I Am Into Web Development', 'I Am Into DSA'],
        typeSpeed: 40,
        backSpeed: 40,
        cursorChar: '■',
        loop: true, 
    });

    typed.onComplete(() => {
        typed.destroy();
        typefunction(); 
    });
}

document.addEventListener('DOMContentLoaded', typefunction);



// Selecting elements by their IDs
let home = document.getElementById("home");
let skills = document.getElementById("skills");
let education = document.getElementById("education");
let contact = document.getElementById("contact");
let about = document.getElementById("about");

// Function to handle acknowledgment
function handleTouch(elementId) {
    alert(`Field with Name[${elementId}] is Under Construction.`);
}


home.addEventListener('click', function() {
    handleTouch('home');
});

skills.addEventListener('click', function() {
    handleTouch('skills');
});

education.addEventListener('click', function() {
    handleTouch('education');
});

contact.addEventListener('click', function() {
    handleTouch('contact');
});

about.addEventListener('click', function() {
    handleTouch('about');
});




