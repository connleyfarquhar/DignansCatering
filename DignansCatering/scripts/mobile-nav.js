const NAV_BUTTON = document.querySelector("#nav-btn");
const NAV_LIST = document.querySelector("#nav-list");

// Show/hide navigation on mobile if button is clicked
NAV_BUTTON.onclick = function () {
  NAV_LIST.classList.toggle("show-navigation");
}

// Hide the navigation if a link is clicked
NAV_LIST.onclick = function () {
  if (NAV_LIST.classList.contains("show-navigation")) {
    NAV_LIST.classList.remove("show-navigation");
  }
}