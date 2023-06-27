const navbar = document.getElementById("navbar");
const toggle = document.getElementById("toggle");
const navlong = document.getElementById("navlong");
const navhum = document.querySelectorAll(".navhum");

toggle.addEventListener("click", () => {
  navlong.classList.toggle("long");
  navhum.forEach((item) => item.classList.toggle("long"));

  if (navbar.classList.contains("bottom-20")) {
    navbar.classList.remove("bottom-20");

    navbar.classList.add("-bottom-72");
  } else if (navbar.classList.contains("-bottom-72")) {
    navbar.classList.remove("-bottom-72");
    navbar.classList.add("bottom-20");
  }
});
