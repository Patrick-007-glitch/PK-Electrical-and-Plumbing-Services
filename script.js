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
const resultDiv = document.getElementById("result");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let fullName = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let service = document.getElementById("service").value;
    let date = document.getElementById("date").value;
    let notes = document.getElementById("notes") 
                  ? document.getElementById("notes").value.trim() 
                  : "";

    if (!fullName || !email || !phone || !service || !date) {
      resultDiv.style.display = "block";
      resultDiv.innerHTML = `<p style="color:red;">Please fill all required fields.</p>`;
      return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/;
    if (!emailPattern.test(email)) {
      resultDiv.style.display = "block";
      resultDiv.innerHTML = `<p style="color:red;">Please enter a valid email.</p>`;
      return;
    }

    let selectedDate = new Date(date);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      resultDiv.style.display = "block";
      resultDiv.innerHTML = `<p style="color:red;">Date cannot be in the past.</p>`;
      return;
    }

    let costMessage = "";
    switch (service) {
      case "Electrical":
        costMessage = "Electrical service available. Estimated cost: R750 – R1200.";
        break;
      case "Plumbing":
        costMessage = "Plumbing service available. Estimated cost: R500 – R1000.";
        break;
      case "Installation":
        costMessage = "Installation available. Estimated cost: R800 – R1500.";
        break;
      default:
        costMessage = "We will contact you shortly.";
    }

    resultDiv.style.display = "block";
    resultDiv.innerHTML = `
      <strong>Thank you, ${fullName}!</strong><br>
      ${costMessage}<br>
      Preferred Date: ${date}<br>
      Notes: ${notes}
    `;
  });
}
                  
