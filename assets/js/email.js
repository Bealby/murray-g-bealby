// Script for EmailJS API as well as alerts
// Environ variable set up for EMAILJS_KEY
function sendMail(contactForm) {
    emailjs.send("gmail", "murray_bealby", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "comment": contactForm.comment.value
    })
    .then(
        function(response) {
            // Message Alert for 'Message Sent'
            swal("Message Sent");
            console.log("SUCCESS", response);
            // Clears contact form after message sent
            document.getElementById("myForm").reset();
        },
        function(error) {
            // Message Alert for 'Message Fail'
            swal("Message Fail", "Please check connection and try again", "error");
            console.log("FAILED", error);
        }
    );

    return false;  // To block from loading a new page
}