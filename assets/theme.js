const toggle = document.getElementById("theme-toggle");
const root = document.documentElement;

toggle.onclick = () => {
  if (root.getAttribute("data-theme") === "dark") {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  }
};

// restore
if (localStorage.getItem("theme") === "dark") {
  root.setAttribute("data-theme", "dark");
}
