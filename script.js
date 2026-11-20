

document.addEventListener("DOMContentLoaded", () => {
 
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
     
      event.preventDefault();

    
      const name = document.getElementById("name").value.trim();

      
      formMessage.style.color = "#16a34a";
      formMessage.textContent = `Thank you, ${name}! Your message has been sent successfully.`;

   
      contactForm.reset();

    
      setTimeout(() => {
        formMessage.textContent = "";
      }, 5000);
    });
  }
});
