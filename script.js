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

// ১. মোবাইলের হ্যামবার্গার বাটন ও মেনু ওপেন/ক্লোজ করার ফিক্সড কোড
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function (e) {
            e.stopPropagation(); // বাটনে ক্লিক করলে যেন নিচের বডি ক্লিকের কোডটি রান না হয়
            menuToggle.classList.toggle('open');
            navLinks.classList.toggle('active');
        });

        // মেনু খোলা থাকা অবস্থায় স্ক্রিনের অন্য কোথাও ক্লিক করলে মেনু বন্ধ হয়ে যাবে
        document.addEventListener('click', function (e) {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                menuToggle.classList.remove('open');
                navLinks.classList.remove('active');
            }
        });
    }
});

// ২. প্রোফাইল ড্রপডাউন ওপেন/ক্লোজ করার স্মার্ট কোড (ক্লিক করলে খুলবে, বাইরে ক্লিক করলে বন্ধ হবে)
document.addEventListener('DOMContentLoaded', function () {
    const profileTrigger = document.querySelector('.nav-profile-trigger');
    const profileDropdown = document.querySelector('.profile-dropdown-menu');

    if (profileTrigger && profileDropdown) {
        profileTrigger.addEventListener('click', function (e) {
            e.stopPropagation();
            // ড্রপডাউনটি শো/হাইড টগল করবে
            const isDisplayed = window.getComputedStyle(profileDropdown).display === 'block';
            profileDropdown.style.display = isDisplayed ? 'none' : 'block';
        });

        // ড্রপডাউনের বাইরে যেকোনো জায়গায় ক্লিক করলে ড্রপডাউনটি বন্ধ হয়ে যাবে
        document.addEventListener('click', function (e) {
            if (!profileTrigger.contains(e.target) && !profileDropdown.contains(e.target)) {
                profileDropdown.style.display = 'none';
            }
        });
    }
});
