/**
 * bg-init.js – British Pizza Nikol
 * Applies data-bg attribute values as CSS background-image.
 * This allows background images to be set via HTML data attributes
 * instead of inline styles, keeping HTML style-attribute-free.
 */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-bg]').forEach(function (el) {
    el.style.backgroundImage = 'url(' + el.getAttribute('data-bg') + ')';
  });
});
