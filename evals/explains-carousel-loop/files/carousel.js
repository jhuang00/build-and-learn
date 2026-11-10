/* Auto-scrolling photo strip with a seamless loop */
(function () {
  var strip = document.querySelector('.photo-strip');
  if (!strip) return;

  // Duplicate every photo so the strip can loop without a visible gap
  Array.from(strip.querySelectorAll('figure')).forEach(function (fig) {
    var copy = fig.cloneNode(true);
    copy.setAttribute('aria-hidden', 'true');
    strip.appendChild(copy);
  });

  var speed = 0.5;
  var hovering = false;
  var userScrolling = false;
  var scrollTimer;

  function tick() {
    if (!hovering && !userScrolling) {
      var half = strip.scrollWidth / 2;
      if (strip.scrollLeft >= half) {
        strip.scrollLeft -= half;
      } else {
        strip.scrollLeft += speed;
      }
    }
    requestAnimationFrame(tick);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    requestAnimationFrame(tick);
  }

  strip.addEventListener('mouseenter', function () { hovering = true; });
  strip.addEventListener('mouseleave', function () { hovering = false; });
  strip.addEventListener('touchstart', function () { hovering = true; }, { passive: true });
  strip.addEventListener('touchend', function () {
    setTimeout(function () { hovering = false; }, 2000);
  });
  strip.addEventListener('scroll', function () {
    userScrolling = true;
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () { userScrolling = false; }, 3000);
  }, { passive: true });
})();
