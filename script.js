// Highlight current page link
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add('active');
  }
});

// Read More / Read Less functionality
const btn = document.getElementById("readMoreBtn");
const moreText = document.getElementById("more");
const dots = document.getElementById("dots");

if (btn) { // makes sure it only runs on pages that have the button
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

images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// CONTACT FORM VALIDATION
const contactForm = document.getElementById("contactForm");
const resultMessage = document.getElementById("resultMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const messageType = document.getElementById("messageType").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !phone || !messageType || !message) {
      resultMessage.innerHTML = `<p style="color:red;">Please fill in all fields.</p>`;
      return;
    }

    // Format email output
    const emailContent = `
      <strong>Message Type:</strong> ${messageType}<br>
      <strong>Name:</strong> ${name}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Phone:</strong> ${phone}<br><br>
      <strong>Message:</strong><br>${message}
    `;

    resultMessage.innerHTML = `
      <p style="color:green;">Your message has been submitted successfully!</p>
      <p>${emailContent}</p>
    `;
  });
}