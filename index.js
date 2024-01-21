const navBtn = document.getElementById("nav-btn")

navBtn.addEventListener("click", toggleNav)

function toggleNav() {
    document.body.classList.toggle("active")
}