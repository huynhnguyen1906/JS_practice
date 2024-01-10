const naviBar = document.querySelector(".recommend")

window.addEventListener("scroll", () => {
	const scrollY = window.scrollY

	naviBar.style.top = scrollY + "px"
})
