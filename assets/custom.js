const textVideoElements = document.querySelectorAll(".text-video-media video");

textVideoElements.forEach(function (tvEl) {
  tvEl.controls = false;
  tvEl.parentElement.addEventListener("click", function () {
    tvEl.previousElementSibling.style.display = "none";
    tvEl.nextElementSibling.style.display = "none";
    tvEl.style.display = "block";
    tvEl.style.height = tvEl.nextElementSibling.style.height;
    tvEl.play();
  });
});
