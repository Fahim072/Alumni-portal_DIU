// Function to launch registration modal box popup
function openRegisterModal() {
  document.getElementById("registerModal").style.display = "flex";
}

// Function to close active registration display window
function closeRegisterModal() {
  document.getElementById("registerModal").style.display = "none";
}

// Close when user clicks outside the modal inner content card area boundary
window.addEventListener("click", function (event) {
  let regModal = document.getElementById("registerModal");
  if (event.target == regModal) {
    regModal.style.display = "none";
  }
});
