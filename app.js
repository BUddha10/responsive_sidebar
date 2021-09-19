const dark = document.querySelector(".dark");

const night = document.querySelector(".night");

const light = document.querySelector(".light");

const Sidebar = document.querySelector(".sidebar");

const activeList = document.querySelector(".active");

dark.addEventListener("click", () => {
  Sidebar.className = "sidebar";
  activeList.className = "list_item active";
});

night.addEventListener("click", () => {
  Sidebar.className = "sidebar night-sidebar";
  activeList.className = "list_item night-active";
});

light.addEventListener("click", () => {
  Sidebar.className = "sidebar light-sidebar";
  activeList.className = "list_item light-active";
});
