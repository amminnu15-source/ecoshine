/* ============================================
   FAQ SECTION — Fixed JavaScript
   No scrollHeight needed — pure class toggle
   ============================================ */

document.addEventListener("DOMContentLoaded", function () {

  const items = document.querySelectorAll(".faq-item");

  items.forEach(function (item) {

    const btn = item.querySelector(".faq-question");

    btn.addEventListener("click", function () {

      const isOpen = item.classList.contains("active");

      // Close all items
      items.forEach(function (i) {
        i.classList.remove("active");
        i.querySelector(".faq-question").setAttribute("aria-expanded", "false");
      });

      // If it was closed, open it
      if (!isOpen) {
        item.classList.add("active");
        btn.setAttribute("aria-expanded", "true");
      }

    });

    // Keyboard support — Enter and Space
    btn.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });

  });

});
