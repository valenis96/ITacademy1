const menu = document.getElementsByClassName("landing-page--nav-opened-menu")[0]

function showMenu() {
  if (menu) menu.classList.add("show");
}

function closeMenu() {
  if (menu) menu.classList.remove("show");
}

function toggleQuestion(event) {
  const targetId = event.currentTarget.dataset.target;
  const element = document.getElementById(targetId);
  const arrow = event.srcElement
  if (element) element.classList.toggle("show");
  if (arrow) arrow.classList.toggle("arrow-up")
}