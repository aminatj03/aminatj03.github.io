// JavaScript validation for House of CB Form
document.getElementById('contactForm').addEventListener('submit', function(event) {
// Attaching an event listener to the contact us form. This will prevent the form from submitting immediately
     event.preventDefault();



   // Get the email value and the email error display Element 
      var email = document.getElementById('email').
    value;
// Setting up a varibale for the email

      var emailError = document.getElementById('emailError');
    //Setting up a variable for emailError.

    //Define a regular expression (regex) pattern for basic email validation
      var emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //^ This looks at the number of characters within the email and then checks for a number of things such as, the @ symbol, the dots etc 

    //Check if the email matches this pattern
      if (!emailPattern.test(email)) {
    // If email doesn't match, show an error message
    emailError.textContent = 'Please enter a valid email address.';
  }   else {
    // Clear any error if the email is valid 
    emailError.textContent = '';

    // Show a success message
      alert('Thank you for your query. We will get back to you shortly.');
  }
});