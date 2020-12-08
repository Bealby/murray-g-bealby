// Script for EmailJS API as well as alerts

function sendMail(contactForm) {
    emailjs.send("gmail", "murray_bealby", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "comment": contactForm.comment.value
    })
    .then(
        function(response) {
            // Clears contact form after message sent
            document.getElementById("myForm").reset();
             // Message Alert for 'Message Sent'
            swal("Message Sent");
            console.log("SUCCESS", response);
            setTimeout(function(){
            window.location.reload(1);
            }, 5000);
        },
        function(error) {
            // Message Alert for 'Message Fail'
            swal("Message Fail", "Please check connection and try again", "error");
            console.log("FAILED", error);
        }
    );

    return false;  // To block from loading a new page
}
