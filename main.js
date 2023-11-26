
var typed = new Typed(".textTyped", {
    strings: ["Programmer", "Network Engineer", "Full Stack Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    BackDelay: 1000,
    loop: true
});


// Add your JavaScript here
function sendMail() {
  var formData = {
    name: document.getElementsByName('name')[0].value,
    email: document.getElementsByName('email')[0].value,
    subject: document.getElementsByName('subject')[0].value,
    message: document.getElementsByName('message')[0].value
  };

  var body = 'Name: ' + formData.name + '\nEmail: ' + formData.email + '\nSubject: ' + formData.subject + '\nMessage: ' + formData.message;
  var mailtoLink = 'mailto:kennyli0023@gmail.com?subject=' + encodeURIComponent(formData.subject) + '&body=' + encodeURIComponent(body);

  // Open the mailto link in a new tab/window
  window.open(mailtoLink, '_blank');
}
