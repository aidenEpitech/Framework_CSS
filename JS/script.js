window.onload = function () {
  var modal = document.querySelector(".modal");
  var btn = document.querySelector("#myBtn");
  var btncancel = document.querySelector("#btncancel");
  var btncancel2 = document.querySelector("#btncancel2");

  btn.addEventListener("click", function () {
    modal.classList.add("visible");
  });

  btncancel.addEventListener("click", function () {
    modal.style.display = "none";
  });

  btncancel2.addEventListener("click", function () {
    modal.style.display = "none";
  });


  var dismiss = document.querySelector(".popin-dismiss");
  dismiss.addEventListener("click", function () {
    modal.classList.remove("visible");
  });

  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.classList.remove("visible");
    }
  });
  const tabLinks = document.querySelectorAll(".nav-tabs .nav-link");

  tabLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      tabLinks.forEach((link) => link.classList.remove("active"));
      const tabPanes = document.querySelectorAll(".tab-content .tab-pane");
      tabPanes.forEach((pane) => pane.classList.remove("active"));

      link.classList.add("active");
      const target = link.getAttribute("href");
      const targetPane = document.querySelector(target);
      targetPane.classList.add("active");
    });
  });
  window.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });
  let tooltips = document.querySelectorAll('.tooltip');

tooltips.forEach(function (tooltip) {
  tooltip.addEventListener('mouseover', function () {
    tooltip.setAttribute('data-show', 'true');
  });

  tooltip.addEventListener('mouseout', function () {
    tooltip.removeAttribute('data-show');
  });
});
};