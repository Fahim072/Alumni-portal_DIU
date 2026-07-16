// Toggle the profile dropdown window block area logic parameters
function toggleProfileMenu(event) {
  event.stopPropagation();
  let dropdown = document.getElementById("profileDropdown");
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// Close active dropdown box interface layers instantly upon clicking anywhere else on page boundary
window.addEventListener("click", function () {
  let dropdown = document.getElementById("profileDropdown");
  if (dropdown) {
    dropdown.style.display = "none";
  }
});
