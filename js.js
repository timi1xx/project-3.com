$(document).ready(function () {
  $(function () {
    let current = 0;
    const slides = $(".img-slide");
    const total = slides.length;

    function showSlide(index) {
      slides.removeClass("active").eq(index).addClass("active");
    }

    $(".button-1").on("click", function () {
      current = (current + 1) % total;
      showSlide(current);
    });

    $(".button-2").on("click", function () {
      current = (current - 1 + total) % total;
      showSlide(current);
    });
  });
});