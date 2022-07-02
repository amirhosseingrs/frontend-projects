// Navbar Show Hide
const navButton = document.getElementById("nav-button"),
      nav = document.getElementById("nav")
navButton.addEventListener("click", () => {
    nav.classList.toggle("show-nav")
})
// Navbar DropDown Show Hide
const navItems = document.querySelectorAll(".nav__list-item"),
      navSubLists = document.querySelectorAll(".nav__sublist")
navItems.forEach((item, index) => item.addEventListener('click', (event) => {
    if (item.innerHTML.includes("nav__sublist")) {
        // event.preventDefault()
        item.childNodes[3].classList.toggle("show-list")
    }
}))


// Course Video Show Hide
const MainVidPanel = document.querySelector(".main-vid"),
      MainVid = document.querySelector(".main-vid__video"),
      MainVidPanelClose = document.querySelector(".main-vid__close"),
      Videos = document.querySelectorAll(".course-three__play")   
      Videos.forEach((video,index) => video.addEventListener("click", () => {
          const url = video.parentElement.childNodes[1].src;
          MainVidPanel.classList.add("show-main-vid")
          MainVid.src = url;
          MainVid.play()
      }))
MainVidPanelClose.addEventListener("click", () => {
    MainVidPanel.classList.remove("show-main-vid")
})
MainVidPanel.addEventListener("click", () => {
    MainVidPanel.classList.remove("show-main-vid")
})