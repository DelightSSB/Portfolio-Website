function sendMail() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();


emailjs.send("service_9xbp9x8","template_f9jemx8",{
subject: subject,
name: name,
message: message,
email: email,
})
    .then(() => {
      alert("Thank you! Your email has been sent!");
      document.getElementById("contactForm").reset();
    })
    .catch((err) => {
      console.error("EmailJS error:", err);
      alert("There was a problem sending your message.");
    });
}
