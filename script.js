document.addEventListener("DOMContentLoaded", function () {
  // ১. হ্যামবার্গার ও মোবাইল মেনু টগল (৩-লাইন বাটন)

  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function (e) {
      e.stopPropagation();
      menuToggle.classList.toggle("open");
      navLinks.classList.toggle("active");
    });
  }

  // ২. প্রোফাইল ড্রপডাউন টগল (মোবাইল ও পিসি)

  const profileTrigger = document.querySelector(".nav-profile-trigger");
  // এখানে আইডি অথবা ক্লাস—যেটাই থাকুক না কেন সেটিকে নিখুঁতভাবে সিলেক্ট করা হয়েছে
  const profileDropdown =
    document.getElementById("profileDropdown") ||
    document.querySelector(".profile-dropdown-menu");

  if (profileTrigger && profileDropdown) {
    profileTrigger.addEventListener("click", function (e) {
      e.stopPropagation();

      // ড্রপডাউনটি বর্তমানে বন্ধ থাকলে ওপেন করবে, ওপেন থাকলে বন্ধ করবে
      const isDisplayed =
        window.getComputedStyle(profileDropdown).display === "block";
      if (isDisplayed) {
        profileDropdown.style.display = "none";
      } else {
        profileDropdown.style.display = "block";
      }
    });
  }

  document.addEventListener("click", function (e) {
    // মোবাইল মেনু খোলা থাকলে এবং বাইরে ক্লিক করলে সেটি বন্ধ হবে
    if (menuToggle && navLinks) {
      if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove("open");
        navLinks.classList.remove("active");
      }
    }

    // প্রোফাইল ড্রপডাউন খোলা থাকলে এবং বাইরে ক্লিক করলে সেটি বন্ধ হবে
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
