'use strict';

document.querySelector('.email_icon').addEventListener("click", function() {
  const email = "khalidallibalogun08@gmail.com";
  navigator.clipboard.writeText(email)
    .then(() => {
      alert("Copied my Email to your clipboard");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
});

document.querySelector('.phone_icon').addEventListener("click", function() {
  const phoneNumber = "+1 (204) 293 4749";
  navigator.clipboard.writeText(phoneNumber)
    .then(() => {
      alert("Copied my Phone Number to your clipboard");
    })
    .catch(err => {
      console.error("Failed to copy: ", err);
    });
});

function toggleCertificates() {
  const dropdown = document.getElementById("certificateDropdown");
  dropdown.classList.toggle("hidden");
}


