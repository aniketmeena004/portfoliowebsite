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



function openGmail() {
    const recipient = 'aniketmeena004@gmail.com'; // Replace with the desired recipient email address
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(recipient)}`;
    window.open(gmailComposeUrl, '_blank');
}
async function copyToClipboard() {
    const textToCopy = '+919821582939'; // Text you want to copy

    try {
        await navigator.clipboard.writeText(textToCopy);
        // Optional: Alert or provide feedback
        alert('Mobile Number copied to clipboard!');
    } catch (err) {
        console.error('Failed to copy text: ', err);
    }
}







