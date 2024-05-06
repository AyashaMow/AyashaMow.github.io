document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert("Please fill in all fields");
      return;
    }
  
    // Here you would typically send the form data to a server using AJAX or similar method.
    // For this example, let's just show a success message.
    document.getElementById("success-message").classList.remove("hidden");
    setTimeout(function() {
      document.getElementById("success-message").classList.add("hidden");
      document.getElementById("contact-form").reset();
    }, 3000);
  });
  