function sendMail(contactForm) {
    emailjs.send("gmail", "project-requesr", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            alert("Thank you for your message. We will be in touch shortly.");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Sorry, there was a problem sending your message. Please try again later.");
        }
    );
    return false;  // To block from loading a new page
}