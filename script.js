// ১. গ্লোবাল প্রোফাইল ড্রপডাউন টগল ফাংশন (HTML এর onclick="toggleProfileMenu" এর জন্য)

function toggleProfileMenu(event) {
  if (event) {
    event.stopPropagation(); // ক্লিকে বডির গ্লোবাল ইভেন্ট যেন রান না হয়
  }

  // HTML-এ থাকা ID এবং ব্যাকআপ হিসেবে ক্লাস—উভয়কেই নিখুঁতভাবে ধরা হয়েছে
  const profileDropdown =
    document.getElementById("profileDropdown") ||
    document.querySelector(".profile-dropdown-menu");

  if (profileDropdown) {
    const isDisplayed =
      window.getComputedStyle(profileDropdown).display === "block";
    if (isDisplayed) {
      profileDropdown.style.display = "none";
    } else {
      profileDropdown.style.display = "block";
    }
  }
}

// ২. ডম (DOM) লোড হওয়ার পর মোবাইল ও গ্লোবাল ইভেন্ট হ্যান্ডলার

document.addEventListener("DOMContentLoaded", function () {
  // ৩-ডট (হ্যামবার্গার) এবং নেভ মেনু সিলেক্ট করা
  const menuToggle =
    document.getElementById("mobile-menu-btn") ||
    document.querySelector(".menu-toggle");
  const navLinks =
    document.querySelector(".nav-links") || document.getElementById("nav-menu");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();

      // বাটনটিকে ক্রসে (X) রূপান্তর ও মেনু স্লাইড ডাউন করার জন্য ক্লাস টগল
      menuToggle.classList.toggle("open");
      navLinks.classList.toggle("active");
    });
  }

  // ৩. গ্লোবাল ক্লিক (স্ক্রিনের যেকোনো ফাঁকা জায়গায় ক্লিক করলে মেনুগুলো বন্ধ হওয়া)

  document.addEventListener("click", function (e) {
    // ১. ফাঁকা জায়গায় ক্লিক করলে মোবাইল মেনু বন্ধ হবে
    if (menuToggle && navLinks) {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove("open");
        navLinks.classList.remove("active");
      }
    }

    // ২. ফাঁকা জায়গায় ক্লিক করলে প্রোফাইল ড্রপডাউন বন্ধ হবে
    const profileTrigger = document.querySelector(".nav-profile-trigger");
    const profileDropdown =
      document.getElementById("profileDropdown") ||
      document.querySelector(".profile-dropdown-menu");

    if (profileTrigger && profileDropdown) {
      if (
        !profileTrigger.contains(e.target) &&
        !profileDropdown.contains(e.target)
      ) {
        profileDropdown.style.display = "none";
      }
    }
  });
});

