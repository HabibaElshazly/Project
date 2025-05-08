document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
  
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".reveal-item");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, {
      threshold: 0.3
    });
  
    items.forEach(item => {
      observer.observe(item);
    });

    items.forEach((item, index) => {
        item.style.setProperty('--delay', `${index * 0.3}s`);
        observer.observe(item);
      });
  });


document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".reveal-item2");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, {
      threshold: 0.3
    });
  
    items.forEach(item => {
      observer.observe(item);
    });

    items.forEach((item, index) => {
        item.style.setProperty('--delay', `${index * 0.3}s`);
        observer.observe(item);
      });
  });