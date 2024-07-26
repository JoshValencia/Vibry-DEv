const textVideoElements = document.querySelectorAll(".text-video-media video");

// Text Video Banner
textVideoElements.forEach(function (tvEl) {
  tvEl.controls = false;
  tvEl.parentElement.addEventListener("click", function () {
    tvEl.previousElementSibling.style.display = "none";
    tvEl.nextElementSibling.style.display = "none";
    tvEl.style.display = "block";
    tvEl.play();
  });
});

// Custom MultiColumn
document
  .querySelector(".section-custom-multicolumn .slider.slider--mobile")
  .addEventListener("scroll", function () {
    const totalItems = parseInt(this.dataset.itemsCount);
    const items = document.querySelectorAll(
      ".section-custom-multicolumn .slider__slide"
    );
    items.forEach((item) => {
      const rect = item.getBoundingClientRect();
      if (rect.left >= 0 && rect.right <= window.innerWidth) {
        const currentIndex = parseInt(item.dataset.progress);
        this.nextElementSibling.nextElementSibling.value =
          (currentIndex / totalItems) * 100;
        this.nextElementSibling.nextElementSibling.value =
          (currentIndex / totalItems) * 100;
      }
    });
  });
