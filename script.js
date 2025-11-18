// Highlight current page link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Read More
const btn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("more");
const dots = document.getElementById("dots");

if (btn) {
  btn.addEventListener("click", () => {
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      dots.style.display = "none";
      btn.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      dots.style.display = "inline";
      btn.textContent = "Read More";
    }
  });
}

// LIGHTBOX
const images = document.querySelectorAll('.service-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

if (images && lightbox && lightboxImg && closeBtn) {
  images.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });
}

// ================================
// CONTACT FORM
// ================================
const contactForm = document.getElementById("contactForm");
const resultMessage = document.getElementById("resultMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let fullName = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let type = document.getElementById("messageType").value;
    let message = document.getElementById("message").value.trim();

    if (!fullName || !email || !phone || !type || !message) {
      resultMessage.innerHTML = `<p style="color:red;">Please fill in all fields.</p>`;
      return;
    }

    resultMessage.innerHTML = `
      <p style="color:green;">Your message has been submitted successfully!</p>
      <strong>Type:</strong> ${type}<br>
      <strong>Name:</strong> ${fullName}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Phone:</strong> ${phone}<br>
      <br><strong>Message:</strong><br>${message}
    `;
  });
}

// ================================
// ENQUIRY FORM
// ================================
const enquiryForm = document.getElementById("enquiryForm");
const successMsg = document.getElementById("successMsg");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Hide all previous errors
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

    let hasError = false;

    // Get values
    const fullName = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const budget = document.getElementById("budget").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (!fullName) {
      document.getElementById("nameError").style.display = "block";
      hasError = true;
    }
    if (!email) {
      document.getElementById("emailError").style.display = "block";
      hasError = true;
    }
    if (!phone) {
      document.getElementById("phoneError").style.display = "block";
      hasError = true;
    }
    if (!service) {
      document.getElementById("serviceError").style.display = "block";
      hasError = true;
    }
    if (!message) {
      document.getElementById("messageError").style.display = "block";
      hasError = true;
    }

    // Email format check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (email && !emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email.";
      document.getElementById("emailError").style.display = "block";
      hasError = true;
    }

    // Stop submission if there are errors
    if (hasError) return;

    // Show success message
    successMsg.style.display = "block";
    successMsg.innerHTML = `✔️ Thank you, ${fullName}! Your enquiry has been sent successfully.`;

    // Optional: clear form
    enquiryForm.reset();
  });
}
                  
