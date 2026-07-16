// Function to dynamic launch modal box container popup block element
function openContactModal() {
  document.getElementById("contactModal").style.display = "flex";
}

// Function to safely close the absolute background active running overlay display window view
function closeContactModal() {
  document.getElementById("contactModal").style.display = "none";
}

// Window logic control parameter handler (Modal overlay zone block outer check context structure boundaries)
window.onclick = function (event) {
  let modal = document.getElementById("contactModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
